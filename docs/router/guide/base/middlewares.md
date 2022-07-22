# Middlewares

Промежуточные обработчики

::: tip Необходимы, если нужно выполнить какие-то операции для всех маршрутов роутера, например, проверить авторизованность или права доступа пользователя.
Если обработчик middleware в результате работы возвращает `false`, дальнейшая обработка middlewares и вызов обработчика самого маршрута не произойдет
:::

## middleware

Устанавливает middleware/middlewares

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *... (string\|\Closure\|array)* | Обработчик/обработчики middleware |

Сигнатура
```php
public function middleware(...$middlewares): RouterInterface;
```

### Установка middleware

```php
$router->middleware([CheckAccess::class => 'isLogged']);
```

### Установка middlewares
```php
$router->middleware(
    [CheckAccess::class => 'isLogged'],
    [CheckAccess::class => 'isAdmin']
);
```

## Максимальный рекурсивный лимит получения middlewares каскадом вверх
:::tip По умолчанию установлено: 5
можно переопределить с помощью константы EVAS_ROUTER_MIDDLEWARES_DEEP_LIMIT
:::

```php
if (!defined('EVAS_ROUTER_MIDDLEWARES_DEEP_LIMIT')) {
    define('EVAS_ROUTER_MIDDLEWARES_DEEP_LIMIT', 5);
}
```

:::danger При достижении лимита вылетит исключение
Evas\Router\Exceptions\RouterException: Router middleware deep limit exceeded
:::
