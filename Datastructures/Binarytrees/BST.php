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

    //left, root, right.
    public function depthFirstSearchInOrder(): array
    {
        return $this->depthFirstSearchInOrderTraverse($this->root);
    }

    //root, left, right
    public function depthFirstSearchPreOrder(): array
    {
        return $this->depthFirstSearchPreOrderTraverse($this->root);
    }

    //left, right, root
    public function depthFirstSearchPostOrder(): array
    {
        return $this->depthFirstSearchPostOrderTraverse($this->root);
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

    private function depthFirstSearchInOrderTraverse(Node $root): array
    {
        $values = [];

        if ($root->left) {
            $this->depthFirstSearchInOrderTraverse($root->left);
        }

        $values[] = $root->value;

        if ($root->right) {
            $this->depthFirstSearchInOrderTraverse($root->right);
        }

        $values;
    }

    private function depthFirstSearchPreOrderTraverse(Node $root): array
    {
        $values = [];

        $values[] = $root->value;

        if ($root->left) {
            $this->depthFirstSearchPreOrderTraverse($root->left);
        }

        if ($root->right) {
            $this->depthFirstSearchPreOrderTraverse($root->right);
        }

        $values;
    }

    private function depthFirstSearchPostOrderTraverse(Node $root): array
    {
        $values = [];

        if ($root->left) {
            $this->depthFirstSearchPostOrderTraverse($root->left);
        }

        if ($root->right) {
            $this->depthFirstSearchPostOrderTraverse($root->right);
        }

        $values[] = $root->value;

        $values;
    }
}