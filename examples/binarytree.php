<?php

use Datastructures\Binarytrees\BST;
use Datastructures\Binarytrees\Displaytree;

require ('../Datastructures/Binarytrees/BST.php');
require ('../Datastructures/Binarytrees/Node.php');
require ('../Datastructures/Binarytrees/Displaytree.php');

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

$display->description('Depth First Search In Order');
$display->displayUsingPreTag($tree->depthFirstSearchInOrder());

$display->description('Depth First Search Pre-order');
$display->displayUsingPreTag($tree->depthFirstSearchPreOrder());

$display->description('Depth First Search Post-order');
$display->displayUsingPreTag($tree->depthFirstSearchPostOrder());