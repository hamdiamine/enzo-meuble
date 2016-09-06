<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;

require_once('../app/api/images.php');
require_once('../app/api/texts.php');
require_once('../app/api/compte.php');

$app->run();
