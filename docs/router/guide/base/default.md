# Обработчик по умолчанию

## Метод default 

Устанавливает обработчик по умолчанию


::: tip $handler тут и далее - обработчик результата роутинга
- Анонимная функция
- Строка для имени файла
- Ассоциативный массив для метода класса
- Массив обработчиков, если их несколько

Виды и примеры обработчиков результата роутинга можно посмотреть [тут](/guide/router-resolver-types.html)
:::

Срабатывает, если результат роутинга не найден

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string\|\Closure\|array* | Обработчик/обработчики маршрута |

```PHP
// например, можно задать страницу 404
$router->default('404.php');
```

## Использование во вложенных роутерах
- Вы можете задать свои обработчики по умолчанию для вложенных роутеров
:::tip Если вложенный роутинг провалился 
будет вызван default, если его нет, то будет вызов default родителя и так далее, пока какой-нибудь default не сработает
:::

:::danger Если не установлен, при провале роутинга будет вылетать 
Evas\Router\Exceptions\RouterException: 404. Not Found
:::