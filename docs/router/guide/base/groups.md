# Группировка маршрутов

Создаёт вложенные роутеры, которые можно настроить через функцию с проброшенным контекстом `$this`.

Для всех видов вложенных роутеров доступны все стандартные методы настроки описаные ранее, в том числе и дальнейшая группировка.

:::tip Свойства наследуемые во вложенный роутер, если описаны выше
[$controllerClass](/guide/base/controller-class.html), 
[$viewsDir](/guide/base/views-dir.html), 
[$aliases](/guide/base/aliases.html)
:::

## map
Создаёт вложенный [маппинг роутер](/guide/groups/map.html) для группы маршрутов

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

```PHP
// этот вложенный роутер сработает при любом методе запроса
$router->map('/account', function () {
    // настройка роутера через контекст $this
    $this->get('/profile', [AccountController::class => 'profile']);
});
```

```PHP
// этот вложенный роутер сработает только при POST методе запроса
$router->map('/account', 'POST', function () {
    // настройка роутера через контекст $this
});
```

Контекст `$this` будет содержать новый экземпляр класса `Evas\Router\Routers\MapRouter`.



## autoByFile
Создаёт вложенный [автороутер по файлу](/guide/groups/auto-by-file.html) для группы маршрутов

 Аргумент | Тип | Описание |
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
    $this->filePrefix('site/') // префикс файла
    ->filePostfix('.php'); // постфикс файла
});
```

Контекст `$this` будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByFile`



## autoByClass
Создаёт вложенный [автороутер по классу](/guide/groups/auto-by-class.html) для группы маршрутов

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

Пример:
```PHP
$router->autoByClass('/api/v1/users/', function () {
    $this->classPrefix('Api\\V1\\Users\\') // Префикс класса
    ->classPostfix('Action') // Постфикс класса
    ->classMethod('run'); // Вызываемый метод
});
```

Контекст `$this` будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByClass`

- Запрос */api/v1/users/**save*** будет вызывать *(new Api\V1\Users\\**Save**Action)->**run**()*
- Запрос */api/v1/users/**list*** будет вызывать *(new Api\V1\Users\\**List**Action)->**run**()*

:::tip Как это работает

Последняя часть url до `/` будет преобразовываться в имя класса

$className = $classPrefix + `последня часть url` + $classPostfix

С помощью [`classMethod()`](#classmethod) задается имя метода $classMethod
:::


## autoByMethod
Создаёт вложенный [автороутер по методу и классу](/guide/groups/auto-by-class-method.html) для группы маршрутов



## autoByFunc
Создаёт вложенный [автороутера по кастомной функции](/guide/groups/auto-by-func.html) для группы маршрутов
