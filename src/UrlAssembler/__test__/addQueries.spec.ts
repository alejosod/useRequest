import addQueries from "../addQueries.Function";

describe('addQueries', () => {
    it('should return a string', () => {
        const result = addQueries('/test/test', {query1: '1', query2: '2'});

        expect(typeof result).toBe('string');
    })

    it('should return a the original route, if query is not valid', () => {
        const result = addQueries('/test/test');

        expect(result).toBe('/test/test');
    })

    it('Should return the original route, if not query is provided', () => {
        const result = addQueries('/test/test', {});

        expect(result).toBe('/test/test');
    })

    it('Should return a correct route with queries', () => {
        const result = addQueries('/test/test', {query1: '1', query2: '2'});

        expect(result).toBe('/test/test?query1=1&query2=2');
    })
})