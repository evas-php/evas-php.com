# Автороутер по классу

Создаётся через метод [autoByClass()](/guide/base/groups.html#autobyclass) в родительском роутере.

:::tip Как это работает

Последняя часть url до `/` будет преобразовываться в имя класса

*$className = $classPrefix + `последня часть url` + $classPostfix*

С помощью [`classMethod()`](#classmethod) задается имя метода $classMethod
:::


Пример:
```PHP
$router->autoByClass('/api/v1/user/', function () {
    // настройка вложенного автороутера через контекст $this
    $this->classPrefix('Api\\V1\\User\\') // Префикс класса
    ->classPostfix('Action') // Постфикс класса
    ->classMethod('run'); // Вызываемый метод
});
```

Контекст `$this` внутри функции будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByClass`

- Запрос */api/v1/user/**save*** будет вызывать *(new Api\V1\User\\**Save**Action)->**run**()*
- Запрос */api/v1/user/**list*** будет вызывать *(new Api\V1\User\\**List**Action)->**run**()*

Доступны все базовые настройки, помимо этого есть дополнительные методы:

## classPrefix

Устанавливает префикс класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | префикс |

```PHP
$router->classPrefix('Api\\V1\\Users\\');
```

## classPostfix

Устанавливает постфикс класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | постфикс |

```PHP
$router->classPostfix('Action');
```

## classMethod

Устанавливает вызываемый метод класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя метода |

```PHP
$router->classMethod('run');
```

## Константы для свойств по умолчанию

#### EVAS_AUTOROUTER_CLASS_PREFIX

Устанавливает префикс класса по умолчанию.

Будет перезаписан функцией [classPrefix()](#classprefix)

```PHP
if (!defined('EVAS_AUTOROUTER_CLASS_PREFIX'))
    define('EVAS_AUTOROUTER_CLASS_PREFIX', '');
```

#### EVAS_AUTOROUTER_CLASS_POSTFIX

Устанавливает постфикс класса по умолчанию.

Будет перезаписан функцией [classPostfix()](#classpostfix)

```PHP
if (!defined('EVAS_AUTOROUTER_CLASS_POSTFIX'))
    define('EVAS_AUTOROUTER_CLASS_POSTFIX', '');
```

#### EVAS_AUTOROUTER_CLASS_METHOD

Устанавливает вызываемый метод класса.

Будет перезаписан функцией [classMethod()](#classmethod)

```PHP
if (!defined('EVAS_AUTOROUTER_CLASS_METHOD'))
    define('EVAS_AUTOROUTER_CLASS_METHOD', 'auto');
```
