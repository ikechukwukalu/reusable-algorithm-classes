<?php

namespace Datastructures\Php\Linkedlists;

class Displaylist extends Doublylinkedlist {

    public function __construct()
    {

    }

    public function displayListFromHead(Doublylinkedlist $list): void
    {
        $list->itemIndex = $list->item = null;

        $i = 0;
        $count = $list->size();

        while ($i < $count) {
            echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . "\n";
            $list->navigateToNextItem();
            $i ++;
        }

        echo "\n";
    }

    public function displayListFromTail(Doublylinkedlist $list): void
    {
        $j = $list->size() - 1;

        while ($j >= 0) {
            echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . "\n";
            $list->navigateToPrevItem();
            $j --;
        }

        echo "\n";
    }

    public function display($object): void
    {
        print_r($object);
    }

    public function description($text): void
    {
        echo "\n{$text}\n";
    }
}