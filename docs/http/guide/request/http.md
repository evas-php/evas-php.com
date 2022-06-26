# Http запрос

## Параметры

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | метод |

```php
protected $method;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | uri |

```php
protected $uri;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | параметры POST |

```php
protected $post = [];
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | параметры GET |

```php
protected $query = [];
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | ip пользователя |

```php
protected $userIp;
```

## Методы

### getMethod

Получает метод

```php
$http->getMethod();
```

### isMethod

Проверяет на совпадение метода 

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | проверяемый метод |

```php
$http->isMethod('method');
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

Получает версию операционной системы и браузера из user agent

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | user agent |

```php
$http->parseUserAgent('Firefox on Mac');
```

### getBody

Получает тело

```php
$http->getBody();
```

### getParsedBody

Получает распарсенное тело

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | явный тип данных для преобразования |

```php
$http->getParsedBody('json');
```



### hasHeader

Проверяет наличие заголовка

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя заголовка |

```php
$http->hasHeader('Content-Type: application/json');
```

### getHeader

Получает заголовок

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя |

```php
$http->getHeader('Content-Type: application/json');
```

### getHeaders

Получает маппинг заголовков

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array|null* | имена |

```php
$http->getHeaders('Content-Type', 'Cookie');
```

### getHeaderLine

Получает строку заголовка

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя заголовка |

```php
$http->getHeaderLine('Cookie');
```

### getHeadersLines

Получает строки заголовков

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array|null* | имена |

```php
$http->getHeadersLines('Content-Type', 'Cookie');
```

### getHeadersNames

Получает имена заголовков 

```php
$http->getHeadersNames();
```
