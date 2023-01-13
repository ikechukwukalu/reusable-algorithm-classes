<?php

namespace Datastructures\Php\Queues;

class Displayqueue {
    public function display($object): void
    {
        print_r($object);
    }

    public function description($text): void
    {
        echo "\n{$text}\n";
    }
}