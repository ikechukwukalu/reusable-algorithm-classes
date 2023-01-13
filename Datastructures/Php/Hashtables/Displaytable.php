<?php

namespace Datastructures\Php\Hashtables;

class Displaytable {
    public function display($object): void
    {
        print_r($object);
    }

    public function description($text): void
    {
        echo "\n{$text}\n";
    }
}