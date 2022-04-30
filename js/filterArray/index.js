function filterArray(numbers) {

    numbers = numbers.filter((value) => {
        return value <= 10;
    }).map((value) => {
        return value * value;
    });

    return numbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray(numbers));