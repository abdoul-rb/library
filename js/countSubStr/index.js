
// A simple javascript program to count number of
// substrings starting and ending with 1
function countSubStr(str, n)
{
    let res = 0;  // Initialize result
    // Pick a starting point
    for (let i = 0; i<n; i++) {
        if (str[i] == '1') {
            // Search for all possible ending point
            for (let j = i + 1; j< n; j++) {
                if (str[j] == '1') {
                    res++;
                }
            }
         }
    }
    return res;
}

// Driver program to test the above function
let string = "00100101";
let n = string.length;
document.write(countSubStr(string, n));