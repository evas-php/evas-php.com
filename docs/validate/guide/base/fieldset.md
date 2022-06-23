# Валидатор набора полей

Класс `Evas\Validate\Fieldset` позволяет создавать валидаторы набора полей.

## Конфигурация

### Конструктор

### setProps

### field

### fields

### defaultFieldClass


## Валидация

### isValid

### throwIfNotValid


## Получение ошибок валидации
errors()

## Получение отвалидированных значений
$values


## Наследование
Вы можете создать свой класс валидатора набора полей отнаследовавшись от `Evas\Validate\Fieldset`.

Пример:
```PHP
// LoginFieldset.php
class LoginFieldset extends \Evas\Validate\Fieldset
{
    /**
     * Предустановленные поля валидатора.
     * @return array|null
     */
    public function presetFields(): ?array
    {
        return [
            'login' => new \Evas\Validate\Fields\LoginField,
            'password' => new PasswordField,
        ];
    }
}
```

### presetFields
Задаёт предустановленные поля валидатора.

Исользуется в кастомных валидаторах набора полей.
```PHP
    /**
     * Предустановленные поля валидатора.
     * @return array|null
     */
    public function presetFields(): ?array
    {
        return [
            'login' => new \Evas\Validate\Fields\LoginField,
            'password' => new PasswordField,
        ];
    }
```

### presetProps
Задаёт предустановленные свойства валидатора.

Исользуется в кастомных валидаторах набора полей.
```PHP
    /**
     * Предустановленные свойства валидатора.
     * @return array|null
     */
    public function presetProps(): ?array
    {
        return [
            'name' => 'login_data',
            'fields' => [ 
                // так тоже можно задать предустановленные поля
                // вместо или вместе с presetFieldset
                'login' => new \Evas\Validate\Fields\LoginField,
                'password' => new PasswordField,
            ],
        ];
    }
```
