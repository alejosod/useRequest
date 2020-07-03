// @ts-nocheck
import addQueryParams from "../AddQueryParams.Function";

describe('addQueryParams', () => {

    it('Should throw an error if we provide invalid route type', () => {
        try {
            addQueryParams(5)
        } catch (error) {
            expect(error.message).toBe('Invalid route Type')
        }
    })

    it('Should throw an error if all the expected params on the route are not present in he queryParamsObject', () => {
        try {
            addQueryParams('/test/:test1/:error',{ test1: 'replace'})
        } catch (err) {
            expect(err.message).toBe('Query params provided do not correspond to those required on route')
        }
    })

    it('Should return the original rou if no queryParams are provided', () => {
        const result = addQueryParams('/test')

        expect(result).toBe('/test')
    })

    it('Should return the original route if queryParams is empty', () => {
        const result = addQueryParams('test', {})

        expect(result).toBe('test')
    })

    it('Should return the route with the params replaced', () => {
        const testRoute = '/:test/:test2'
        const testObject = {
            test: 'replaced',
            test2: 'replaced'
        }
        const expected = '/replaced/replaced'


        const result = addQueryParams(testRoute, testObject)

        expect(result).toBe(expected)

    })

    it('Should return the route with the params replaced even it they are present more than 1 time', () => {
        const testRoute = '/:test/:test'
        const testObject = {
            test: 'replaced',
        }
        const expected = '/replaced/replaced'


        const result = addQueryParams(testRoute, testObject)

        expect(result).toBe(expected)

    })

    it('Should return the route with the params replaced even if the query contain params that are not presented in the route', () => {
        const testRoute = '/:test/:test'
        const testObject = {
            test: 'replaced',
        }
        const expected = '/replaced/replaced'


        const result = addQueryParams(testRoute, testObject)

        expect(result).toBe(expected)

    })
})