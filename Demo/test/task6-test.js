const assert = require('assert');
const numericSequence = require('../src/task6');

describe('Numeric Sequence', function () {
    it('Given the square of 2 and a length equal to 4 you should return 2, 3, 4, 5', function () {
        const result = numericSequence(4, 4);
        assert.equal(result, '2, 3, 4, 5');
    });

    it('Given the square of 4 and a length equal to 16 you should return 4, 5, 6, 7, 8, 9, 10, 11', function () {
        const result = numericSequence(8, 16);
        assert.equal(result, '4, 5, 6, 7, 8, 9, 10, 11');
    });

    it("The user doesn't send parameter lower than 1", function () {
        const result = numericSequence(-1, -2);
        assert.deepEqual(result, {
            status: 'failed',
            reason: 'Length and minSquare should be greater than 0',
        });
    });

    it("The user doesn't send any parameter", function () {
        const result = numericSequence();
        assert.deepEqual(result, {
            status: 'failed',
            reason: 'You need to pass the amount of number that you want and a minimun square',
        });
    });
});
