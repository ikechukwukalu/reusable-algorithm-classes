<?php

namespace Datastructures\Php\Binarytrees;

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

    public function size(): int
    {
        return $this->count;
    }

    //left, root, right.
    public function depthFirstSortInOrder(): array
    {
        $this->values = [];
        $this->depthFirstSortInOrderTraverse($this->root);

        return $this->values;
    }

    //root, left, right
    public function depthFirstSortPreOrder(): array
    {
        $this->values = [];
        $this->depthFirstSortPreOrderTraverse($this->root);

        return $this->values;
    }

    //left, right, root
    public function depthFirstSortPostOrder(): array
    {
        $this->values = [];
        $this->depthFirstSortPostOrderTraverse($this->root);

        return $this->values;
    }

    public function breadthFirstSort(): array
    {
        $this->values = [];
        $queue = [$this->root];

        while (!empty($queue)) {
            $currentNode = array_shift($queue);
            $this->values[] = $currentNode->value;

            if ($currentNode->left) {
                $queue[] = $currentNode->left;
            }

            if ($currentNode->right) {
                $queue[] = $currentNode->right;
            }
        }

        return $this->values;
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

    private function depthFirstSortInOrderTraverse(Node $root): void
    {
        if ($root->left) {
            $this->depthFirstSortInOrderTraverse($root->left);
        }

        $this->values[] = $root->value;

        if ($root->right) {
            $this->depthFirstSortInOrderTraverse($root->right);
        }
    }

    private function depthFirstSortPreOrderTraverse(Node $root): void
    {
        $this->values[] = $root->value;

        if ($root->left) {
            $this->depthFirstSortPreOrderTraverse($root->left);
        }

        if ($root->right) {
            $this->depthFirstSortPreOrderTraverse($root->right);
        }
    }

    private function depthFirstSortPostOrderTraverse(Node $root): void
    {
        if ($root->left) {
            $this->depthFirstSortPostOrderTraverse($root->left);
        }

        if ($root->right) {
            $this->depthFirstSortPostOrderTraverse($root->right);
        }

        $this->values[] = $root->value;
    }
}