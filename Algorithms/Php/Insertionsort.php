<?php

function InsertionSort(array $ary) {
    $arrLength = count($ary);

    for ($i = 1; $i < $arrLength; $i ++) {
        $currentValue = $ary[$i];

        for ($k = ($i - 1); $k >= 0 && $ary[$k] > $currentValue; $k --) {
            $ary[$k + 1] = $ary[$k];
        }

        $ary[$k + 1] = $currentValue;
    }

    return $ary;
}

$unsortedArray = range(0, 100);
shuffle($unsortedArray);

echo "[" . implode(",", $unsortedArray) . "]\n \n";

$sortedArray = InsertionSort($unsortedArray);

echo "[" . implode(",", $sortedArray) . "]";