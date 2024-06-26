const { map } = require('./mock')

describe('Map function', () => {
    let array;
    let fn;

    beforeEach(() => {
        array = [1, 2, 3, 5];
        fn = jest.fn(x => x ** 2);
        map(array, fn);
    });

    test('should call callback', () => {
        // expect(fn).toBeCalled(); // toBeCalled is deprecated. Use toHaveBeenCalled
        expect(fn).toHaveBeenCalled();
    });

    test('should call callback 4 times', () => {
        expect(fn).toHaveBeenCalledTimes(4); // option 1
        expect(fn.mock.calls.length).toBe(4); // option 2
    });

    test('should pow 2 each element', () => {
        expect(fn.mock.results[0].value).toBe(1); 
        expect(fn.mock.results[1].value).toBe(4); 
        expect(fn.mock.results[2].value).toBe(9); 
        expect(fn.mock.results[3].value).toBe(25); 
    });

    test('should return 100 when called first, then 200, then always 42', () => {
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue(42);
        
        expect(fn()).toBe(100); 
        expect(fn()).toBe(200); 
        expect(fn()).toBe(42); 
        expect(fn()).toBe(42); 
    });

})