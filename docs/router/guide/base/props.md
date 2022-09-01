# Получение свойств из пути

::: tip Свойства пути можно передать в обработчик
Путь проверяется по регулярному выражению, вы можете заключить весь путь или кусочек/кусочки пути в круглые скобки `(часть пути)`, после чего это будет доступно в аргументах обработчика.
:::

- Пример передачи свойств пути в анонимную функцию

Аргументы пути передаются в аргументы функции
```php
$router->get('/users/(\d+)', function ($user_id) {
    echo "show user with id = $user_id";
});
```

- Пример передачи свойств пути в метод класса

Аргументы пути передаются в аргументы метода класса

```php
$router->get('/users/(\d+)/(add|save|delete)', [UserController::class => 'doAction']);

// class UserController
class UserController
{
    public function doAction ($user_id, $action) {
        echo "$action user with id = $user_id";
    }
}
```

- Пример передачи свойств пути в файл

Аргументы пути доступны в массиве `$args`
```php
$router->get('/users/(\d+)/(add|save|delete)', 'users.php');

// ./view/users.php
echo $args['action'] . 'user with id = ' . $args['user_id'];
```

