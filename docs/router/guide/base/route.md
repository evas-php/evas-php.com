# Маршруты


## route

Устанавливает маршрут

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Метод |
| 2 | *string* | Путь |
| 3 | *string\|\Closure\|array* | Обработчик/обработчики маршрута |

```php
$router->route('GET', '/', 'home.php');
```

## mergeRoute

Устанавливает маршрут с несколькими методами

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | Методы |
| 2 | *string* | Путь |
| 3 | *string\|\Closure\|array* | Обработчик/обработчики маршрута |

```php
$router->mergeRoute(['GET', 'POST'], '/', 'home.php');
```