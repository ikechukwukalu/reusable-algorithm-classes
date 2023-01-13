<?php

namespace Datastructures\Php\Linkedlists;

class Doublylinkedlist {

    private ?Node $head;
    private ?Node $tail;
    private int $count = 0;

    protected ?Node $item;
    protected ?int $itemIndex;

    public function __construct()
    {
        $this->head = $this->tail = $this->item = $this->itemIndex = null;
    }

    public function unshift($value): void
    {
        if (!$this->head) {
            $this->setFirstElement($value);
            return;
        }

        $oldHead = $this->head;
        $this->setHeadOnly($value);
        $this->head->next = $oldHead;
        $oldHead->previous = $this->head;
    }

    public function shift(): ?Node
    {
        if (!$this->head) {
            return null;
        }

        $oldHead = $this->head;
        $this->setHeadOnly($oldHead->next);

        return $oldHead;
    }

    public function push($value): void
    {
        if (!$this->tail) {
            $this->setFirstElement($value);
            return;
        }

        $oldTail = $this->tail;
        $this->setTailOnly($value);
        $this->tail->previous = $oldTail;
        $oldTail->next = $this->tail;
    }

    public function pop(): ?Node
    {
        if (!$this->tail) {
            return null;
        }

        $oldTail = $this->tail;
        $this->setTailOnly($oldTail->previous);

        return $oldTail;
    }

    public function insertAt($value, int $index): void
    {
        if (!$this->head) {
            $this->setFirstElement($value);
            return;
        }

        if ($index <= 0) {
            $this->unshift($value);
            return;
        }

        $tailIndex = ($this->count - 1);
        if ($tailIndex <= $index) {
            $this->push($value);
            return;
        }

        if ($this->shouldTraverseFromFront($index, $tailIndex)) {
            $this->traverseFromFront($index, $value);
            return;
        }

        $this->traverseFromBack($index, $value);
    }

    public function deleteAt(int $index): ?Node
    {
        if (!$this->head) {
            return null;
        }

        $tailIndex = ($this->count - 1);
        if ($index > $tailIndex) {
            return null;
        }

        if ($tailIndex === $index) {
            return $this->pop();
        }

        if ($index === 0) {
            return $this->shift();
        }

        if ($this->shouldTraverseFromFront($index, $tailIndex)) {
            return $this->traverseFromFront($index);
        }

        return $this->traverseFromBack($index);
    }

    public function search($value): ?Node
    {
        $currentNode = $this->head;
        $i = 0;

        while($i < $this->count) {
            if ($currentNode->value === $value) {
                return $currentNode;
            }

            $currentNode = $currentNode->next;
            $i ++;
        }

        return null;
    }

    public function size(): int
    {
        return $this->count;
    }

    public function getCurrentItem(): ?Node
    {
        if (is_null($this->itemIndex)) {
            $this->itemIndex = 0;
            $this->item = $this->head;
        }

        return $this->item;
    }

    public function getCurrentItemIndex(): ?int
    {
        if (is_null($this->itemIndex)) {
            return null;
        }

        return $this->itemIndex;
    }

    public function navigateToNextItem(): void
    {
        if (!$this->head) {
            return;
        }

        if (is_null($this->itemIndex)) {
            $this->itemIndex = -1;
        }

        if ($this->itemIndex === ($this->count - 1)) {
            return;
        }

        if (!$this->item) {
            $this->item = $this->head;
            $this->itemIndex ++;

            return;
        }

        $this->item = $this->item->next;
        $this->itemIndex ++;
    }

    public function navigateToPrevItem(): void
    {
        if (is_null($this->itemIndex) || $this->itemIndex === 0) {
            return;
        }

        $this->item = $this->item->previous;
        $this->itemIndex --;
    }

    private function setFirstElement($value): void
    {
        $this->head = $this->tail = new Node($value);
        $this->count ++;
    }

    private function setHeadOnly($value): void
    {
        if ($value instanceof Node) {
            $this->head = $value;
            $this->head->previous = null;
            $this->count --;

            return;
        }

        $this->head = new Node($value);
        $this->count ++;
    }

    private function setTailOnly($value): void
    {
        if ($value instanceof Node) {
            $this->tail = $value;
            $this->tail->next = null;
            $this->count --;

            return;
        }

        $this->tail = new Node($value);
        $this->count ++;
    }

    private function shouldTraverseFromFront($index, $tailIndex): bool
    {
        return $index < ($tailIndex - $index);
    }

    private function traverseFromFront(int $index, $value = null): ?Node
    {
        $currentNode = $this->head;
        $currentIndex = 0;

        while($currentIndex <= $index) {
            if ($currentIndex === $index) {
                if (!$value) {
                    return $this->traverseFromFrontDelete($currentNode);
                }

                $this->traverseFromFrontInsert($value, $currentNode);
                return null;
            }

            $currentNode = $currentNode->next;
            $currentIndex ++;
        }

        return null;
    }

    private function traverseFromFrontInsert($value, Node $nextNode): void
    {
        $newNode = new Node($value);
        $nextNode->previous->next = $newNode;
        $newNode->previous = $nextNode->previous;
        $newNode->next = $nextNode;
        $nextNode->previous = $newNode;

        $this->count ++;
    }

    private function traverseFromFrontDelete(Node $oldNode): ?Node
    {
        $oldNode->previous->next = $oldNode->next;
        $oldNode->next->previous = $oldNode->previous;
        $this->count --;

        return $oldNode;
    }

    private function traverseFromBack(int $index, $value = null):  ?Node
    {
        $currentNode = $this->tail;
        $currentIndex = $this->count - 1;

        while($currentIndex >= $index) {
            if ($currentIndex === $index) {
                if (!$value) {
                    return $this->traverseFromBackDelete($currentNode);
                }

                $this->traverseFromBackInsert($value, $currentNode);
                return null;
            }

            $currentNode = $currentNode->previous;
            $currentIndex --;
        }

        return null;
    }

    private function traverseFromBackInsert($value, Node $prevNode): void
    {
        $newNode = new Node($value);
        $prevNode->next->previous = $newNode;
        $newNode->previous = $prevNode;
        $newNode->next = $prevNode->next;
        $prevNode->next = $newNode;

        $this->count ++;
    }

    private function traverseFromBackDelete(Node $oldNode): ?Node
    {
        return $this->traverseFromFrontDelete($oldNode);
    }
}