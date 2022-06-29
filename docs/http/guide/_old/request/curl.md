# Curl запрос

## Параметры

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | resource |

```php
protected $ch;
```

## Методы

### getCh

Получает ресурс curl-запроса

```php
$http->getCh();
```

### reset

Очищает curl handler

```php
$http->reset();
```

### withUserAgent

Устанавливает user agent

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | user agent |

```php
$http->withUserAgent('Firefox on Mac');
```

### withTimeout

Устанавливает время ожидания ответа

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *int* | время в секундах |

```php
$http->withTimeout(10);
```

### withProxy

Устанавливает прокси

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | данные прокси |

```php
$http->withProxy(['201.55.32.229', '3128', 'HTTPS']);
```

### prepareSend

Подготавливает curl запрос к отправке

```php
$http->prepareSend();
```

### send

Отправляет curl запрос

```php
$http->send();
```


### getMethod

Получает метод

```php
$http->getMethod();
```

### isMethod

Проверяет на совпадение метода

```php
$http->isMethod();
```

### getUri

Получает uri

```php
$http->getUri();
```

### getRequestTarget

Получает цель запроса

```php
$http->getRequestTarget();
```

### getPath

Получает путь из uri

```php
$http->getPath();
```

### getPost

Получает параметр/параметры POST

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|array|null* | имя или массив имен |

```php
$http->getPost('/test');
```

### getPostList

Получает параметры POST списком

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | имена |

```php
$http->getPostList(['/test', '/']);
```

### getQuery

Получает параметр/параметры GET

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|array|null* | имя или массив имен |

```php
$http->getQuery('/test');
```

### getQueryList

Получает параметры GET списком

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | имена |

```php
$http->getQueryList(['/test', '/']);
```

### getParams

Получает параметр/параметры по методу запроса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|array|null* | имя или массив имен |

```php
$http->getParams('/test');
```

### getParamsList

Получает параметры списком по методу запроса

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | имена |

```php
$http->getParamsList(['/test', '/']);
```

### getUserIp

Получает ip пользователя

```php
$http->getUserIp();
```

### getAllHeaders

### parseUserAgent

### getBody

### getParsedBody



### hasHeader

### getHeader

### getHeaders

### getHeaderLine

### getHeadersLines

### getHeadersNames

