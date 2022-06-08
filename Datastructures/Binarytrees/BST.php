<?php

namespace Datastructures\Binarytrees;

class BST {

    private Node $root;
    private int $count = 1;

    public function __construct($value)
    {
        $this->root = new Node($value);
    }

    public function insert($value): void
    {
        $this->traverse($this->root, $value);
    }

    public function min(): Node
    {
        return $this->treeObservations('left');
    }

    public function max(): Node
    {
        return $this->treeObservations('right');
    }

    public function search($value): ?Node
    {

    }

    public function size(): int
    {
        return $this->count;
    }

    public function depthFirstSearchInOrder($value): ?Node
    {

    }

    public function depthFirstSearchPreOrder($value): ?Node
    {

    }

    public function depthFirstSearchPostOrder($value): ?Node
    {

    }

    public function breadthFirstSearch($value): ?Node
    {

    }

    private function traverse(Node $root, $value): void
    {
        if ($value === $root->value) {
            return;
        }

        if ($value < $root->value) {
            if (!$root->left) {
                $root->left = new Node($value);
                $this->count ++;
                return;
            }

            $this->traverse($root->left, $value);
            return;
        }

        if (!$root->right) {
            $root->right = new Node($value);
            $this->count ++;
            return;
        }

        $this->traverse($root->right, $value);
        return;
    }

    private function treeObservations($leg): Node
    {
        $currentNode = $this->root;

        while ($currentNode->{$leg}) {
            $currentNode = $currentNode->{$leg};
        }

        return $currentNode;
    }
}