function move_zeros(arr) {
    let without_zeros = arr.filter(value => value !== 0);

    return [...without_zeros, new Array(arr.length - without_zeros.length).fill(0)];
}

let numbers = [1, 10, 0, 6, 9, 5, 0, 0, 3, 7, 8, 0, 2];
console.log(move_zeros(numbers));