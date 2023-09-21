describe('sortStringByFrequency', () => {
    test('returns an empty string when given an empty string', () => {
        expect(sortStringByFrequency('')).toBe('');
    });

    test('returns the same string when given a string with only one character', () => {
        expect(sortStringByFrequency('a')).toBe('a');
    });

    test('sorts the string by character frequency in descending order', () => {
        expect(sortStringByFrequency('programming')).toBe('ggmmrrnaoiinp');
        expect(sortStringByFrequency('hello world')).toBe('lllooehwrd');
        expect(sortStringByFrequency('HELLO')).toBe('LLOHE');
        expect(sortStringByFrequency('hello, world!')).toBe('lllooehwrd!');
        expect(sortStringByFrequency('こんにちは')).toBe('こにちは');
    });

    test('ignores case when sorting the string', () => {
        expect(sortStringByFrequency('aAAbBcC')).toBe('AAaBBbCc');
    });

    test('preserves the order of characters with the same frequency', () => {
        expect(sortStringByFrequency('abccba')).toBe('aabbcc');
    });

    test('handles strings with special characters', () => {
        expect(sortStringByFrequency('!@#$%^&*()')).toBe('!@#$%^&*()');
    });

    test('handles strings with whitespace characters', () => {
        expect(sortStringByFrequency('a b c d e f g')).toBe('abcdefg ');
    });

    test('handles strings with non-ASCII characters', () => {
        expect(sortStringByFrequency('你好世界')).toBe('你世好界');
    });
});