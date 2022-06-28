<?php

function closestToZero(array $numbers) {
    if(sizeof($numbers) === 0 || !$numbers) {
        return 0;
    }

    $closest = 0;

    for($i = 0; $i < sizeof($numbers); $i++) {
        if($closest === 0) {
            $closest = $numbers[$i];
        } else if($numbers[$i] > 0 && $numbers[$i] <= abs($closest)) {
            $closest = $numbers[$i];
        } else if($numbers[$i] < 0 && -$numbers[$i] < abs($closest)) {
            $closest = $numbers[$i];
        }
    }

    return $closest;
}