<?php

namespace ExiaRPG\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use ExiaRPG\Exception\ExceptionInterface;
use ExiaRPG\Config;
use ExiaRPG\Main;

class RunServerCommand extends Command {

    protected function configure() {
        $this
            ->setName('run')
            ->setDescription('Run the server')
            ->setHelp('This command allows you to run the WebSocket server')
        ;
    }

    public function execute(InputInterface $input, OutputInterface $output) {
        Config::boot();

        try {
            $server = IoServer::factory(
                new HttpServer(
                    new WsServer(
                        new Main($output)
                    )
                ),
                EXIA_PORT_LISTEN,
                EXIA_ADDR_LISTEN
            );
            $output->writeln('<info>Server running on '.EXIA_ADDR_LISTEN.':'.EXIA_PORT_LISTEN.'</info>');
            $server->run();
        } catch(ExceptionInterface $e) {
            $output->writeln([
                '',
                'Error : <error>'.$e->getMessage().'</error>',
                ''
            ]);
        }
    }
}
