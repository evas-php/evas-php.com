# Where

## whereRaw
Добавляет where-условие sql-строкой через AND
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | sql-строка |
| 2 | *array\|null* | значения для экранирования |
```PHP
$builder->whereRaw('`age` > ?', [20]);
```

## orWhereRaw
Добавляет where-условие sql-строкой через OR
| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1 | *string* | sql-строка |
| 2 | *array\|null* | значения для экранирования |
```PHP
$builder->orWhereRaw('`gender` = ?', [2]);
```


## where

## orWhere


## whereColumn

## orWhereColumn


## whereNull

## orWhereNull

## whereNotNull

## orWhereNotNull


## whereIn

## orWhereIn

## whereNotIn

## orWhereNotIn
