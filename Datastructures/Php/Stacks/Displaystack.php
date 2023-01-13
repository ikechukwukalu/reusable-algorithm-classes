<?php

namespace Datastructures\Php\Stacks;

class Displaystack {
    public function display($object): void
    {
        print_r($object);
    }

    public function description($text): void
    {
        echo "\n{$text}\n";
    }
}