const { bubbleSortIntegers } = require('../algorithms/sorting');

describe('bubbleSortIntegers', () => {
    test('sorts an array of integers in ascending order', () => {
        const input = [34, 7, 23, 32, 5, 62];
        const expected = [5, 7, 23, 32, 34, 62];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });

    test('handles an already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });

    test('handles an array with duplicates', () => {
        const input = [4, 1, 3, 4, 2];
        const expected = [1, 2, 3, 4, 4];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });

    test('handles a single-element array', () => {
        const input = [42];
        const expected = [42];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });

    test('handles an empty array', () => {
        const input = [];
        const expected = [];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });

    test('handles a reverse-sorted array', () => {
        const input = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });

    test('handles an array with negative numbers', () => {
        const input = [3, -2, -5, 1, 0];
        const expected = [-5, -2, 0, 1, 3];
        expect(bubbleSortIntegers(input)).toEqual(expected);
    });
});
