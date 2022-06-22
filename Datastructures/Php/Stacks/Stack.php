<?php

namespace Datastructures\Php\Stacks;

class Stack {

    private object $storage;
    private int $count = -1;

    public function __construct() {
        $this->storage = new \stdClass();
    }

    public function push($value): void
    {
        $this->count ++;

        $this->storage->{$this->count} = $value;
    }

    public function pop()
    {
        $item = $this->storage->{$this->count};

        $this->storage->{$this->count} = null;
        unset($this->storage->{$this->count});

        $this->count --;

        return $item;
    }

    public function peek()
    {
        if ($this->count === -1) {
            return null;
        }

        return $this->storage->{$this->count};
    }

    public function size()
    {
        return $this->count + 1;
    }

    public function viewStack()
    {
        return $this->storage;
    }
}