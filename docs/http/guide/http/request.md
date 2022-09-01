# Http-запрос

Класс `Evas\Http\HttpRequest` является объектом http-запроса.

Имплементирует интерфейс [`Evas\Http\Interfaces\HttpRequestInterface`](/guide/interfaces/request.html)

## createFromGlobals

Статический метод, создает и возвращает новый объект http-запроса из глобальных свойств.

Если 1 аргументом передан уже существующий http-запрос, то переконфигурирует его глобальными свойствами и возвращает в результате.

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *[HttpRequest](/guide/http/request.html)\|null* | уже существующий объект http-запроса, если его нужно переконфигурировать |

```php
$request = Evas\Http\HttpRequest::createFromGlobals();
```

:::details У объекта http-запроса будут установлены свойства
```php
->withMethod($_SERVER['REQUEST_METHOD'])
->withUri($_SERVER['REQUEST_URI'])
->withHeaders(static::getAllHeaders())
->withUserIp($_SERVER['REMOTE_ADDR'])
->withPost($_POST)
->withQuery($_GET)
->withCookies($_COOKIE)
->withUploadedFiles($_FILES)
->withBody(file_get_contents('php://input'));
```
:::

## Методы конфигурации

:::tip Методы конфигурации
Позволяют описать кастомный объект http-запроса или изменить свойства в http-запросе, созданном с помощью [createFromGlobals](#createfromglobals).
:::

Например, с помощью такого кода можно создать новый http-запрос и сконфигурировать его так же как это сделал бы [createFromGlobals](#createfromglobals):

```php
$request = (new \Evas\Http\HttpRequest)
->withMethod($_SERVER['REQUEST_METHOD'])
->withUri($_SERVER['REQUEST_URI'])
->withHeaders(\Evas\Http\HttpRequest::getAllHeaders())
->withUserIp($_SERVER['REMOTE_ADDR'])
->withPost($_POST)
->withQuery($_GET)
->withCookies($_COOKIE)
->withUploadedFiles($_FILES)
->withBody(file_get_contents('php://input'));
```

### withMethod
Устанавливает метод http-запроса.

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | метод запроса |

```php
$request->withMethod('GET');
```

### withUri
Устанавливает uri http-запроса.

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *[UriInteface](/guide/interfaces/uri.html)\|string\|null* | uri запроса |

```php
$request->withUri('http://example.com/api/v1/user/list');
```


### withUserIp
Устанавливает ip пользователя http-запроса.

### withPost
Устанавливает POST параметры http-запроса.

### withQuery
Устанавливает GET параметры http-запроса.


### withHeaders
Устанавливает заголовки http-запроса.

### withHeader
Устанавливает заголовок http-запроса.

### withAddedHeader
Устанавливает заголовок http-запроса конкатенируя его с уже установленным значением.

### withCookies
Устанавливает cookie-свойства http-запроса.

### withCookie
Устанавливает cookie-свойство http-запроса.

### withUploadedFiles
Устанавливает массив загруженных файлов http-запроса.

### withBody
Устанавливает тело http-запроса.

### withAddedBody
Устанавливает тело http-запроса конкатенируя его с уже установленным значением.

### withBodyJson
Устанавливает тело http-запроса с преобразованием в json.



## Чтение данных


## Чтение заголовков


## Чтение cookies


## Получение загруженных файлов
