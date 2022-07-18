# Что такое Evas-Validate

**Evas-Validate** — php библиотека из фреймворка [Evas-PHP](https://evas-php.com) для валидации данных.

## Частичная валидациия
Evas-Validate предлагает несколько разных вариантов частичной валидации. Подробно ознакомиться со всеми ее типами вы можете в [валидаторе поля](/guide/base/field.html):  

1. [Валидация типа значения](/guide/base/field.html#checktype)
2. [Валидация длиины строки илии диапазона значений](/guide/base/field.html#checklength)
3. [Валидация с помощью регулярных выражений](/guide/base/field.html#checkpattern)
4. [Валидация на соответствие опциям](/guide/base/field.html#checkoptions)

## Отличительные особенности:
1. Валидаторы без привязки к данным, которые дают возможность переиспользовать валидаторы для похожих данных
2. Экранирование html на уровне валидации, с возможностью тонкой настройки

## Пример c валидатором поля
```php
// создаем и настраиваем валидатор поля даты
$field = new Field([
    'pattern' => '/^(\d{4})-(\d{2})-(\d{2})$/',
]);

// проверяем значение на полную валидность полю
if (!$field->isValid('2021-07-29')) {
    // выведет текст ошибки регулярного выражения
    die($field->error);
}

// выводим отвалидированное значение
echo $field->value;
```

## Пример с валидатором набора полей
### Пример с вложеными полями
```php
// создаем и настраиваем валидатор набора полей
$fieldset = new Fieldset([
    'date' => new DateField,
    'id' => new IdField,
]);

// проверяем значения на полную валидность
if(!$fieldset->isValid(['date' => '2021-07-29', 'id' => '20'])) {
    // выведет первую попавшуюся ошибку
    die($fieldset->errors()->first());
}

// выводим отвалидированное значение
echo $filedset->values['date'];
```

### Пример с вложеным набором полем
```php
// создаем и настраиваем валидатор набора полей
$fieldset = new Fieldset([
    'filter' => new Fieldset([
        'from' => new DateField,
        'to' => new DateField,
    ]),
]);

// проверяем значения на полную валидность
if (!$fieldset->isValid(['filter' => ['from' => '2021-07-29', 'to' => '2021-07-30']])) {
    // выведет первую попавшуюся ошибку
    die($fieldset->errors()->first());
}

// выводим отвалидированное значение
echo $fieldset->values['from'];
```

:::tip Вы можете вкладывать бесконечно много наборов полей
```php
$fieldset = new Fieldset([
    'filter' => new Fieldset([
        'filter2' => new Fieldset([
            ...
        ]),
    ]),
]);
```
:::

### Пример с вложеным JSON набором полей 
```php
// создаем и настраиваем валидатор набора полей
$fieldset = new Fieldset([
    'filter' => new JsonFieldset([
        'from' => new IntField,
        'to' => new IntField,
        'date' => new DateField,
        'name' => new NameField,
    ]),
]);

// проверяем значения на полную валидность
if(!$fieldset->isValid(['filter' => '{"from": "0", "to": "20", "date": "2021-07-29", "name": "test"}'])) {
    // выведет первую попавшуюся ошибку
    die($fieldset->errors()->first());
}

// выводим отвалидированное значение
echo $fieldset->values['filter'];
```

## Пример с валидатором JSON набором полей
### Пример с вложеными полями
```php
// создаем и настраиваем валидатор JSON набора полей
$jsonfieldset = new JsonFieldset([
    'email' => new EmailField,
    'password' => [
        'min' => 6, 'max' => 30
    ],
]);

// проверяем значения на полную валидность
if(!$jsonfieldset->isValid('{"email": "test@test.com", "password": "test123"}')) {
    // выведет первую попавшуюся ошибку
    die($jsonfieldset->errors()->first());
}

// выводим отвалидированное значение
echo $jsonfieldset->values['email'];
```

:::danger Если вкладывается JSON набор полей, то JSON нужно записывать в строку
В качестве примера рассмотрим два JSON`а:
- '{"filter": {"from": "2021-07-29", "to": "2021-07-30" }}'
- '{"filter": "{"from": "2021-07-29", "to": "2021-07-30"}"}'

Разница в них в том, что в одном вложен JSON, а в другом JSON-строка

При проверке валидности первого примера, где вложенным является набор полей, результат будет успешным. При вложенном JSON наборе валидация выдаст ошибку.

Аналогично со вторым примером: при наборе полей - ошибка, при JSON наборе полей - успешная валидация.
:::

### Пример с вложеным набором полей
```php
// создаем и настраиваем валидатор JSON набора полей
$jsonfieldset = new JsonFieldset([
    'filter' => new Fieldset([
        'from' => new DateField,
        'to' => new DateField,
    ]),
]);

// проверяем значения на полную валидность
if(!$jsonfieldset->isValid('{"filter": {"from": "2021-07-29", "to": "2021-07-30" }}')) {
    // успешная валидация
    die($jsonfieldset->errors()->first());
}

if(!$jsonfieldset->isValid('{"filter": "{"from": "2021-07-29", "to": "2021-07-30"}"}')) {
    // выведет ошибку
    die($jsonfieldset->errors()->first());
}
```

### Пример с вложеным JSON набором полей
```php
// создаем и настраиваем валидатор JSON набора полей
$fieldset = new JsonFieldset([
    'filter' => new JsonFieldset([
        'from' => new DateField,
        'to' => new DateField,
    ]),
]);

// проверяем значения на полную валидность
if(!$jsonfieldset->isValid('{"filter": {"from": "2021-07-29", "to": "2021-07-30" }}')) {
    // выведет ошибку
    die($jsonfieldset->errors()->first());
}

if(!$jsonfieldset->isValid('{"filter": "{"from": "2021-07-29", "to": "2021-07-30"}"}')) {
    // успешная валидация
    die($jsonfieldset->errors()->first());
}
```
