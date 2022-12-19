import { equal, deepEqual } from 'assert';
import numericSequence from '../src/task6.js';

describe('Numeric Sequence', function () {
    it('Given the square of 2 and a length equal to 4 you should return 2, 3, 4, 5', function () {
        const result = numericSequence(4, 4);
        equal(result, '2, 3, 4, 5');
    });

    it('Given the square of 4 and a length equal to 16 you should return 4, 5, 6, 7, 8, 9, 10, 11', function () {
        const result = numericSequence(8, 16);
        equal(result, '4, 5, 6, 7, 8, 9, 10, 11');
    });

    it("The user doesn't send parameter lower than 1", function () {
        const result = numericSequence(-1, -2);
        deepEqual(result, {
            status: 'failed',
            reason: 'Length and minSquare should be greater than 0',
        });
    });

    it("The user doesn't send any parameter", function () {
        const result = numericSequence();
        deepEqual(result, {
            status: 'failed',
            reason: 'You need to pass the amount of numbers that you want and a minimun square number',
        });
    });
});
