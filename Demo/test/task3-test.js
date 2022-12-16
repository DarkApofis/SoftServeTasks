const assert = require('assert');
const sortingTriangles = require('../src/task3');

describe('Sorting Triangles', function () {
    it('Should sort triangles by his area in descending order', function () {
        const triangles = [
            {
                vertices: 'ABC',
                a: 10,
                b: 20,
                c: 22.36,
            },
            {
                vertices: 'TED',
                t: 3,
                e: 4,
                d: 5,
            },
        ];
        const result = sortingTriangles(triangles);
        assert.deepEqual(result, [
            {
                vertices: 'ABC',
                a: 10,
                b: 20,
                c: 22.36,
            },
            {
                vertices: 'TED',
                t: 3,
                e: 4,
                d: 5,
            },
        ]);
    });
    it('Should sort triangles by his area in descending order', function () {
        const triangles = [
            {
                vertices: 'TED',
                t: 3,
                e: 4,
                d: 5,
            },
            {
                vertices: 'DEF',
                d: 30,
                e: 40.5,
                f: 50,
            },
            {
                vertices: 'ABC',
                a: 10,
                b: 20,
                c: 22.36,
            },
        ];
        const result = sortingTriangles(triangles);
        assert.deepEqual(result, [
            {
                vertices: 'DEF',
                d: 30,
                e: 40.5,
                f: 50,
            },
            {
                vertices: 'ABC',
                a: 10,
                b: 20,
                c: 22.36,
            },
            {
                vertices: 'TED',
                t: 3,
                e: 4,
                d: 5,
            },
        ]);
    });
});
