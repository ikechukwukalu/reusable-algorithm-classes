<?php

function SelectionSort(array $ary) {
    $arrLength = count($ary);

    for ($i = 1; $i <= $arrLength; $i ++) {
        $min = null;

        for ($k = ($i - 1); $k < $arrLength; $k ++) {
            if ($min === null || $ary[$min] > $ary[$k]) {
                $min = $k;
            }
        }

        $temp = $ary[$i - 1];
        $ary[$i - 1] = $ary[$min];
        $ary[$min] = $temp;
    }

    return $ary;
}

$unsortedArray = range(0, 100);
shuffle($unsortedArray);

echo "[" . implode(",", $unsortedArray) . "]\n \n";

$sortedArray = SelectionSort($unsortedArray);

echo "[" . implode(",", $sortedArray) . "]";