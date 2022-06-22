<?php

use Datastructures\Php\Stacks\Stack;
use Datastructures\Php\Stacks\Displaystack;

require ('../Datastructures/Php/Stacks/Stack.php');
require ('../Datastructures/Php/Stacks/Displaystack.php');

$stack = new Stack();
$display = new Displaystack();

$stack->push('A');
$stack->push('B');
$stack->push('C');
$stack->push('D');

$display->description('Initial Stack In Object Format');
$display->displayUsingPreTag($stack->viewStack());

$display->description('Size Of Stack');
$display->displayUsingPreTag($stack->size());

$display->description('Get Current Element From Stack');
$display->displayUsingPreTag($stack->peek());

$stack->pop();

$display->description('Removed One Element From Stack');
$display->displayUsingPreTag($stack->viewStack());

$display->description('Size Of Stack');
$display->displayUsingPreTag($stack->size());

$display->description('Get Current Element From Stack');
$display->displayUsingPreTag($stack->peek());