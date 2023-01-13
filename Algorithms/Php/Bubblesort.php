<?php

function BubbleSort(array $ary) {
    $arrLength = count($ary);

    for ($i = $arrLength; $i > 0; $i --) {
        $swap = false;

        for ($k = 0; $k < ($i - 1); $k ++) {
            if ($ary[$k] > $ary[$k + 1]) {
                $temp = $ary[$k];
                $ary[$k] = $ary[$k + 1];
                $ary[$k + 1] = $temp;

                $swap = true;
            }
        }

        if (!$swap) {
            return $ary;
        }
    }

    return $ary;
}

$unsortedArray = range(0, 100);
shuffle($unsortedArray);

echo "[" . implode(",", $unsortedArray) . "]\n \n";

$sortedArray = BubbleSort($unsortedArray);

echo "[" . implode(",", $sortedArray) . "]";