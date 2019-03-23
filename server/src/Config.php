<?php

namespace ExiaRPG;

use Symfony\Component\Console\Output\OutputInterface;
use ExiaRPG\Exception\ConfigurationException;

final class Config {

    private static $file = __DIR__ . '/../config.ini';

    public static function boot() {
        self::confInit();
    }

    private static function confInit() {
        if(!file_exists(self::$file)) {
            throw new ConfigurationException('Configuration file not found.');
        }
        $config = parse_ini_file(self::$file);
        if(empty($config)) {
            throw new ConfigurationException('Configuration file empty.');
        }
        array_walk(
            $config,
            function($value, $key) {
                define(strtoupper('exia_'.$key), $value);
            }
        );
    }
}
