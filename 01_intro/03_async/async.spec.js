const Ajax = require('./async');

describe('Ajax: echo', () => {

    // async based test
    test('should return value async', async () => { 
        const result = await Ajax.echo('some data');
        expect(result).toBe('some data');
    });

    // promise based test
    test('should return value with promise', () => { 
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        });
    });
})