<?php

namespace Datastructures\Php\Queues;

class Queue {

    private object $storage;
    private int $count = -1;
    private int $index = 0;

    public function __construct() {
        $this->storage = new \stdClass();
    }

    public function push($value): void
    {
        $this->count ++;

        $this->storage->{$this->count} = $value;
    }

    public function shift()
    {
        if ($this->isEmpty()) {
            return null;
        }

        $item = $this->storage->{$this->index};

        $this->storage->{$this->index} = null;
        unset($this->storage->{$this->index});

        $this->count --;
        $this->index ++;

        return $item;
    }

    public function peek()
    {
        if ($this->isEmpty()) {
            return null;
        }

        return $this->storage->{$this->index};
    }

    public function size()
    {
        return $this->count + 1;
    }

    public function viewQueue()
    {
        return $this->storage;
    }

    private function isEmpty(): bool
    {
        return isset($this->storage->{$this->index}) === false;
    }
}