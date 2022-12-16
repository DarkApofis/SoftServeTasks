const assert = require('assert');
const chessBoard = require('../src/task1');

describe('Chest Board', function () {
    it('should a chess board with heigth 4 and weigth 5', function () {
        assert.equal(chessBoard(4, 5, '*'), '*****\n *****\n*****\n *****');
    });

    it('should a chess board with heigth 2 and weigth 2', function () {
        assert.equal(chessBoard(2, 2, '*'), '**\n **');
    });

    it('should a chess board with heigth 6 and weigth 6', function () {
        assert.equal(
            chessBoard(6, 6, '*'),
            '******\n ******\n******\n ******\n******\n ******'
        );
    });

    it('should a chess board with heigth 3 and weigth 6', function () {
        assert.equal(chessBoard(3, 6, '*'), '******\n ******\n******');
    });

    it('chess board without params', function () {
        assert.deepEqual(chessBoard(), {
            status: 'failed',
            reason: 'length or width should be a number greater than 0',
        });
    });

    it('length or width params are not a number', function () {
        assert.deepEqual(chessBoard('four', 'three', '*'), {
            status: 'failed',
            reason: 'length or width should be numbers',
        });
    });

    if (
        ('length or width are lower than 1',
        function () {
            assert.deepEqual(chessBoard(-6, -5, '*'), {
                status: 'failed',
                reason: 'length or width should be greater than 0',
            });
        })
    );
});
