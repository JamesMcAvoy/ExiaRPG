#!/usr/bin/env php
<?php

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use ExiaRPG\Main;

require __DIR__ .'/../vendor/autoload.php';

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Main()
            )
        ),
    8888
);

$server->run();
