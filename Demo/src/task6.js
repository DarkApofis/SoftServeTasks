function numericSequence(length, minSquare) {
    if (!length || !minSquare) {
        return {
            status: 'failed',
            reason: 'You need to pass the amount of number that you want and a minimun square',
        };
    }

    if (length <= 0 || minSquare <= 0) {
        return {
            status: 'failed',
            reason: 'Length and minSquare should be greater than 0',
        };
    }

    const numberSerie = [];

    for (let i = Math.sqrt(minSquare); numberSerie.length < length; i++) {
        numberSerie.push(i);
    }

    return numberSerie.join(', ');
}

export default numericSequence;

// console.log(numericSequence(6, 16));
// console.log(numericSequence(2, 4));
// console.log(numericSequence(2));
