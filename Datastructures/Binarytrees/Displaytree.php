<?php

namespace Datastructures\Binarytrees;

class Displaytree extends BST {

    public function __construct()
    {

    }

    public function displayListRightMovement(BST $tree): void
    {
        $tree->itemIndex = $tree->item = null;

        $i = 0;
        $count = $tree->size();

        while ($i < $count) {
            echo 'VALUE: ' . $tree->getCurrentItem()->value . ', INDEX: ' . $tree->getCurrentItemIndex() . '<br/>';
            $tree->nextItem();
            $i ++;
        }

        echo '<br/>';
    }

    public function displayListLeftMovement(BST $tree): void
    {
        $j = $tree->size() - 1;

        while ($j >= 0) {
            echo 'VALUE: ' . $tree->getCurrentItem()->value . ', INDEX: ' . $tree->getCurrentItemIndex() . '<br/>';
            $tree->prevItem();
            $j --;
        }

        echo '<br/>';
    }

    public function displayUsingPreTag($object): void
    {
        echo '<pre>';
        print_r($object);
        echo '</pre>';
    }

    public function description($text): void
    {
        echo "<h3>{$text}</h3><br/>";
    }
}