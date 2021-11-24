<?php
function countSubStr($str)
{
    $res = 0; # Initialize result

    # Pick a starting point
    for ($i = 0; $i < strlen($str); $i++) {
        if ($str[$i] == '1') {
            # Search for all possible - ending point
            for ($j = $i + 1; $j < strlen($str); $j++) {
                if ($str[$j] == '1') {
                    $res++;
                }
            }
        }
    }
    return $res;
}

# Driver Code
$str = "00100101";
echo countSubStr($str);