# Автороутер по файлу

Создаётся через метод [autoByFile()](/guide/base/groups.html#autobyfile) в родительском роутере.

:::tip Как это работает
Url после базового url автороутера преобразуется в имя файла

*$filename = $filePrefix + `url` + $filePostfix*
:::

Пример:
```php
$router->autoByFile('/', function () {
    // настройка вложенного автороутера через контекст $this
    $this->filePrefix('site/') // префикс файла
    ->filePostfix('.php'); // постфикс файла
});
```
Контекст `$this` будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByFile`

- Запрос / будет вызывать файл ./view/site/index.php
- Запрос /profile будет вызывать файл ./view/site/profile.php
- Запрос /profile/settings будет вызывать файл ./view/site/profile/settings.php


Доступны все базовые настройки, помимо этого есть дополнительные методы:

## filePrefix

Устанавливает префикс файла

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | префикс |

```php
$router->filePrefix('site/');
```

## filePostfix

Устанавливает постфикс файла

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | постфикс |

```php
$router->filePostfix('.php');
```

## Константы для свойств по умолчанию

#### EVAS_AUTOROUTER_FILE_PREFIX

Устанавливает префикс файла по умолчанию.

Будет перезаписан функцией filePrefix()

```php
if (!defined('EVAS_AUTOROUTER_FILE_PREFIX')) 
    define('EVAS_AUTOROUTER_FILE_PREFIX', '');
```

#### EVAS_AUTOROUTER_FILE_POSTFIX

Устанавливает постфикс файла по умолчанию.

Будет перезаписан функцией filePostfix()

```php
if (!defined('EVAS_AUTOROUTER_FILE_POSTFIX')) 
    define('EVAS_AUTOROUTER_FILE_POSTFIX', '.php');
```

