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

$list->description('Initial List In Object Format');
$list->displayUsingPreTag($list);

echo '<br/><br/><br/>';

$list->description('Initial List In Loop');
$list->displayListRightMovement($list);
$list->displayListLeftMovement($list);

$list->unshift();
$list->unshift();

$list->description('Removed 2 Items From Top');
$list->displayListRightMovement($list);
$list->displayListLeftMovement($list);

$list->pop();
$list->pop();

$list->description('Removed 2 Items From Bottom');
$list->displayListRightMovement($list);
$list->displayListLeftMovement($list);

$list->insertAt(0, 0);
$list->insertAt(11, 10);
$list->insertAt(0.5, 1);
$list->insertAt(1.5, 3);
$list->insertAt(2.5, 5);
$list->insertAt(8.5, 11);
$list->insertAt(9.5, 13);
$list->insertAt(10.5, 15);

$list->description('Added 8 New Items From Index Positions');
$list->displayListRightMovement($list);
$list->displayListLeftMovement($list);

$list->description('Searched For A Value');
$list->displayUsingPreTag($list->search(0.5));

$list->deleteAt(0); // 0
$list->deleteAt(0); // 0.5
$list->deleteAt(1); // 1.5
$list->deleteAt(2); // 2.5
$list->deleteAt(8); // 8.5
$list->deleteAt(9); // 9.5
$list->deleteAt(11); // 10.5
$list->deleteAt(10); // 11


$list->description('Removed 8 Items From Index Positions');
$list->displayListRightMovement($list);
$list->displayListLeftMovement($list);