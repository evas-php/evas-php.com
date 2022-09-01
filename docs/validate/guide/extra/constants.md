# Константы

## EVAS\_VALIDATE\_ERRORS\_FILE

Устанавливает путь к файлу шаблонов ошибок по кодам

```php
if (!defined('EVAS_VALIDATE_ERRORS_FILE')) {
    define('EVAS_VALIDATE_ERRORS_FILE', __DIR__.'/../config/errors_default.php');
}
```

## EVAS\_ALLOWABLE\_HTML\_TAGS\_DEFAULT

Устанавливает правило поддерживаемых html-тегов по умолчанию

```php
if (!defined('EVAS_ALLOWABLE_HTML_TAGS_DEFAULT')) 
    define('EVAS_ALLOWABLE_HTML_TAGS_DEFAULT', '');
```

## EVAS\_HTMLENTITIES\_DEFAULT

Устанавливает общее правило замены html-тегов на html-сущности по умолчанию

```php
if (!defined('EVAS_HTMLENTITIES_DEFAULT')) 
    define('EVAS_HTMLENTITIES_DEFAULT', false);
```
