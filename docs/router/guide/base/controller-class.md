# Контроллер файлов и функций

::: warning Вы можете установить свой кастомный контроллер
Но **важно** чтобы он соответствовал интерфейсу **\Evas\Router\Interfaces\ControllerInterface**
чтобы избежать проблем в автороутинге

:::details \Evas\Router\Interfaces\ControllerInterface
```PHP
namespace Evas\Router\Interfaces;

interface ControllerInterface
{
    /**
     * Открытие файла.
     * @param string имя файла относительное директории отображений
     * @param array|null аргументы файла
     */
    public function view(string $filename, array $args = null);

    /**
     * Выбрасывание исключения в случае невозможности открытия файла отображения.
     * @param string имя файла относительное директории отображений
     */
    public function throwIfNotCanView(string $filename);
}
```
:::

## controllerClass

Устанавливает контроллер файлов и функций для роутера и вложенных роутеров


| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Имя класса |

```PHP
$router->controllerClass(\Evas\Router\Controller::class);
```

Вы можете задавать разные контроллеры файлов и функций для разных групп маршрутов

::: tip Контроллер файлов и функций наследуется во вложенные роутеры
если он описан выше вложенных роутеров
:::

## EVAS\_CONTROLLER\_CLASS

Устанавливает контроллер по умолчанию

По умолчанию установлен класс: `\Evas\Router\Controller`
```PHP
if (!defined('EVAS_CONTROLLER_CLASS')) define('EVAS_CONTROLLER_CLASS', Controller::class);
```

:::warning Устанавливается в качестве первоначального значения $controllerClass роутера
Установка контроллера через [`controllerClass()`](/guide/base/controller-class.html) перезатрёт это значение
:::
