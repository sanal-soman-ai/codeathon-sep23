describe('validateIPAddress', () => {
    test('returns false when given an empty string', () => {
        expect(validateIPAddress('')).toBe(false);
    });

    test('returns false when given an invalid IP address with too few numbers', () => {
        expect(validateIPAddress('192.168.1')).toBe(false);
    });

    test('returns false when given an invalid IP address with too many numbers', () => {
        expect(validateIPAddress('192.168.1.1.1')).toBe(false);
    });

    test('returns false when given an invalid IP address with a negative number', () => {
        expect(validateIPAddress('192.168.-1.1')).toBe(false);
    });

    test('returns false when given an invalid IP address with a number greater than 255', () => {
        expect(validateIPAddress('192.168.256.1')).toBe(false);
    });

    test('returns false when given an invalid IP address with a non-numeric character', () => {
        expect(validateIPAddress('192.168.1.a')).toBe(false);
    });

    test('returns false when given an invalid IP address with leading zeros', () => {
        expect(validateIPAddress('192.168.01.1')).toBe(false);
    });

    test('returns true when given a valid IP address with all numbers between 0 and 255', () => {
        expect(validateIPAddress('192.168.1.1')).toBe(true);
    });

    test('returns true when given a valid IP address with all numbers equal to 0', () => {
        expect(validateIPAddress('0.0.0.0')).toBe(true);
    });

    test('returns true when given a valid IP address with all numbers equal to 255', () => {
        expect(validateIPAddress('255.255.255.255')).toBe(true);
    });
});