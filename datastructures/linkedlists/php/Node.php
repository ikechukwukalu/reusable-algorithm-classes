<?php

namespace Datastructures\Linkedlist;

class Node {

    public $value;
    public ?Node $previous;
    public ?Node $next;

    public function __construct($value, ?Node $next, ?Node $previous) {
        $this->$value = $value;
        $this->$previous = $previous;
        $this->$next = $next;
    }
}