<?php
global $unsortedArray;

function pivot($unsortedArray, $start = 0, $end = null) {
    global $unsortedArray;

    if (is_null($end)) {
        $end = count($unsortedArray) - 1;
    }

    $pivot  = $unsortedArray[$start];
    $swapIndex = $start;
    $swap = function ($unsortedArray, $i, $k) {
        global $unsortedArray;

        $temp = $unsortedArray[$i];
        $unsortedArray[$i] = $unsortedArray[$k];
        $unsortedArray[$k] = $temp;
    };

    for ($i = $start + 1; $i <= $end; $i ++) {
        if ($pivot > $unsortedArray[$i]) {
            $swapIndex ++;
            $swap($unsortedArray, $i, $swapIndex);
        }
    }

    $swap($unsortedArray, $start, $swapIndex);

    return $swapIndex;
}

function quickSort($unsortedArray, $left = 0, $right = null) {
    global $unsortedArray;

    if (is_null($right)) {
        $right = count($unsortedArray) - 1;
    }

    if ($left < $right) {
        $pivotIndex = pivot($unsortedArray, $left, $right);

        quickSort($unsortedArray, $left, ($pivotIndex - 1));
        quickSort($unsortedArray, ($pivotIndex + 1), $right);
    }

    return $unsortedArray;
}

$unsortedArray = range(0, 100);
shuffle($unsortedArray);

echo "[" . implode(",", $unsortedArray) . "]\n \n";

$sortedArray = quickSort($unsortedArray);

echo "[" . implode(",", $sortedArray) . "]";