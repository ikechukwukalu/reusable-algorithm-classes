<?php

use Datastructures\Php\Queues\Queue;
use Datastructures\Php\Queues\Displayqueue;

require ('Queue.php');
require ('Displayqueue.php');

$queue = new Queue();
$display = new Displayqueue();

$queue->push('A');
$queue->push('B');
$queue->push('C');
$queue->push('D');

$display->description('Initial Queue In Object Format');
$display->display($queue->viewQueue());

$display->description('Size Of Queue');
$display->display($queue->size());

$display->description('Get Current Element From Queue');
$display->display($queue->peek());

$queue->shift();

$display->description('Removed One Element From Queue');
$display->display($queue->viewQueue());

$display->description('Size Of Queue');
$display->display($queue->size());

$display->description('Get Current Element From Queue');
$display->display($queue->peek());