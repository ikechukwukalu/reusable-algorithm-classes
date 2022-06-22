<?php

namespace Datastructures\Php\Linkedlists;

class Node {

    public $value;
    public ?Node $previous = null;
    public ?Node $next = null;

    public function __construct($value)
    {
        $this->value = $value;
    }
}