<?php

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

require_once 'vendor/autoload.php';
$path = substr($_SERVER['REQUEST_URI'], 1);
$loader = new FilesystemLoader('templates');
$twig = new Environment($loader);
$template = $twig->load($path);
echo $template->render(['additionalJS' => 'assets/js/tracker.js', 'go' => 'here']);
