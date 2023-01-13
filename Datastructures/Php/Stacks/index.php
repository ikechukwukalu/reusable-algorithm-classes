<?php

use Datastructures\Php\Stacks\Stack;
use Datastructures\Php\Stacks\Displaystack;

require ('Stack.php');
require ('Displaystack.php');

$stack = new Stack();
$display = new Displaystack();

$stack->push('A');
$stack->push('B');
$stack->push('C');
$stack->push('D');

$display->description('Initial Stack In Object Format');
$display->display($stack->viewStack());

$display->description('Size Of Stack');
$display->display($stack->size());

$display->description('Get Current Element From Stack');
$display->display($stack->peek());

$stack->pop();

$display->description('Removed One Element From Stack');
$display->display($stack->viewStack());

$display->description('Size Of Stack');
$display->display($stack->size());

$display->description('Get Current Element From Stack');
$display->display($stack->peek());