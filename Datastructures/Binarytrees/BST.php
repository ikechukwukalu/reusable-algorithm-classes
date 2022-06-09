<?php

namespace Datastructures\Binarytrees;

class BST {

    private Node $root;
    private int $count = 1;
    private array $values = [];

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
        $this->values = [];
        $this->depthFirstSearchInOrderTraverse($this->root);

        return $this->values;
    }

    //root, left, right
    public function depthFirstSearchPreOrder(): array
    {
        $this->values = [];
        $this->depthFirstSearchPreOrderTraverse($this->root);

        return $this->values;
    }

    //left, right, root
    public function depthFirstSearchPostOrder(): array
    {
        $this->values = [];
        $this->depthFirstSearchPostOrderTraverse($this->root);

        return $this->values;
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

    private function depthFirstSearchInOrderTraverse(Node $root): void
    {
        if ($root->left) {
            $this->depthFirstSearchInOrderTraverse($root->left);
        }

        $this->values[] = $root->value;

        if ($root->right) {
            $this->depthFirstSearchInOrderTraverse($root->right);
        }
    }

    private function depthFirstSearchPreOrderTraverse(Node $root): void
    {
        $this->values[] = $root->value;

        if ($root->left) {
            $this->depthFirstSearchPreOrderTraverse($root->left);
        }

        if ($root->right) {
            $this->depthFirstSearchPreOrderTraverse($root->right);
        }
    }

    private function depthFirstSearchPostOrderTraverse(Node $root): void
    {
        if ($root->left) {
            $this->depthFirstSearchPostOrderTraverse($root->left);
        }

        if ($root->right) {
            $this->depthFirstSearchPostOrderTraverse($root->right);
        }

        $this->values[] = $root->value;
    }
}