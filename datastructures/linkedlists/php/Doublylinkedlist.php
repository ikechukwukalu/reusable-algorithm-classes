<?php

namespace Datastructures\Linkedlist;

class Doublylinkedlist {

    public ?Node $head;
    public ?Node $tail;

    public function __construct() {
        $this->head = $this->tail = null;
    }

    public function insertTop($value): void
    {
        if (!$this->head) {
            $this->setHead($value);
            return;
        }

        $oldHead = $this->head;
        $this->setHead($value);
        $this->head->next = $oldHead;
        $oldHead->previous = $this->head;
    }

    public function insertBottom($value): void
    {
        if (!$this->head) {
            $this->setTail($value);
            return;
        }

        $oldTail = $this->tail;
        $this->setTail($value);
        $this->tail->previous = $oldTail;
        $oldTail->next = $this->tail;
    }

    private function setHead($value) {
        $this->head = new Node($value);
    }

    private function setTail($value) {
        $this->tail = new Node($value);
    }
}