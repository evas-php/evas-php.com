# Having Between

## havingBetween
Добавляет having-условие between через AND
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | минимальное и максимальное значения |
```PHP
$builder->havingBetween('views_num', [500, 1000]);
```

## orHavingBetween
Добавляет having-условие between через OR
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | минимальное и максимальное значения |
```PHP
$builder->orHavingBetween('orders_num', [100, 200]);
```

## havingNotBetween
Добавляет having-условие NOT between через AND
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | минимальное и максимальное значения |
```PHP
$builder->havingNotBetween('views_num', [500, 1000]);
```

## orHavingNotBetween
Добавляет having-условие NOT between через OR
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | минимальное и максимальное значения |
```PHP
$builder->orHavingNotBetween('orders_num', [100, 200]);
```

## havingBetweenColumns
Добавляет having-условие between с подстановкой минимального и максимального значения из столбцов через AND
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | столбцы из которых взять минимальное и максимальное значения |
```PHP
$builder->havingBetweenColumns('orders_num', ['reviews_num', 'views_num']);
```

## orHavingBetweenColumns
Добавляет having-условие between с подстановкой минимального и максимального значения из столбцов через OR
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | столбцы из которых взять минимальное и максимальное значения |
```PHP
$builder->orHavingBetweenColumns('orders_num', ['reviews_num', 'views_num']);
```

## havingNotBetweenColumns
Добавляет having-условие NOT between с подстановкой минимального и максимального значения из столбцов через AND
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | столбцы из которых взять минимальное и максимальное значения |
```PHP
$builder->havingNotBetweenColumns('orders_num', ['reviews_num', 'views_num']);
```

## orHavingNotBetweenColumns
Добавляет having-условие NOT between с подстановкой минимального и максимального значения из столбцов через OR
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | столбец |
| 2 | *array* | столбцы из которых взять минимальное и максимальное значения |
```PHP
$builder->orHavingNotBetweenColumns('orders_num', ['reviews_num', 'views_num']);
```
