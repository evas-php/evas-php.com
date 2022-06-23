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

## EmailField

## FloatField

## FullNameField

## IdField

## IntField

## JsonEnumField

## LoginField

## NameField

## NumberField

## PhoneField
