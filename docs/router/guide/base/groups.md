# Группировка маршрутов

Создаёт вложенные роутеры, которые можно настроить через функцию с проброшенным контекстом `$this`.

Для всех видов вложенных роутеров доступны все стандартные методы настроки описаные ранее, в том числе и дальнейшая группировка.

:::tip Свойства наследуемые во вложенный роутер, если описаны выше
[$controllerClass](/guide/base/controller-class.html), 
[$viewsDir](/guide/base/views-dir.html), 
[$aliases](/guide/base/aliases.html)
:::

## map
Создаёт вложенный [маппинг роутер](/guide/routers/map.html) для группы маршрутов

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

```php
// этот вложенный роутер сработает при любом методе запроса
$router->map('/account', function () {
    // настройка вложенного маппинг роутера через контекст $this
    $this->get('/profile', [AccountController::class => 'profile']);
});
```

```php
// этот вложенный роутер сработает только при POST методе запроса
$router->map('/account', 'POST', function () {
    // настройка вложенного маппинг роутера через контекст $this
});
```



## autoByFile
Создаёт вложенный [автороутер по файлу](/guide/routers/auto-by-file.html) для группы маршрутов

 Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

```php
$router->autoByFile('/', function () {
    // настройка вложенного автороутера через контекст $this
});
```



## autoByClass
Создаёт вложенный [автороутер по классу](/guide/routers/auto-by-class.html) для группы маршрутов

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

```php
$router->autoByClass('/api/v1/user/', function () {
    // настройка вложенного автороутера через контекст $this
});
```


## autoByMethod
Создаёт вложенный [автороутер по методу и классу](/guide/routers/auto-by-class-method.html) для группы маршрутов

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

```php
$router->autoByMethod('/api/v1/', function () {
    // настройка вложенного автороутера через контекст $this
});
```


## autoByFunc
Создаёт вложенный [автороутер по кастомной функции](/guide/routers/auto-by-func.html) для группы маршрутов

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|callable* | метод или функция настройки роутера |
| 3 | *callable\|null* | функция настройки роутера или null |

```php
$router->autoByFunc('/api/v1/', function () {
    // настройка вложенного автороутера через контекст $this
});
