<?php

/*
* Testing merge function
$ary1 = [5, 10, 15, 20, 25];
$ary2 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
$results = merge($ary1, $ary2);
print_r($results);
*/

function merge($ary1, $ary2) {
    $results = [];
    $i = 0;
    $k = 0;

    $ary1Size = count($ary1);
    $ary2Size = count($ary2);

    while ($i < $ary1Size || $k < $ary2Size) {
        if (!isset($ary1[$i]) || !isset($ary2[$k])) {
            break;
        }

        if ($ary1[$i] < $ary2[$k]) {
            $results[] = $ary1[$i];
            $i ++;
        } else {
            $results[] = $ary2[$k];
            $k ++;
        }
    }

    while ($i < $ary1Size) {
        $results[] = $ary1[$i];
        $i ++;
    }

    while ($k < $ary2Size) {
        $results[] = $ary2[$k];
        $k ++;
    }

    return $results;
}

function mergeSort($ary) {
    if (count($ary) < 2) {
        return $ary;
    }

    $size = count($ary);
    $middle =  floor($size / 2);

    $tempAry1 = mergeSort(array_slice($ary, 0, $middle));
    $tempAry2 = mergeSort(array_slice($ary, $middle, $size));

    return merge($tempAry1, $tempAry2);
}

$unsortedArray = range(0, 100);
shuffle($unsortedArray);

echo "[" . implode(",", $unsortedArray) . "]\n \n";

$sortedArray = mergeSort($unsortedArray);

echo "[" . implode(",", $sortedArray) . "]";