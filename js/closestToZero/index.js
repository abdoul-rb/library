function closestToZero(numbers) {

    if (numbers.length === 0 || !numbers) {
        return 0;
    }

    let negatif = numbers.filter((value) => {
        return value < 0;
    }).sort((a, b) => b - a);

    let positif = numbers.filter((value) => {
        return value >= 0;
    });

    if (positif[0] > Math.abs(negatif[0])) {
        return negatif[0];   
    } else {
        return positif[0];
    }

}