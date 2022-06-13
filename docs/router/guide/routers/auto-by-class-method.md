# Автороутер по методу и классу

Создаётся через метод [autoByMethod()](/guide/base/groups.html#autobymethod) в родительском роутере.

:::tip Как это работает

Url после базового url автороутера, разбивается по `/` на массив частей

Последняя часть будет преобразовываться в имя метода

*$methodName = $methodPrefix + `последняя часть url` + $methodPostfix*

Предпоследная часть будет преобразовываться в имя класса

*$className = $classPrefix + `предпоследня часть url` + $classPostfix*

В преобразование имени класса будет передано `index`, если предпоследней части нет

*$className = $classPrefix + `index` + $classPostfix*

Если задать `classCustom($classCustom)`, то будет вызваться метод из этого класса, минуя преобразование имени класса из url.

*$className = $classCustom*
:::


Пример:
```PHP
$router->autoByMethod('/api/', function () {
    $this->classPrefix('Controllers\\Api\\')->classPostfix('Controller')
    ->methodPostfix('Action');
});
```
Контекст `$this` внутри функции будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByClassMethod`

- /api/**user**/**get** - вызовет Controllers\Api\\**User**Controller->**get**Action()
- /api/**user**/**save** - вызовет Controllers\Api\\**User**Controller->**save**Action()
- /api/**admin**/**user**/**save** - вызовет Controllers\Api\\**Admin**\\**User**Controller->**save**Action()
- /api/**user** - вызовет Controllers\Api\\**Index**Controller->**user**Action()
- /api/ - вызовет Controllers\Api\\**Index**Controller->**index**Action()

Доступны все базовые настройки, помимо этого есть дополнительные методы:

## classPrefix

Устанавливает префикс класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | префикс класса |

```PHP
$router->classPrefix('Api\\V1\\Users\\');
```

## classPostfix

Устанавливает постфикс класса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | постфикс класса |

```PHP
$router->classPostfix('Controller');
```

## classCustom

Устанавливает кастомное имя класса.

Если задан, будет вызваться метод из этого класса, минуя преобразование имени класса из url.

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | кастомное имя класса |

```PHP
$router->classCustom(\Controllers\Api\ApiController::class);
```

## methodPrefix

Устанавливает префикс метода

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | префикс метода |

```PHP
$router->methodPrefix('auto');
```

## methodPostfix

Устанавливает постфикс метода

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | постфикс метода |

```PHP
$router->methodPostfix('Action');
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

#### EVAS_AUTOROUTER_METHOD_PREFIX

Устанавливает префикс метода по умолчанию.

Будет перезаписан функцией [methodPrefix()](#methodprefix)

```PHP
if (!defined('EVAS_AUTOROUTER_METHOD_PREFIX'))
    define('EVAS_AUTOROUTER_METHOD_PREFIX', '');
```

#### EVAS_AUTOROUTER_METHOD_POSTFIX

Устанавливает постфикс метода по умолчанию.

Будет перезаписан функцией [methodPostfix()](#methodpostfix)

```PHP
if (!defined('EVAS_AUTOROUTER_METHOD_POSTFIX'))
    define('EVAS_AUTOROUTER_METHOD_POSTFIX', '');
```
