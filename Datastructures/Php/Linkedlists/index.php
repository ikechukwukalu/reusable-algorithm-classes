<?php

use Datastructures\Php\Linkedlists\Doublylinkedlist;
use Datastructures\Php\Linkedlists\Displaylist;

require ('Doublylinkedlist.php');
require ('Node.php');
require ('Displaylist.php');

$list = new Doublylinkedlist();
$display = new Displaylist();

$list->unshift(5);
$list->unshift(4);
$list->unshift(3);
$list->unshift(2);
$list->unshift(1);
$list->unshift(0.2);
$list->unshift(0.1);

$list->push(6);
$list->push(7);
$list->push(8);
$list->push(9);
$list->push(10);
$list->push(10.1);
$list->push(10.2);

$display->description('Initial List In Object Format');
$display->display($list);

echo '<br/><br/><br/>';

$display->description('Initial List In Loop');
$display->displayListFromHead($list);
$display->displayListFromTail($list);

$list->shift();
$list->shift();

$display->description('Removed 2 Items From Top');
$display->displayListFromHead($list);
$display->displayListFromTail($list);

$list->pop();
$list->pop();

$display->description('Removed 2 Items From Bottom');
$display->displayListFromHead($list);
$display->displayListFromTail($list);

$list->insertAt(0, 0);
$list->insertAt(11, 10);
$list->insertAt(0.5, 1);
$list->insertAt(1.5, 3);
$list->insertAt(2.5, 5);
$list->insertAt(8.5, 11);
$list->insertAt(9.5, 13);
$list->insertAt(10.5, 15);

$display->description('Added 8 New Items From Index Positions');
$display->displayListFromHead($list);
$display->displayListFromTail($list);

$display->description('Searched For A Value');
$display->display($list->search(0.5));

$list->deleteAt(0); // 0
$list->deleteAt(0); // 0.5
$list->deleteAt(1); // 1.5
$list->deleteAt(2); // 2.5
$list->deleteAt(8); // 8.5
$list->deleteAt(9); // 9.5
$list->deleteAt(11); // 10.5
$list->deleteAt(10); // 11


$display->description('Removed 8 Items From Index Positions');
$display->displayListFromHead($list);
$display->displayListFromTail($list);