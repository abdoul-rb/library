function count(arr) {
    return arr.reduce((acc, previousValue) => {
        return acc[previousValue]
            ? ++acc[previousValue]
            : acc[previousValue] = 1, acc 
    }, {});
}

console.log(count([1, 1, 1, 2, 2, 3]));