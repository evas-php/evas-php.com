# Класс uri

## Параметры

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Uri scheme |

```php
private $scheme;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | Uri user info |

```php
private $userInfo;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Uri host |

```php
private $host;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *int|null* | Uri port |

```php
private $port;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | Uri path |

```php
private $path = '';
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | Uri query string |

```php
private $query;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | Uri fragment |

```php
private $fragment;
```

## Методы

### createFromUriParts

Создает URI из частей uri разобранных с помощью parse_uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | части uri |

```php
$http->createFromUriParts();
```

### isDefaultPort

Проверяет является ли порт URI портом по умолчанию

```php
$http->isDefaultPort();
```

### isNetwork

Проверяет на сетевой uri

```php
$http->isNetwork();
```

### isAbsolute

Проверяет на абсолютный uri

```php
$http->isAbsolute();
```

### isRelative

Проверяет на относительный uri

```php
$http->isRelative();
```

### getScheme

Получает схему uri

```php
$http->getScheme();
```

### getAuthority

Получает authority компонента uri

```php
$http->getAuthority();
```

### getUserInfo

Получает компонент пользовательской информации uri

```php
$http->getUserInfo();
```

### getHost

Получает хост uri

```php
$http->getHost();
```

### getPort

Получает порт uri

```php
$http->getPort();
```

### getPath

Получает путь uri

```php
$http->getPath();
```

### getQuery

Получает query строку uri

```php
$http->getQuery();
```

### getFragment

Получает fragment компонент uri

```php
$http->getFragment();
```

### withScheme

Устанавливает схему uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | схема uri |

```php
$http->withScheme('https://');
```

### withUserInfo

Устанавливает информацию пользователя uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя пользователя |
| 2 | *null|string* | пароль |

```php
$http->withUserInfo('test', 'test');
```

### withHost

Устанавливает хост uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | хост |

```php
$http->withHost('localhost');
```

### withPort

Устанавливает порт uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *null|int* | порт или null для сброса на порт по умолчанию |

```php
$http->withPort(800);
```

### withPath

Устанавливает путь uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | путь |

```php
$http->withPath('/');
```

### withQuery

Устанавливает query строку uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | query строка |

```php
$http->withQuery('/?key=value');
```

### withQueryParams

Устанавливает query строки uri из маппинга

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array|null* | маппинг свойств query |

```php
$http->withQueryParams(['/?key=value', '/login?key=value']);
```

### withFragment

Устанавливает фрагмент uri

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | фрагмент uri |

```php
$http->withFragment('#row=4');
```

### applyParts

Примененяет части uri разобранные с помощью parse_url

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *array* | части uri |

```php
$http->applyParts(['https://', 'localhost', 800, '/', '/?key=value', '#row=4']);
```

### removeDefaultPort

Сброс порта по умолчанию

```php
$http->removeDefaultPort();
```
