# Виды обработчиков роутинга

- Анонимная функция
```PHP
$func = function () {
    // do something
};

// устанавливаем обработчик в мап-роутер
$router->get('/something', $func);

// или можно задать анонимную функцию на месте
// устанавливаем обработчик в мап-роутер
$router->get('/something', function () {
    // do something
});
```
- Метод класса
```PHP
class UserController
{
    public function list() {
        // do something
    }
}

// устанавливаем обработчик в мап-роутер
$router->get('/users/list', [UserController::class => 'list']);
```
- Файл
```PHP
// ./view/home.php
// do something

// устанавливаем обработчик в мап-роутер
$router->get('/', 'home.php');
```

- Несколько обработчиков
```PHP
// устанавливаем массив обработчиков в мап-роутер
$router->get('/users/list', [
    function () {
        // do something
    },
    [UserController::class => 'list'],
    'users/list.php',
]);
```
