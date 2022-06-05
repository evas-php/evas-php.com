# Директория отображений

Устанавливается для роутера или вложенного роутера, наследуется.

При совпадении маршрута передаётся в [Controller](/guide/base/controller-class.html), где и используется как базовый путь отображений.

## viewsDir
Устанавливает директорию отображений для роутера и вложенных роутеров

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Относительный или абсолютный путь |

```PHP
$router->viewsDir('views/pages');
```

Вы можете задавать разные директории отображений для разных групп маршрутов

::: tip Директория отображений наследуется во вложенные роутеры
если она описана выше вложенных роутеров
:::


## EVAS\_VIEWS\_DIR

Устанавливает директорию отображений по умолчанию

По умолчанию установлено: `views/`
```PHP
if (!defined('EVAS_VIEWS_DIR')) define('EVAS_VIEWS_DIR', 'views/');
```

:::warning Устанавливается в качестве первоначального значения $viewsDir контроллера
Установка директории через [`viewsDir()`](/guide/base/views-dir.html) перезатрёт это значение
:::