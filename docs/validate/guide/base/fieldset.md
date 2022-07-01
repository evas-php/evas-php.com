# Валидатор набора полей

Класс `Evas\Validate\Fieldset` позволяет создавать валидаторы набора полей.

## Конфигурация

### Конструктор

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array\|null* | Валидатор или параметры валидатора поля |

```php
public function __construct(array $fields = null, array $props = null);
```

### Пример

```php
new Fieldset([
    'email' => new EmailField,
    'password' => new Field([
        'min' => 6,
        'max' => 30,
        'same' => 'password_repeat',
        'sameLabel' => 'Password Repeat',
    ]),
]);
```

### setProps

Устанавливает свойства набора полей

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | Параметры |

```php
$validate->setProps(['email', 'password']);
```

### field

Устанавливает валидатор поля

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Имя поля |
| 2 | *array\|Field* | Валидатор илии параметры валидатора |

```php
$validate->field('test', ['email']);
```

### fields

Устанавливает валидаторы полей

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | Маппинг валидаторов или параметров валидаторов по именам полей |

```php
$validate->fields(['test', 'test1']);
```

### defaultFieldClass

Устанавливает класс валидатора поля по умолчанию

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Имя класса поля по умолчанию |

```php
$validate->defaultFieldClass('test');
```


## Валидация

### isValid

Валидация данных

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array\|object* | Маппинг значений |
| 2 | *bool\|null* | Проверять на все ошибки |
| 3 | *bool\|null* | Вызывается ли из родительского набора полей |

```php
$validate->isValid([2, 'test'], true, true);
```

### throwIfNotValid

Проверяет данные на валидность с выбрасом исключения в случае ошибки

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array\|object* | Маппинг значений |

```php
$validate->throwIfNotValid([2, 'test']);
```


## Получение ошибок валидации

Получает объект ошибок

```php
$validate->errors();
```

!!!
## Получение отвалидированных значений

```php
$values
```


## Наследование

Вы можете создать свой класс валидатора набора полей отнаследовавшись от `Evas\Validate\Fieldset`.

Пример:
```PHP
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

```PHP
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

```PHP
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
