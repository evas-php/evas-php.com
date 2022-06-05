# Автороутер по классу

## autoByClass

Устанавливает вложенный автороутер по файлу

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

Пример:
```PHP
$router->autoByClass('/api/v1/users', function () {
    $this->classPrefix('Api\\V1\\Users\\') // Префикс класса
    ->classPostfix('Action') // Постфикс класса
    ->classMethod('run'); // Вызываемый метод
});
```

Контекст `$this` внутри функции будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByClass`

- Запрос */api/v1/users/**save*** будет вызывать *(new Api\V1\Users\\**Save**Action)->**run**()*
- Запрос */api/v1/users/**list*** будет вызывать *(new Api\V1\Users\\**List**Action)->**run**()*

:::tip Как это работает

Последняя часть url до `/` будет преобразовываться в имя класса

$className = $classPrefix + `последня часть url` + $classPostfix

С помощью [`classMethod()`](#classmethod) задается имя метода $classMethod
:::

## Дополнительные методы:

### classPrefix

Устанавливает префикс класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | префикс |

```PHP
$router->classPrefix(string 'Api\\V1\\Users\\');
```

### classPostfix

Устанавливает постфикс класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | постфикс |

```PHP
$router->classPostfix(string 'Action');
```

### classMethod

Устанавливает вызываемый метод класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя метода |

```PHP
$router->classMethod('run');
```

## Константы для свойств по умолчанию

#### EVAS_AUTOROUTER_CLASS_METHOD

Устанавливает вызываемый метод класса.

Будет перезаписан функцией classMethod()

```PHP
if (!defined('EVAS_AUTOROUTER_CLASS_METHOD'))
    define('EVAS_AUTOROUTER_CLASS_METHOD', 'auto');
```

#### EVAS_AUTOROUTER_CLASS_PREFIX

Устанавливает префикс класса по умолчанию.

Будет перезаписан функцией classPrefix()

```PHP
if (!defined('EVAS_AUTOROUTER_CLASS_PREFIX'))
    define('EVAS_AUTOROUTER_CLASS_PREFIX', '');
```

#### EVAS_AUTOROUTER_CLASS_POSTFIX

Устанавливает постфикс класса по умолчанию.

Будет перезаписан функцией classPostfix()

```PHP
if (!defined('EVAS_AUTOROUTER_CLASS_POSTFIX'))
    define('EVAS_AUTOROUTER_CLASS_POSTFIX', '');
```
