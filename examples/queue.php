<?php

use Datastructures\Php\Queues\Queue;
use Datastructures\Php\Queues\Displayqueue;

require ('../Datastructures/Php/Queues/Queue.php');
require ('../Datastructures/Php/Queues/Displayqueue.php');

$queue = new Queue();
$display = new Displayqueue();

$queue->push('A');
$queue->push('B');
$queue->push('C');
$queue->push('D');

$display->description('Initial Queue In Object Format');
$display->displayUsingPreTag($queue->viewQueue());

$display->description('Size Of Queue');
$display->displayUsingPreTag($queue->size());

$display->description('Get Current Element From Queue');
$display->displayUsingPreTag($queue->peek());

$queue->shift();

$display->description('Removed One Element From Queue');
$display->displayUsingPreTag($queue->viewQueue());

$display->description('Size Of Queue');
$display->displayUsingPreTag($queue->size());

$display->description('Get Current Element From Queue');
$display->displayUsingPreTag($queue->peek());