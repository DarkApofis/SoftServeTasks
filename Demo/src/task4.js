function palindrome(number) {
    if (!number || typeof number !== 'number') {
        return {
            status: 'failed',
            reason: 'You should send a number',
        };
    }

    let posiblePalindrome = `${number}`;
    let reversedNumber = number.toString().split('').reverse().join('');
    if (number < 10) {
        return 'The numbers lower than 10 cannot be a palindrome';
    }

    if (posiblePalindrome === reversedNumber) return number;

    for (let i = 0; i < number.toString().length - 1; i++) {
        posiblePalindrome = '';
        for (let j = 1; j < number.toString().length; j++) {
            if (posiblePalindrome === '') {
                posiblePalindrome +=
                    number.toString()[i] + number.toString()[i + 1];
                reversedNumber = posiblePalindrome.split('').reverse().join('');
                if (posiblePalindrome === reversedNumber)
                    return posiblePalindrome;
            } else {
                posiblePalindrome += number.toString()[j + i];
                reversedNumber = posiblePalindrome.split('').reverse().join('');
                if (posiblePalindrome === reversedNumber)
                    return posiblePalindrome;
            }
        }
    }
    return 0;
}

module.exports = palindrome;
