function chessBoard(length, width, char = '*') {
    if (!length || !width) {
        return {
            status: 'failed',
            reason: 'length or width should be a number greater than 0',
        };
    }

    if (typeof length !== 'number' || typeof width !== 'number') {
        return {
            status: 'failed',
            reason: 'length or width should be numbers',
        };
    }

    if (length < 1 || width < 1) {
        return {
            status: 'failed',
            reason: 'length or width should be greater than 0',
        };
    }

    let chessDisplay = '';

    for (let i = 1; i <= length; i++) {
        if (i % 2 === 0) {
            chessDisplay += ` ${char.repeat(width)}\n`;
        } else {
            chessDisplay += `${char.repeat(width)}\n`;
        }
    }
    return chessDisplay.trim();
}

export default chessBoard;

// console.log(chessBoard(4, 5, '*'));
// console.log(chessBoard(4, '5', '*'));
// console.log(chessBoard(4, -1, '*'));
// console.log(chessBoard());
