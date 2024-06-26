const { sum, nativeNull } = require('./intro');

describe('Sum function:', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(1, 3)).toEqual(4);
    });
     
    test('should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(2, 3)).toBeLessThan(10)
        expect(sum(2, 3)).toBeLessThanOrEqual(5)
    });
    
    test('should sum 2 float values correctly', () => {
        expect(sum(0.3, 0.4)).toBe(0.7) // for some reason this line does not end up with error
        // expect(sum(0.1, 0.2)).toBe(0.3)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    });
});

describe('Native null:', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    });
});
