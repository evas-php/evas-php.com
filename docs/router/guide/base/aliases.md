# Алиасы

Алиасы (псевдонимы) позволяют описывать заготовленные части пути

## Установка псевдонима
```php
$router->alias(':int', '\d+');
```

## Установка нескольких псевдонимов

```php
$router->aliases([
    ':float' => ':int\.?\d*', // алиас внутри алиаса
    ':action' => '(add|save|delete)',
]);
```

Вы можете составлять алиасы из алиасов, как в примере с `:float` выше

## Предустановленные алиасы
```php
[
    ':any' => '.*',
    ':int' => '[0-9]{1,}',
    ':id' => '[1-9]+\d*',
];
```

## Использование в маршрутах
```php
$router
->aliases([
    ':id' => '(:id)', // переоределяем :id алиас
    ':action' => '(add|save|delete)',
])
->get('/users/:id/:action', function ($user_id, $action) {
    echo "$action user with id = $user_id";
})
->get('/company/:id/:action', function ($company_id, $action) {
    echo "$action company with id = $company_id";
});
```

## Наследование
::: tip Алиасы наследуются во вложенные роутеры
если они описаны выше вложенных роутеров
:::

```php
$router
->aliases([
    ':id' => '(:id)', // переоределяем :id алиас
    ':action' => '(add|save|delete)',
])
->map('/users/:id/:action', function () {
    // использование алиаса :id во вложенном роутере
    $this
    ->post('/posts/:id', function($user_id, $action, $post_id) {
        echo "user ($user_id) $action post ($post_id)";
    })
    ->post('/comments/:id', function($user_id, $action, $comment_id) {
        echo "user ($user_id) $action comment ($comment_id)";
    });
})
->get('/company/:id/:action', function ($company_id, $action) {
    echo "$action company with id = $company_id";
});
```