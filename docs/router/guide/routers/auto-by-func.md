# Автороутер по кастомной функции

Создаётся через метод [autoByFunc()](/guide/base/groups.html#autobyfunc) в родительском роутере.

:::tip Как это работает
Часть пути после базового пути автороутера `$path` передаётся в кастомную функцию генерации обработчика маршрута, в которой вы можете описать свой кастомный атвороутер
:::

Пример:
```PHP
$router->autoByFunc('/', function () {
    $this->routingFunc(function (string $path) {
        $filePrefix = 'auto/';
        if (empty($path)) {
            $path = '/index';
        }
        else if (mb_strlen($path) - 1 === strrpos($path, '/')) {
            $path .= 'index';
        }
        if (strpos($path, '/') === 0 && mb_strlen($filePrefix) - 1 === strrpos($filePrefix, '/')) {
            $path = substr($path, 1);
        }
        $path = $filePrefix . $path . '.php';
        return $path; // return string для обработчика в виде файла
    });
})
```

Контекст `$this` внутри функции будет содержать новый экземпляр класса `Evas\Router\Routers\AutoRouterByFunc`

Доступны все базовые настройки, помимо этого есть дополнительные методы:

## routingFunc

Устанавливает кастомную функцию генерации обработчика маршрута

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *callable* | кастомная функция генерации обработчика маршрута |

Возвращает:
- callable - для обработчика в виде функции
- string - для обработчика в виде файла
- assoc array - для обработчика в виде метода класса
- numeric array - для массива обработчиков

```PHP
$router->routingFunc(function (strin $path) {
    // аргумент функции $path содержит остаток пути, 
    // по которому описывается вычисление обработчика

    // return callable для обработчика в виде функции
    // return string для обработчика в виде файла
    // return assoc array для обработчика в виде метода класса
    // return numeric array для массива обработчиков
});
```
