describe('findMaxProfit', () => {
    test('returns -1 when given an empty array', () => {
        expect(findMaxProfit([])).toBe(-1);
    });

    test('returns 0 when given an array with one element', () => {
        expect(findMaxProfit([7])).toBe(0);
    });

    test('returns the maximum profit that can be made', () => {
        expect(findMaxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
        expect(findMaxProfit([7, 6, 4, 3, 1])).toBe(-1);
        expect(findMaxProfit([1, 2, 3, 4, 5])).toBe(4);
        expect(findMaxProfit([5, 4, 3, 2, 1])).toBe(-1);
        expect(findMaxProfit([1, 2, 3, 2, 5])).toBe(4);
    });

    test('handles arrays with negative numbers', () => {
        expect(findMaxProfit([7, -1, 5, 3, 6, 4])).toBe(7);
        expect(findMaxProfit([-7, -6, -4, -3, -1])).toBe(0);
        expect(findMaxProfit([-1, -2, -3, -4, -5])).toBe(-1);
        expect(findMaxProfit([-5, -4, -3, -2, -1])).toBe(0);
        expect(findMaxProfit([-1, -2, -3, -2, -5])).toBe(4);
    });

    test('handles arrays with repeated numbers', () => {
        expect(findMaxProfit([7, 1, 5, 3, 6, 4, 7])).toBe(6);
        expect(findMaxProfit([7, 6, 4, 3, 1, 7])).toBe(6);
        expect(findMaxProfit([1, 2, 3, 4, 5, 1])).toBe(4);
        expect(findMaxProfit([5, 4, 3, 2, 1, 5])).toBe(0);
        expect(findMaxProfit([1, 2, 3, 2, 5, 1])).toBe(4);
    });
});