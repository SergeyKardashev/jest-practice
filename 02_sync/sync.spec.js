const Lodash = require('./sync');

describe('Lodash: compact', () => {

    let _ = new Lodash(); //  class instance with name '_'
    let array;

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello'];
     });

    // afterAll(() => {
    //     _ = new Lodash();
    // })


    test('should be defined', () => { 
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    });

    test('should working array be editable', () => {
        array.push(...['one', 'two']);
        expect(array).toContain('one');
        expect(array).toContain('two');
    });

    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello'];
        
        // expect(_.compact(array)).toBe(result); // does not work for array. Only for primitives
        expect(_.compact(array)).toEqual(result);
    });

    test('should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false);
        expect(_.compact(array)).not.toContain(0);
        expect(_.compact(array)).not.toContain('');
        expect(_.compact(array)).not.toContain(null);
    });
});