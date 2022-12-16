function fib(constraints) {
    const [min, max, length] = [...Object.values(constraints)];

    if (!min || !max || !length) {
        return {
            status: 'failed',
            reason: 'a constraint field is missing',
        };
    }

    if (min < 1 || max < 1 || length < 1) {
        return {
            status: 'failed',
            reason: 'constraints field should be greater than 0',
        };
    }

    const fiboArray = [];

    let a = 1;
    let b = 1;
    if (a >= min) fiboArray.push(a);
    if (b >= min) fiboArray.push(b);

    for (let i = 3; fiboArray.length < length; i++) {
        let c = a + b;
        a = b;
        b = c;
        if (c >= min && c <= max) {
            fiboArray.push(c);
        } else {
            return fiboArray;
        }
    }

    return fiboArray;
}

const rules = {
    min: 1,
    max: 150,
    length: 100,
};
