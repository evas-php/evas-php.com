# Автороутер по файлу

## autoByFile

Устанавливает вложенный автороутер по файлу

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

Пример:
- Запрос / будет вызывать файл ./view/site/index.php
- Запрос /profile будет вызывать файл ./view/site/profile.php
- Запрос /profile/settings будет вызывать файл ./view/site/profile/settings.php
```PHP
$router->autoByFile('/', function () {
    $this->filePrefix('site/')->filePostfix('.php');
});
```

Контекст `$this` внутри функции будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByFile`

Доступны все базовые настройки, помимо этого есть доолнительные методы.

## Дополнительные методы:

### filePrefix

Устанавливает префикс файла

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | префикс |

```PHP
$router->filePrefix(string 'site/');
```

### filePostfix

Устанавливает постфикс файла

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | постфикс |

```PHP
$router->filePostfix(string '.php');
```

## Константы для свойств по умолчанию

#### EVAS_AUTOROUTER_FILE_PREFIX

Устанавливает префикс файла по умолчанию.

Будет перезаписан функцией filePrefix()

```PHP
if (!defined('EVAS_AUTOROUTER_FILE_PREFIX')) 
    define('EVAS_AUTOROUTER_FILE_PREFIX', '');
```

#### EVAS_AUTOROUTER_FILE_POSTFIX

Устанавливает постфикс файла по умолчанию.

Будет перезаписан функцией filePostfix()

```PHP
if (!defined('EVAS_AUTOROUTER_FILE_POSTFIX')) 
    define('EVAS_AUTOROUTER_FILE_POSTFIX', '.php');
```

