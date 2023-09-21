describe('sortAscending', () => {
    test('returns an empty array when given an empty array', () => {
        expect(sortAscending([])).toEqual([]);
    });

    test('returns the same array when given an array with one element', () => {
        expect(sortAscending([7])).toEqual([7]);
    });

    test('sorts the array in ascending order', () => {
        expect(sortAscending([7, 1, 5, 3, 6, 4])).toEqual([1, 3, 4, 5, 6, 7]);
        expect(sortAscending([7, 6, 4, 3, 1])).toEqual([1, 3, 4, 6, 7]);
        expect(sortAscending([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        expect(sortAscending([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(sortAscending([1, 2, 3, 2, 5])).toEqual([1, 2, 2, 3, 5]);
    });

    test('handles arrays with negative numbers', () => {
        expect(sortAscending([7, -1, 5, 3, 6, 4])).toEqual([-1, 3, 4, 5, 6, 7]);
        expect(sortAscending([-7, -6, -4, -3, -1])).toEqual([-7, -6, -4, -3, -1]);
        expect(sortAscending([-1, -2, -3, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
        expect(sortAscending([-5, -4, -3, -2, -1])).toEqual([-5, -4, -3, -2, -1]);
        expect(sortAscending([-1, -2, -3, -2, -5])).toEqual([-5, -3, -2, -2, -1]);
    });

    test('handles arrays with repeated numbers', () => {
        expect(sortAscending([7, 1, 5, 3, 6, 4, 7])).toEqual([1, 3, 4, 5, 6, 7, 7]);
        expect(sortAscending([7, 6, 4, 3, 1, 7])).toEqual([1, 3, 4, 6, 7, 7]);
        expect(sortAscending([1, 2, 3, 4, 5, 1])).toEqual([1, 1, 2, 3, 4, 5]);
        expect(sortAscending([5, 4, 3, 2, 1, 5])).toEqual([1, 5, 5, 3, 4, 2]);
        expect(sortAscending([1, 2, 3, 2, 5, 1])).toEqual([1, 1, 2, 2, 3, 5]);
    });

    test('handles arrays with special values', () => {
        expect(sortAscending([null, undefined, NaN, Infinity, -Infinity])).toEqual([-Infinity, null, NaN, undefined, Infinity]);
    });

    test('handles arrays with non-numeric values', () => {
        expect(sortAscending([7, 'a', 5, 3, 6, 4])).toEqual([3, 4, 5, 6, 7, 'a']);
    });

    test('handles arrays with objects', () => {
        expect(sortAscending([7, {a: 1}, 5, 3, 6, 4])).toEqual([{a: 1}, 3, 4, 5, 6, 7]);
    });
});