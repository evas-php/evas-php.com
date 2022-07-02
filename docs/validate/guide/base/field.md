# Валидатор поля

Класс `Evas\Validate\Field` позволяет создавать валидаторы поля.

## Конфигурация

### Конструктор

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array\|null* | Параметры валидатора поля |

```php
public function __construct(array $props = null);
```

Пример:

```php
// создаем и настраиваем валидатор поля
new Field([
    'label' => 'Email',
    'min' => 8,
    'max' => 60,
    'pattern' => '/^.{2,}@.{2,}\..{2,}$/',
]);
```

### Свойства

| Имя | Тип | Описание | По умолчанию |
|-----|-----|----------|--------------|
| $name | *string* | Имя поля |
| $label | *string* | Псевдоним поля |
| $valueBefore | *mixed* | Пришедшее в поле значение до валидации |
| $value | *mixed* | Значение поля после валидации |
| $default | *mixed* | Значение по умолчанию в сулчае отсутствия значения |
| $type | *string* | Тип поля | 'string' |

### Свойства сообщений ошибок
| Имя | Тип | Описание |
|-----|-----|----------|
| $requiredError | *string* | сообщение об отсутствии значения, если поле обязательно |
| $undefinedTypeError | *string* | сообщение об отсутствии функции проверки типа |
| $typeError | *string* | сообщение о неправильном типе значения |


## Валидация

### isValid

Проверяет значение на полную валидность полю

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *mixed* | Значение |
| 2 | *bool* | Пришло ли поле |

```php
$validate->isValid(2, true);
```

### throwIfNotValid

Проверяет значение на валидность полю с выбросом исключения

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *mixed* | Значение |
| 2 | *bool* | Пришло ли поле |

```php
$validate->throwIfNotValid('test', false);
```


## Частичная валидация

### checkType

Проверяет тип значения

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *mixed\|null* | Значение для проверки |

```php
$validate->checkType(22);
```

### checkLength

Проверяет длину строки или диапазон значения

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *mixed\|null* | Значение для проверки |

```php
$validate->checkLength('length');
```

### checkPattern

Валидация с помощью регулярных выражений

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *mixed\|null* | Значение для проверки |

```php
$validate->checkPattern(22);
```

### checkOptions

Проверяет на соответствие опциям

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *mixed\|null* | Значение для проверки |

```php
$validate->checkOptions(null);
```


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

В случае успех валидации, отвалидированное значение будет доступно в переменной `$value`

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

Вы можете создать свой класс валидатора набора полей отнаследовавшись от `Evas\Validate\Field`.

Примеры можно посмотреть в [готовых валидаторах полей](/guide/base/prepared-fields.html).

### prepareValue

Задаёт подготовку значения к валидации.

Исользуется в кастомных валидаторах полей.

```PHP
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