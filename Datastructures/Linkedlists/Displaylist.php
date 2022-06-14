<?php

namespace Datastructures\Linkedlists;

class Displaylist extends Doublylinkedlist {

    public function __construct()
    {

    }

    public function displayListRightMovement(Doublylinkedlist $list): void
    {
        $list->itemIndex = $list->item = null;

        $i = 0;
        $count = $list->size();

        while ($i < $count) {
            echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . '<br/>';
            $list->navigateToNextItem();
            $i ++;
        }

        echo '<br/>';
    }

    public function displayListLeftMovement(Doublylinkedlist $list): void
    {
        $j = $list->size() - 1;

        while ($j >= 0) {
            echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . '<br/>';
            $list->navigateToPrevItem();
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