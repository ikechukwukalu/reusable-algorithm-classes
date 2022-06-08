<?php

use Datastructures\Linkedlists\Doublylinkedlist;

require ('../Datastructures/Linkedlists/Doublylinkedlist.php');
require ('../Datastructures/Linkedlists/Node.php');

$list = new Doublylinkedlist();

$list->shift(5);
$list->shift(4);
$list->shift(3);
$list->shift(2);
$list->shift(1);
$list->shift(0.2);
$list->shift(0.1);

$list->push(6);
$list->push(7);
$list->push(8);
$list->push(9);
$list->push(10);
$list->push(10.1);
$list->push(10.2);

echo '<pre>';
print_r($list);
echo '</pre>';

$list->unshift();
$list->unshift();

echo '<pre>';
print_r($list);
echo '</pre>';

$list->pop();
$list->pop();

echo '<pre>';
print_r($list);
echo '</pre>';

$list->insertAt(0, 0);
$list->insertAt(11, 10);
$list->insertAt(0.5, 1);
$list->insertAt(1.5, 3);
$list->insertAt(2.5, 5);
$list->insertAt(8.5, 11);
$list->insertAt(9.5, 13);
$list->insertAt(10.5, 15);

echo '<pre>';
print_r($list);
echo '</pre>';

echo '<pre>';
print_r($list->search(0.5));
echo '</pre>';

$i = 0;
$count = $list->size() + 5;

while ($i < $count) {
    echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . '<br/>';
    $list->nextItem();
    $i ++;
}

echo '<br/>';

$j = $list->size() - 1;

while ($j >= -5) {
    echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . '<br/>';
    $list->prevItem();
    $j --;
}

echo '<br/>';
echo '<br/>';
echo '<br/>';

$list->deleteAt(0); // 0
$list->deleteAt(0); // 0.5
$list->deleteAt(1); // 1.5
$list->deleteAt(2); // 2.5
$list->deleteAt(8); // 8.5
$list->deleteAt(9); // 9.5
$list->deleteAt(11); // 10.5
$list->deleteAt(10); // 11

$i = 0;
$count = $list->size() + 5;

while ($i < $count) {
    echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . '<br/>';
    $list->nextItem();
    $i ++;
}

echo '<br/>';

$j = $list->size() - 1;

while ($j >= -5) {
    echo 'VALUE: ' . $list->getCurrentItem()->value . ', INDEX: ' . $list->getCurrentItemIndex() . '<br/>';
    $list->prevItem();
    $j --;
}