# Валидатор набора полей

Класс `Evas\Validate\Fieldset` позволяет создавать валидаторы набора полей.

## Конфигурация

### Конструктор
Позволяет объединить [установку валидаторов полей](#fields) и [свойств валидатора набора полей](#setprops).

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *array\|null* | маппинг валидаторов полей или параметров валидаторов полей по их именам |
| 2 | *array\|null* | параметры валидатора набора полей |

Сигнатура:
```php
public function __construct(array $fields = null, array $props = null);
```

Пример:
```php
$fieldset = new Fieldset([
    'email' => new EmailField,
    'password' => [
        'min' => 6, 'max' => 30,
        'same' => 'password_repeat', // password_repeat должен совпадать с password
        'sameLabel' => 'Password Repeat',
    ],
], [
    'name' => 'Регистрация',
    'valuesTypeError' => 'Данные набора полей <":name" > переданы в неверном формате.',
]);
```

### field
Устанавливает валидатор поля

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | имя поля |
| 2 | *[Field](/guide/base/field.html)\|array* | валидатор поля или параметры валидатора поля |

```php
$fieldset->field('email', new EmailField);
$fieldset->field('password', ['min' => 6, 'max' => 30]);
```
Возвращает ссылку на себя


### fields
Устанавливает валидаторы полей

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *array* | маппинг валидаторов полей или параметров валидаторов полей по их именам |

```php
$fieldset->fields([
    'email' => new EmailField,
    'password' => ['min' => 6, 'max' => 30],
]);
```
Возвращает ссылку на себя


### setProps
Устанавливает свойства набора полей

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *array* | маппинг свойств набора полей |

```php
$fieldset->setProps([
    'name' => 'Авторизация',
    'valuesTypeError' => 'Данные набора полей <":name" > переданы в неверном формате.',
]);
```
Возвращает ссылку на себя



### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| $name | *string* | имя набора полей (пригодится для вложенных наборов полей) |
| $valuesTypeError | *string* | шаблон ошибки несоответствия типа значений, переданных в набор полей |
| $valuesBefore | *array* | исходные значения до валидации в виде ассоциативного массива [имя поля => значение], *будет перезаписано при запуске валидации* |
| $values | *array* | отвалидированные значения в виде ассоциативного массива [имя поля => значение], *будет перезаписано при запуске валидации* |


## Валидация

### isValid
Валидация данных

Итеративно проходит по всем валидаторам полей и рекурсивно по вложенным валидаторам набора полей, вызывая их метод isValid с передачей в него значения по имени поля/набора полей

| Аргумент | Тип | Описание | По умолчанию |
|----------|-----|----------|--------------|
| 1 | *array\|object* | данные для валидации в виде маппинга значений |
| 2 | *bool\|null* | проверять на все ошибки | `false` |
| 3 | *bool\|null* | вызывается ли из родительского набора полей | `false` |

```php
$fieldset->isValid(['email' => 'test@test.com', 'password' => 'test']);
```

### throwIfNotValid
Проверяет данные на валидность с выбросом исключения `Evas\Validate\ValidateException` в случае первой попавшейся ошибки (Проверка на все ошибки недоступна).

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *array\|object* | данные для валидации в виде маппинга значений |

```php
$fieldset->throwIfNotValid(['email' => 'test@test.com', 'password' => 'test']);
```


## Получение ошибок валидации

Метод `errors()` позволяет получить объект ошибок валидации `Evas\Validate\Errors`

```php
$data = ['email' => 'test@test.com', 'password' => 'test'];

$fieldset = new Fieldset([
    'email' => new EmailField,
    'password' => ['min' => 6, 'max' => 30],
]);
if (!$fieldset->isValid($data)) {
    die($fieldset->errors()->first()); // вывод первой попавшейся ошибки
}
```


## Получение отвалидированных значений

В случае успеха валидации, отвалидированные значения будет доступны в переменной `$values` в виде ассоциативного массива с именами полей в качестве ключей.

```php
$data = ['email' => 'test@test.com', 'password' => 'test123'];

$fieldset = (new Fieldset([
    'email' => new EmailField,
    'password' => ['min' => 6, 'max' => 30],
]))->throwIfNotValid($data);

echo 'Привет, ' . $fieldset->values['email'] . '. Добро пожаловать на наш сайт.';
```


## Наследование

Вы можете создать свой класс валидатора набора полей отнаследовавшись от `Evas\Validate\Fieldset`.

Пример:

```php
// LoginFieldset.php
class LoginFieldset extends \Evas\Validate\Fieldset
{
    /**
     * Предустановленные поля валидатора.
     * @return array|null
     */
    public function presetFields(): ?array
    {
        return [
            'login' => new \Evas\Validate\Fields\LoginField,
            'password' => new PasswordField,
        ];
    }
}
```

### presetFields

Задаёт предустановленные поля валидатора.

Исользуется в кастомных валидаторах набора полей.

```php
/**
 * Предустановленные поля валидатора.
 * @return array|null
 */
public function presetFields(): ?array
{
    return [
        'login' => new \Evas\Validate\Fields\LoginField,
        'password' => new PasswordField,
    ];
}
```

### presetProps

Задаёт предустановленные свойства валидатора.

Исользуется в кастомных валидаторах набора полей.

```php
/**
 * Предустановленные свойства валидатора.
 * @return array|null
 */
public function presetProps(): ?array
{
    return [
        'name' => 'login_data',
        'fields' => [ 
            // так тоже можно задать предустановленные поля
            // вместо или вместе с presetFieldset
            'login' => new \Evas\Validate\Fields\LoginField,
            'password' => new PasswordField,
        ],
    ];
}
```
