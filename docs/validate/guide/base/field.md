# Валидатор поля

Класс `Evas\Validate\Field` позволяет создавать валидаторы полей.

## Конфигурация

### Конструктор

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *array\|null* | параметры валидатора поля |

Сигнатура:
```php
public function __construct(array $props = null);
```

Пример:

```php
// создаем и настраиваем валидатор поля
$field = new Field([
    'label' => 'Email',
    'min' => 8,
    'max' => 60,
    'pattern' => '/^.{2,}@.{2,}\..{2,}$/',
]);
```

### Свойства

| Имя | Тип | Описание | По умолчанию |
|-----|-----|----------|--------------|
| $name | *string* | имя поля |
| $label | *string* | псевдоним поля *(для вывода в ошибках)* |
| $type | *string\|array* | тип или массив типов поля | `'string'` |
| $checkType | *bool* | проверять ли тип значения | `false` |
| $required | *bool* | обязательность | `true` |
| $trim | *bool* | делать ли очистку пробельных символов по краям строки | `true` |
| $min | *int* | минимальная длина строки или минимальное значение диапазона для числа или кол-ва элементов массива/объекта |
| $max | *int* | максимальная длина строки или максимальное значение диапазона для числа или кол-ва элементов массива/объекта |
| $pattern | *string* | регулярное выражение для проверки соответствия строки |
| $matches | *array* | совпадения, найденные регулярным выражением |
| $options | *array* | допустимые опции поля |
| $same | *string* | имя поля с совпадающим значением |
| $sameLabel | *string* | псевдоним поля с совпадающим значением *(для вывода в ошибках)* |
| $prepareValueCb | *callable* | колбэк для подготовки значения к валидации |
| $default | *mixed* | значение по умолчанию в случае отсутствия значения |
| $valueBefore | *mixed* | пришедшее в поле значение до валидации |
| $value | *mixed* | значение поля после валидации |
| $error | *string* | сообщение ошибки последней валидации |
| $undefinedType | *string* | в случае ошибки типа поля при валидации значения, сюда будет записан тип значения |

### Свойства локальных шаблонов ошибок

| Имя | Тип | Описание |
|-----|-----|----------|
| $requiredError | *string* | шаблон ошибки отсутствия значения, если поле обязательно |
| $undefinedTypeError | *string* | шаблон ошибки отсутствия функции проверки типа |
| $typeError | *string* | шаблон ошибки неправильного типа значения |
| $lengthError | *string* | шаблон ошибки длины текстового поля |
| $rangeError | *string* | шаблон ошибки непопадания в диапазон значений |
| $countError | *string* | шаблон ошибки непопадания в диапазон количества элементов массива/объекта |
| $patternError | *string* | шаблон ошибки регулярки |
| $optionsSettingError | *string* | шаблон ошибки указания опций поля |
| $optionsError | *string* | шаблон ошибки несовпадения с опциями поля |
| $sameError | *string* | шаблон ошибки несовпадения значений в совпадающих полях |


## Валидация

### isValid

Проверяет значение на полную валидность полю.

:::details Принцип работы
1. Если значение *null*, то устанавливается значение по умолчанию [$default](/guide/base/field.html#своиства)
2. Если значение ещё *null*, но обязательное *(свойство [$required](/guide/base/field.html#своиства) установлено true)*, то устанавливается ошибка шаблона [$requiredError](/guide/base/field.html#своиства-сообщении-ошибок)
3. Если значение *null*, необязательно *(свойство [$required](/guide/base/field.html#своиства) установлено false)* и не пришло *(функция вызвана со 2 аргументом false)*, то возвращает `true`
4. Если установлена проверка типа значения ([$checkType](/guide/base/field.html#своиства) = *true*), то делается проверка типа значения ([checkType](/guide/base/field.html#checktype)), в случае провала возвращается `false`
5. [Экранируются html-теги](/guide/extra/html-serialize.html)
6. Делается проверка длины/диапазона ([checkLength](/guide/base/field.html#checklength)), в случае провала возвращается `false`
7. Делается проверка по регулярному выражению ([checkPattern](/guide/base/field.html#checkpattern)), в случае провала возвращается `false`
8. Делается проверка пона соответствие опциям ([checkOptions](/guide/base/field.html#checkoptions)), в случае провала возвращается `false`
9. Валидация успешно пройдена, вызывается хук [afterValidate](/guide/base/field.html#aftervalidate) если он описан и возвращается `true`.
:::

| Аргумент | Тип | Описание | По умолчанию |
|----------|-----|----------|--------------|
| 1 | *mixed* | значение |
| 2 | *bool* | пришло ли поле (для проверки на наличие значения, если поле обязательно) | `true` |

```php
$field->isValid(2);
```
Возвращает *bool* результат валидации: `true` в случае успеха, `false` в случае провала

В случае успеха валидации, будет вызван хук [afterValidate](/guide/base/field.html#aftervalidate) если он описан.


### throwIfNotValid

Проверяет значение на валидность полю через вызов [isValid](/guide/base/field.html#isvalid) с выбросом исключения `Evas\Validate\ValidateException` в случае ошибки.

| Аргумент | Тип | Описание | По умолчанию |
|----------|-----|----------|--------------|
| 1 | *mixed* | значение |
| 2 | *bool* | пришло ли поле (для проверки на наличие значения, если поле обязательно) | `true` |

```php
$field->throwIfNotValid('test');
```


## Частичная валидация

### checkType
Проверяет тип значения на соответствие типу указанному в [$type](/guide/base/field.html#своиства) с помощью попытки вызова функции `call_user_func("is_$type", $value)`

В случае отсутвия функции проверки типа устанавливает ошибку шаблона [$undefinedTypeError](/guide/base/field.html#своиства-сообщении-ошибок)

В случае несоответствия типа значения устанавливает ошибку шаблона [$typeError](/guide/base/field.html#своиства-сообщении-ошибок)

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *mixed\|null* | значение для проверки |

```php
$field->checkType('значение для проверки');
```
Возвращает *bool* результат валидации: `true` в случае успеха, `false` в случае провала

Если проверка вызвана отдельно от [isValid](/guide/base/field.html#isvalid), то в случае успеха валидации, будет вызван хук [afterValidate](/guide/base/field.html#aftervalidate) если он описан.




### checkLength
Если у поля установлены свойства [$min](/guide/base/field.html#своиства) и/или [$max](/guide/base/field.html#своиства) проверяет переданное значение на:
- длину строки 
*(если [$type](/guide/base/field.html#своиства) 'string')* 
и устанавливает ошибку шаблона [$lengthError](/guide/base/field.html#своиства-сообщении-ошибок) в случае провала
- диапазон количества элементов в массиве/объекте 
*(если [$type](/guide/base/field.html#своиства) 'array' или 'object')* 
и устанавливает ошибку шаблона [$countError](/guide/base/field.html#своиства-сообщении-ошибок) в случае провала
- диапазон числа 
*(в остальных случаях)* 
и устанавливает ошибку шаблона [$rangeError](/guide/base/field.html#своиства-сообщении-ошибок) в случае провала.

Перед проверкой делает проверку типа значения ([checkType](/guide/base/field.html#checktype)), если тип значения не строка (*string*), не число (*number*) и не *null*

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *mixed\|null* | значение для проверки |

```php
$field->checkLength('значение для проверки');
```
Возвращает *bool* результат валидации: `true` в случае успеха, `false` в случае провала

Если проверка вызвана отдельно от [isValid](/guide/base/field.html#isvalid), то в случае успеха валидации, будет вызван хук [afterValidate](/guide/base/field.html#aftervalidate) если он описан.



### checkPattern
Проверяет переданное значение с помощью регулярного выражения, если у поля установлено свойство [$pattern](/guide/base/field.html#своиства)

Перед проверкой также проверит тип значения ([checkType](/guide/base/field.html#checktype)), 
если тип переданного значения не строка (*string*), не число (*number*) и не *null*

Совпадения проверки по регулярному выражению будут записаны в свойство [$matches](/guide/base/field.html#своиства)

В случае не соответствия значения регулярному выражению устанавливает ошибку шаблона  [$patternError](/guide/base/field.html#своиства-сообщении-ошибок)

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *mixed\|null* | значение для проверки |

```php
$field->checkPattern('значение для проверки');
```
Возвращает *bool* результат валидации: `true` в случае успеха, `false` в случае провала

Если проверка вызвана отдельно от [isValid](/guide/base/field.html#isvalid), то в случае успеха валидации, будет вызван хук [afterValidate](/guide/base/field.html#aftervalidate) если он описан.



### checkOptions
Проверяет переданное значение на соответствие опциям если у поля установлено свойство [$options](/guide/base/field.html#своиства)

В случае не соответствия значения любой из опций устанавливает ошибку шаблона  [$optionsError](/guide/base/field.html#своиства-сообщении-ошибок)

:::warning $options должны быть массивом (array)
Если установленные опции [$options](/guide/base/field.html#своиства) будут не типа *array*, 
**будет установлена ошибка шаблона [$optionsSettingError](/guide/base/field.html#своиства-сообщении-ошибок) и проверка соответствия опциям не будет выполнена**.
:::

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *mixed\|null* | значение для проверки |

```php
$field->checkOptions('значение для проверки');
```
Возвращает *bool* результат валидации: `true` в случае успеха, `false` в случае провала

Если проверка вызвана отдельно от [isValid](/guide/base/field.html#isvalid), то в случае успеха валидации, будет вызван хук [afterValidate](/guide/base/field.html#aftervalidate) если он описан.


## Получение ошибок валидации
В случае ошибки валидации, текст ошибки будет записан в переменную `$error`

```php
$field = new Field(['min' => 3, 'max' => 10]);
if (!$field->isValid('Hi')) {
    // выведет текст ошибки длины
    // в данном случае: 'error.validate.field.length.min'
    die($field->error);
}
```

Текст ошибки поддерживает шаблонизацию, вы можете изменить шаблоны ошибок, подробнее об этом в разделе [Кастомизация ошибок](/guide/extra/custom-errors.html)

## Получение отвалидированного значения

В случае успеха валидации, отвалидированное значение будет доступно в переменной `$value`

```php
$field = new Field(['min' => 3, 'max' => 10]);
if (!$field->isValid('John')) {
    die($field->error);
}
echo 'Hi there! I\'m ' . $field->value; // выводим отвалидированное значение
```

## Хуки

### afterValidate
Срабатывает после валидации поля

```php
protected function afterValidate()
{
    $this->value = json_decode($this->value, true);
}
```


## Наследование

Вы можете создать свой класс валидатора набора полей отнаследовавшись от класса 
`Evas\Validate\Field`.

Примеры можно посмотреть в [готовых валидаторах полей](/guide/base/prepared-fields.html).

### prepareValue
Задаёт подготовку значения к валидации.

Исользуется в кастомных валидаторах полей.

```php
/**
 * Подготовка значения к валидации для кастомных классов валидаторов полей.
 * @param mixed значение
 * @return mixed подготовленное значение
 */
public function prepareValue($value)
{
    return $value;
}
```
