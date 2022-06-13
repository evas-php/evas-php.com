<?php

// вывод ошибок
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 404 ответ с текстом ошибки.
function send404(string $message = '404. Not Found.') {
    header('HTTP/1.1 404 Not Found');
    die ($message);
}

// определяем субдомен
function getSubDomain() {
    $domain = $_SERVER['SERVER_NAME'];
    $parts = explode('.', $domain);
    $parts = array_reverse($parts);
    if ('com' === $parts[0]) array_shift($parts);
    array_shift($parts);
    return $parts[0] ?? null;
}
$docsName = getSubDomain() ?? '_global';

// проверяем наличие директории документации
$dir = dirname(__DIR__) . '/docs/' . $docsName . '/.vuepress/dist';
if (!is_dir($dir)) send404('Empty docs directory');

// получаем url
$url = $beforeUrl = $_SERVER['REQUEST_URI'];
$addingIndex = false;
if ('/' === substr($url, strlen($url) - 1)) {
    $url .= 'index.html';
    $addingIndex = true;
}

// проверка наличия файла
function hasFile(string $url = null) {
    global $dir;
    $filename = $dir . $url;
    return is_file($filename);
}

// проверяем наличие файла документации
if (!hasFile($url)) {
    if ($addingIndex) {
        $url = $beforeUrl . 'index.php';
        if (!hasFile($url)) send404();
    } else send404();
}
$filename = $dir . $url;

// вычисляем заголовок Content-Type для url
function getContentType(string $url) {
    $lastDotPos = strrpos($url, '.');
    $ext = false === $lastDotPos ? null : substr($url, $lastDotPos + 1);
    return [
        'js' => 'text/javascript',
        'css' => 'text/css',
        'jpg' => 'image/jpeg', 
        'jpeg' => 'image/jpeg', 
        'png' => 'image/png', 
        'svg' => 'image/svg+xml', 
    ][$ext] ?? 'text/html';
}
// устанавливаем заголовок Content-Type
header('HTTP/1.1 200 OK');
header('Content-Type: ' . getContentType($url));

// выводим файл документации
include $filename;
