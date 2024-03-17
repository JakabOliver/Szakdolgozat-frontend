<?php

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

require_once 'vendor/autoload.php';
$path = substr($_SERVER['REQUEST_URI'], 1);
$loader = new FilesystemLoader('templates');
$twig = new Environment($loader);
if (empty($path)) {
    $path = 'index';
}
$template = $twig->load($path . '.twig');
echo $template->render(['additionalJS' => 'dist/bundle.js']);
