# Роутинг

## requestRouting
Роутинг по объекту запроса `Evas\Http\Interfaces\RequestInterface`

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *Evas\Http\Interfaces\RequestInterface* | объект запроса |

```PHP
$router->requestRouting(App::request());
```

## routing
Роутинг по методу и пути

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | путь |
| 2 | *string\|null* | метод или null |
| 3 | *array\|null* | свойства пути или null |

```PHP
$router->routing('/api/v1/user/list', 'GET');
```
