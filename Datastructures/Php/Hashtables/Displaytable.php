<?php

namespace Datastructures\Php\Hashtables;

class Displaytable extends Hashtable {

    public function __construct()
    {

    }

    public function displayUsingPreTag($object): void
    {
        echo '<pre>';
        print_r($object);
        echo '</pre>';
    }

    public function description($text): void
    {
        echo "<h3>{$text}</h3><br/>";
    }
}