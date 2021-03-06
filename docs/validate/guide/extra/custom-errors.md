# Кастомизация ошибок

Класс `Evas\Validate\ErrorBuilder` позволяет собирать шаблонизированные ошибки валидации.

## Область видимости
В сборщике ошибок Evas-Validate существуют глобальные и локальные шаблоны по кодам и коды ошибок по типу.

Глобальные шаблоны и коды прописаны изначально в файлах конфигурации и применяются для всех классов. Путь к файлам объявлен в [константах](/guide/extra/constants.md). Принцип работы шаблонизатора описан [ниже](#принцип-работы).

Локальные шаблоны и коды может прописывать пользователь для каждого класса. Подробнее о них написано в [кастомизации шаблонов](#кастомизация-шаблонов).

:::tip Будут использоваться глобальные шаблоны и коды,
если шаблоны и коды не были локально объявлены
:::

## Принцип работы
Для более понятного вывода ошибок Evas-Validate использует шаблонизацию по кодам. Коды разделены на неизвестные ошибки, ошибки поля и набора полей. Рассмотрим пример ошибки валидации поля:

```php
// создаем и настраиваем валидатор поля
$field = new Field(['min' => 3, 'max' => 10]);

// проверяем значения на полную валидность
if (!$field->isValid('Hi')) {
    // выведет текст ошибки длины
    // в данном случае: 'error.validate.field.length.min'
    die($field->error);
}
```

:::tip Как происходит шаблонизация
На данном примере мы наблюдаем ошибку минимальной длины. Получаем тип ошибки 'minLength', что соответствует коду 6. В файле с глобальными шаблонами ошибок по коду получаем 'error.validate.field.length.min'. 

Также Evas-Validate поддерживает русскую локализацию шаблонов, в данном случае будет получаена ошибка 'Значение поля ":label" должно быть длиной< от :min> символов'.
:::

## Кастомизация шаблонов
Evas-Validate поддерживает возможность кастомизации шаблонов ошибок и их кодов. Рассмотрим пример с ошибкой валидации поля по регулярному выражению.

В файл шаблонов ошибок по кодам положим следующие значения:
```php
return [
    0 => 'validateError.pattern'
];
```

А в файл кодов ошибок по типам:
```php
return [
    'pattern' => 0,
];
```

Пример работы:
```php
// создаем и настраиваем валидатор поля
$field = new Field([
    'pattern' => '/^(\d{4})-(\d{2})-(\d{2})$/',
]);

// проверяем значения на полную валидность
if (!$field->isValid('2021-2121-21')) {
    // выведет текст ошибки регулярного выражения
    // в данном случае: 'validateError.pattern'
    die($field->error);
}
```
