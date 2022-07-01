# Готовые валидаторы полей

## AmountField
`Evas\Validate\Fields\AmountField`.

Валидация пропускает денежную сумму вида: `1.00`, `1999.99`, `0.00`

```PHP
/**
 * Валидатор поля денежная сумма.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class AmountField extends Field
{
    public $type = ['string', 'float'];
    public $pattern = '/^\d+\.\d{2}$/';
}
```

## DateField
`Evas\Validate\Fields\DataField`.

Валидация пропускает дату вида: `2022-02-02`

```php
/**
 * Валидатор поля дата.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class DateField extends Field
{
    public $pattern = '/^\d{4}-\d{2}-\d{2}$/';
}
```

## EmailField
`Evas\Validate\Fields\EmailField`.

Валидация пропускает email вида: `test@test.com`

```php
/**
 * Валидатор поля email.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class EmailField extends Field
{
    public $label = 'Email';
    public $min = 8;
    public $max = 60;
    public $pattern = '/^.{2,}@.{2,}\..{2,}$/';
}
```

## FloatField
`Evas\Validate\Fields\FloatField`.

Валидация пропускает число float вида: `22.22`, `22.`

```php
/**
 * Валидатор поля число float.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class FloatField extends Field
{
    public $type = ['string', 'float'];
    public $pattern = '/^\d+\.?\d*$/';
}
```

## FullNameField
`Evas\Validate\Fields\FullNameField`.

Валидация пропускает полное имя вида: `Иван`, `Иван Иванов`

```php
/**
 * Валидатор полного имени.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class FullNameField extends Field
{
    public $min = 2;
    public $max = 60;
    public $pattern = '/^([a-zA-Zа-яёЁА-Я]{2,} ?)+$/u';
}
```

## IdField
`Evas\Validate\Fields\IdField`.

Валидация пропускает id вида:

```php
/**
 * Валидатор поля id.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class IdField extends Field
{
    public $pattern = '/^[1-9]+\d*$/';
}
```

## IntField
`Evas\Validate\Fields\IntField`.

Валидация пропускает число int вида: `22`

```php
/**
 * Валидатор поля число int.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class IntField extends Field
{
    public $pattern = '/^\d+$/';
}
```

## JsonEnumField
`Evas\Validate\Fields\JsonEnumField`.

Валидация переводит перечисления в json вида: `1, 2, 3`

```php
/**
 * Валидатор перечисления значений в json.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class JsonEnumField extends Field
{
    public $pattern = '/^\[(\d+,)*(\d+)\]$/';

    /**
     * Хук после валидации поля.
     */
    protected function afterValidate()
    {
        $this->value = json_decode($this->value, true);
    }
}
```

## LoginField
`Evas\Validate\Fields\LoginField`.

Валидация пропускает логин вида: `test`

```php
/**
 * Валидатор логина.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class LoginField extends Field
{
    public $min = 4;
    public $max = 20;
    public $pattern = '/^[a-zA-Z0-9_.-]+$/';
}
```

## NameField
`Evas\Validate\Fields\NameField`.

Валидация пропускает имя вида: `Иван`

```php
/**
 * Валидатор имени.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class NameField extends Field
{
    public $min = 2;
    public $max = 30;
    public $pattern = '/^[a-zA-Zа-яёЁА-Я]+$/u';
}
```

## NumberField
`Evas\Validate\Fields\NumberField`.

Валидация пропускает число вида: `22.22`, `22.`

```php
/**
 * Валидатор поля число.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class NumberField extends Field
{
    public $type = ['string', 'numeric'];
    public $pattern = '/^\d+\.?\d*$/';
}
```

## PhoneField
`Evas\Validate\Fields\PhoneField`.

Валидация пропускает номер телефона вида: `01234567890`

```php
/**
 * Валидатор телефона.
 * @package evas-php/evas-validate
 * @author Egor Vasyakin <egor@evas-php.com>
 */
namespace Evas\Validate\Fields;

use Evas\Validate\Field;

class PhoneField extends Field
{
    public $min = 10;
    public $max = 16;
    public $pattern = '/(\d*)(\d{10})$/';

    /**
     * Подготовка значения к валидации.
     * @param mixed|null значение
     * @return mixed|null подготовленное значение
     */
    protected function prepareValue($value)
    {
        $pattern = '/\d/';
        preg_match_all($pattern, $value, $matches);
        return implode('', $matches[0]);
    }
}
```
