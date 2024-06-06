const { map } = require('./mock')

describe('Map function', () => {
    let array;
    let fn;

    beforeEach(() => {
        array = [1, 2, 3, 5];
        fn = jest.fn(x => x ** 2);
    });

    test('should call callback', () => {
        map(array, fn);
        // expect(fn).toBeCalled(); // toBeCalled is deprecated. Use toHaveBeenCalled
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(4);
    });

})