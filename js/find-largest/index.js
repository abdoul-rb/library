/** Returns the array max numbers */
function findLargest(numbers) {
    
    max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return max;
}

function findLargest_(numbers) {

    let max = numbers.reduce(function (acc, value) {
        return Math.max(acc, value);
    });

    return max;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findLargest_(numbers));