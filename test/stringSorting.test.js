const { selectionSortStrings } = require('../algorithms/sorting');

describe('selectionSortStrings', () => {
    test('sorts an array of strings alphabetically', () => {
        const input = ["banana", "apple", "cherry"];
        const expected = ["apple", "banana", "cherry"];
        expect(selectionSortStrings(input)).toEqual(expected);
    });

    test('handles an already sorted array', () => {
        const input = ["apple", "banana", "cherry"];
        const expected = ["apple", "banana", "cherry"];
        expect(selectionSortStrings(input)).toEqual(expected);
    });

    test('handles an array with duplicates', () => {
        const input = ["banana", "apple", "banana"];
        const expected = ["apple", "banana", "banana"];
        expect(selectionSortStrings(input)).toEqual(expected);
    });

    test('handles an empty array', () => {
        const input = [];
        const expected = [];
        expect(selectionSortStrings(input)).toEqual(expected);
    });

    test('handles a single-element array', () => {
        const input = ["apple"];
        const expected = ["apple"];
        expect(selectionSortStrings(input)).toEqual(expected);
    });
});
