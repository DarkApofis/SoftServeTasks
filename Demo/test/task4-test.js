const assert = require('assert');
const palindrome = require('../src/task4');

describe('Palindrome', function () {
    it('For the number 2002 should return 2002', function () {
        result = palindrome(2002);
        assert.equal(result, 2002);
    });

    it('For the number 1234437 should return 3443', function () {
        result = palindrome(1234437);
        assert.equal(result, 3443);
    });

    it('For the number 5005213 should return 5005', function () {
        result = palindrome(5005213);
        assert.equal(result, 5005);
    });

    it('For the number 2137227 should return 7227', function () {
        result = palindrome(2137227);
        assert.equal(result, 7227);
    });

    it('For the number 1233546 should return 33', function () {
        result = palindrome(1233546);
        assert.equal(result, 33);
    });

    it('For the number 1234567 should return 0', function () {
        result = palindrome(1234567);
        assert.equal(result, 0);
    });
});
