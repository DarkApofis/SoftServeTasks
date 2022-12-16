import { equal } from 'assert';
import palindrome from '../src/task4.js';

describe('Palindrome', function () {
    it('For the number 2002 should return 2002', function () {
        const result = palindrome(2002);
        equal(result, 2002);
    });

    it('For the number 1234437 should return 3443', function () {
        const result = palindrome(1234437);
        equal(result, 3443);
    });

    it('For the number 5005213 should return 5005', function () {
        const result = palindrome(5005213);
        equal(result, 5005);
    });

    it('For the number 2137227 should return 7227', function () {
        const result = palindrome(2137227);
        equal(result, 7227);
    });

    it('For the number 1233546 should return 33', function () {
        const result = palindrome(1233546);
        equal(result, 33);
    });

    it('For the number 1234567 should return 0', function () {
        const result = palindrome(1234567);
        equal(result, 0);
    });
});
