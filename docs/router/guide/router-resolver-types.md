# Виды обработчиков роутинга

- Анонимная функция
```php
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
```php
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
```php
// ./view/home.php
// do something

// устанавливаем обработчик в мап-роутер
$router->get('/', 'home.php');
```

- Несколько обработчиков
```php
// устанавливаем массив обработчиков в мап-роутер
$router->get('/users/list', [
    function () {
        // do something
    },
    [UserController::class => 'list'],
    'users/list.php',
]);
```
