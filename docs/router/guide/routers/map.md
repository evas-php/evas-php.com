# Маппинг роутер

Создаётся через метод [map()](/guide/base/groups.html#map) в родительском роутере.

Пример:
- ALL /account/ - вызовет AccountController->profile()
- GET /account/edit - вызовет AccountController->edit()
- POST /account/save - вызовет AccountController->save()
```PHP
$router->map('/account/', function () {
    // настройка вложенного маппинг роутера через контекст $this
    $this->all('', [AccountController::class => 'profile'])
    ->get('edit', [AccountController::class => 'edit'])
    ->post('save', [AccountController::class => 'save']);
});
```

Контекст `$this` будет содержать новый экземпляр класса `Evas\Router\Routers\MapRouter`.

Доступны все базовые настройки, дополнительных методов нет.
