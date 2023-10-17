# Установка

Install via [Composer](https://getcomposer.org/)
```
composer install evas-php/evas-router
```

# Использование

## Подготовка

Создадим простую структуру приложения:

```
test/
	composer.json
	app/
		core/
			Model.php
			Controller.php
		controllers/
			UserController.php
		models/
			USer.php
	config/
		db.php
		di.php
		router.php
	public/
		index.php
	vendor/
	views/
		404.php
```

В данном примере мы реализуем MVC паттерн.

Наш проект будет разделен на 3 части: приложение (app/), файлы конфигурации (config/) и отображения (views/).

### Приложение

В приложении находятся модели и контроллеры (/models, /controllers), которые наследуются от стандартных классов Model.php и Controller.php в соседней папке (core/).

'Model.php'

```php
namespace core;

use Evas\Orm\ActiveRecord;

class Model extends ActiveRecord
{}
```

'Controller.php'

```php
namespace core;

use core\Model;
use Evas\Router\Controller as RouterController;

class Controller extends RouterController
{	
	public function pre($data) {
		echo '<pre>';
		print_r($data);
		echo '</pre>';
	}
}
```

Далее, мы реализуем свой контроллер (UserController.php) и модель (User.php) *User*. С их помощью мы сымитируем обращение от пользователя к базе данных.

'User.php'

```php
namespace models;

use core\Model;

class User extends Model
{}
```

'UserController.php'

```php
namespace controllers;

use core\Controller;
use models\User;

class UserController extends Controller
{
	public $name;

	public function _before()
	{
		$this->name = $this->request->getQuery('name');
	}

	public function show()
	{
		$this->pre(User::where('name', "$this->name")->get());
	}

	public function add()
	{
		(new User(['name'=>"$this->name"]))->save();
	}

	public function delete()
	{
		User::where('name', "$this->name")->delete();
	}
}
```

### Конфигурация

Теперь нам нужно настроить наше приложение, чтобы мы могли подключить и вызвать нужные нам функции. Создадим файл конфигурации для подключения к базе данных (db.php) и файл, в котором настроим сам роутер (router.php) и зададим ему страницу по умолчанию и автоматический маршрут по методу из контроллера.

'router.php'

```php
use Evas\Router\Router;

return (new Router)
	->default('404.php') // обработчик по умолчанию для api
	->autoByMethod('/user', function () {
		$this->classCustom(\controllers\UserController::class);
	}
);
```

'db.php'

```php
return [
    'username' => 'root', // пользователь субд
    'password' => '1234', // пароль субд
    'dbname' => 'test_1', // имя базы данных
];
```

Теперь добавим конфиг (di.php) для подключения двух предыдущих файлов в приложение, через механизм инъекций.

'di.php'

```php
use Evas\Di;
use Evas\Db\Database;

return [
    'db' => Di\createOnce(Database::class, 
        [Di\includeFileOnce('config/db.php')]
    ),
    'router' => Di\includeFileOnce('config/router.php'),
];

```

### Отображение

Создадим вид-заглушку, для всех путей, которые не будут никуда вести. Пользователь, который введет некорректные данные в поле адреса будет отправлен на страницу '404.php'.

'404.php'

```php
404 NOT FOUND
```

## Запуск

Точкой входа, откуда будет запускаться наш проект, будет index.php в папке public/.
В нем нам необходимо включить установленные модули в проект и запустить приложение.

'index.php'

```php
use Evas\Base\Loader;
use Evas\Web\WebApp as App;

include_once __DIR__ .'/../vendor/evas-php/evas-base/src/Loader.php';
(new Loader)->useEvas()->dir('app/')->run();

App::di()->loadDefinitions('config/di.php');

App::router()->requestRouting(App::request());
```

## Результат

Теперь, если мы напишем в адресной строке нашего проекта:

```
test/user/add?name=bob
```

...то у нас появится новая запись в нашей базе данных, по имени 'bob', а на экране выведется запись об этом пользователе из этой базы.

Аналогичным образом мы можем вызвать и другие методы описанные выше:

-- show
-- delete
