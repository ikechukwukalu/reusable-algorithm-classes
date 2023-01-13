<?php

namespace Datastructures\Php\Binarytrees;

class Displaytree {
    public function display($object): void
    {
        print_r($object);
    }

    public function description($text): void
    {
        echo "\n{$text}\n";
    }
}