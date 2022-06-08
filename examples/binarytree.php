<?php

use Datastructures\Binarytrees\BST;
use Datastructures\Binarytrees\Displaytree;

require ('../Datastructures/Binarytrees/BST.php');
require ('../Datastructures/Binarytrees/Node.php');
require ('../Datastructures/Binarytrees/Displaytree.php');

$tree = new BST(20);
$display = new Displaytree();

$tree->insert(10);
$tree->insert(9);
$tree->insert(11);
$tree->insert(30);
$tree->insert(29);
$tree->insert(31);

$display->description('Initial Tree In Object Format');
$display->displayUsingPreTag($tree);

$display->description('Show The Min Branch In Object Format');
$display->displayUsingPreTag($tree->min());

$display->description('Show The Max Branch In Object Format');
$display->displayUsingPreTag($tree->max());