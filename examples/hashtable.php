<?php

use Datastructures\Hashtables\Hashtable;
use Datastructures\Hashtables\Displaytable;

require ('../Datastructures/Hashtables/Hashtable.php');
require ('../Datastructures/Hashtables/Displaytable.php');

$hashtable = new Hashtable();
$display = new Displaytable();

$arr = ['contains data'];

$hashtable->add("astroza", $arr);
$hashtable->add("astrozas", $arr);
$hashtable->add("astrozass", $arr);
$hashtable->add("astronaut", $arr);
$hashtable->add("astronauts", $arr);
$hashtable->add("astronautss", $arr);
$hashtable->add("Bin", $arr);
$hashtable->add("Bins", $arr);
$hashtable->add("Binss", $arr);
$hashtable->add("Recycle", $arr);
$hashtable->add("Recycle", $arr);
$hashtable->add("Recycless", $arr);

$display->description('Initial Hash Table In Object Format');
$display->displayUsingPreTag($hashtable->viewHashTable());

$display->description('Search Hash Table In Object Format');
$display->displayUsingPreTag($hashtable->search("astronautss"));

$display->description('Hash Table Length');
$display->displayUsingPreTag($hashtable->length());

$display->description('Remove "astronauts" From Hash Table');
$display->displayUsingPreTag($hashtable->remove("astronauts"));

$display->description('Hash Table In Object Format');
$display->displayUsingPreTag($hashtable->viewHashTable());