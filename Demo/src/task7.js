function fib(constraints) {
    const [min, max, length] = Object.values(constraints);

    if (!min || !max || !length) {
        return {
            status: 'failed',
            reason: 'A constraint field is missing',
        };
    }

    if([min, max, length].some(item => typeof item !== 'number')){
        return {
            status: 'failed',
            reason: 'Constraints fields should be numbers'
        }
    }

    if(min >= max){
        return {
            status: 'failed',
            reason: 'Min constraint should be lower than max constraint'
        }
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

    while (fiboArray.length < length) {
        let c = a + b;
        a = b;
        b = c;
        if (c >= min && c <= max) {
            fiboArray.push(c);
        } else if (c > max) {
            return fiboArray;
        }
    }

    return fiboArray;
}

export default fib;

// const rules = {
//     min: 1,
//     max: 2000,
//     length: 5,
// };

// console.log(fib({a: 5, b: 1, c: 2000}));
