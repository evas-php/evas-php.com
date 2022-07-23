# Что такое Evas-Router

**Evas-Router** — php библиотека из фреймворка [Evas-PHP](https://evas-php.com) для роутинга сайтов, веб-приложений или php-скриптов.

## Отличительные особенности:
1. Настраиваемый **автороутинг** по файлу, классу или методу класса из коробки в связке с обычным мап-роутингом
2. Можно указывать методы классов, функции или вьюхи в качестве [обработчиков маршрутов](/guide/router-resolver-types.html)
3. LazyLoad в [группах маршрутов](/guide/base/groups.html) — вложенный роутер не проиницализируется пока не совпадёт с запросом

## Пример
```php
// создаём и настраиваем роутер
(new \Evas\Router\Router)
->default('404.php') // обработчик по умолчанию
->autoByMethod('/auth', function () {
    // автороутинг методов аутентификации
    // /auth/login -> Controllers\AuthController->loginAction()
    // /auth/logout -> Controllers\AuthController->logoutAction()
    // /auth/registration -> Controllers\AuthController->registrationAction()
    // /auth/recovery -> Controllers\AuthController->recoveryAction()
    $this->classCustom(\Controllers\AuthController::class)
    ->methodPostfix('Action');
})
->autoByMethod('/api/v1', function () {
    // автороутинг api
    // /api/v1/user/list -> Controllers\Api\UserController->listAction()
    // /api/v1/user/get -> Controllers\Api\UserController->getAction()
    // /api/v1/user/save -> Controllers\Api\UserController->saveAction()
    // /api/v1/company/list -> Controllers\Api\CompanyController->listAction()
    $this->middleware([CheckAccess::isLogged()])
    ->classPrefix('Controllers\\Api\\')
    ->classPostfix('Controller')
    ->methodPostfix('Action')
    ->default('404json.php'); // обработчик по умолчанию для api
})
->autoByFile('/', function () {
    // автороутинг страниц сайта
    // / -> 'views/auto/index.php'
    // /about -> 'views/auto/about.php'
    $this->filePrefix('auto/')
    ->filePostfix('.php');
})
// вызываем роутинг по объекту запроса
->requestRouting(App::request());
```
