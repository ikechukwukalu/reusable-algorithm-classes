<?php

use Datastructures\Php\Binarytrees\BST;
use Datastructures\Php\Binarytrees\Displaytree;

require ('../Datastructures/Php/Binarytrees/BST.php');
require ('../Datastructures/Php/Binarytrees/Node.php');
require ('../Datastructures/Php/Binarytrees/Displaytree.php');

$tree = new BST(15);
$display = new Displaytree();

$tree->insert(3);
$tree->insert(36);
$tree->insert(2);
$tree->insert(12);
$tree->insert(28);
$tree->insert(39);

$display->description('Initial Tree In Object Format');
$display->displayUsingPreTag($tree);

$display->description('Show The Min Branch In Object Format');
$display->displayUsingPreTag($tree->min());

$display->description('Show The Max Branch In Object Format');
$display->displayUsingPreTag($tree->max());

$display->description('Depth First Sort In Order');
$display->displayUsingPreTag($tree->depthFirstSortInOrder());

$display->description('Depth First Sort Pre-order');
$display->displayUsingPreTag($tree->depthFirstSortPreOrder());

$display->description('Depth First Sort Post-order');
$display->displayUsingPreTag($tree->depthFirstSortPostOrder());

$display->description('Breadth First Sort');
$display->displayUsingPreTag($tree->breadthFirstSort());