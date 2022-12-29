import { equal, deepEqual } from 'assert';
import chessBoard from '../src/task1.js';

describe('Chest Board', function () {
    it('should a chess board with heigth 4 and weigth 5', function () {
        equal(chessBoard(4, 5, '*'), '*****\n *****\n*****\n ****');
    });

    it('should a chess board with heigth 2 and weigth 2', function () {
        equal(chessBoard(2, 2, '*'), '**\n **');
    });

    it('should a chess board with heigth 6 and weigth 6', function () {
        equal(
            chessBoard(6, 6, '*'),
            '******\n ******\n******\n ******\n******\n ******'
        );
    });

    it('should a chess board with heigth 3 and weigth 6', function () {
        equal(chessBoard(3, 6, '*'), '******\n ******\n******');
    });

    it('chess board without params', function () {
        deepEqual(chessBoard(), {
            status: 'failed',
            reason: 'length or width should be a number greater than 0',
        });
    });

    it('length or width params are not a number', function () {
        deepEqual(chessBoard('four', 'three', '*'), {
            status: 'failed',
            reason: 'length or width should be numbers',
        });
    });

    if (
        ('length or width are lower than 1',
        function () {
            deepEqual(chessBoard(-6, -5, '*'), {
                status: 'failed',
                reason: 'length or width should be greater than 0',
            });
        })
    );
});
