# Cookie

## Параметры

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя свойства |

```php
public $name;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|int* | значение свойства |

```php
public $value;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *int* | метка времени истечения свойства |

```php
public $expires;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *int* | время истечения свойства |

```php
public $maxAge;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | путь действия |

```php
public $path;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string|null* | домен действия |

```php
public $host;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *bool* | поддержка только защищенного соединения |

```php
public $secure;
```

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *bool* | поддержка только http протокола |

```php
public $httpOnly;
```

## Методы

### getCookies

Получает все свойства cookie

```php
$http->getCookies();
```

### getCookie

Получает свойства cookie

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя свойства cookie |

```php
$http->getCookie('name');
```

### hasCookie

Проверяет наличие свойства cookie

| Аргумент | Тип | Описание |
|-----------|-----|----------|
| 1 | *string* | имя свойства cookie |

```php
$htpp->hasCookie('name');
```