// @ts-nocheck
import assembleRoute from '../Helpers/assembleRoute.Function';

describe('assembleRoute', () => {
  it('Should throw an Error if no serviceMap is provided', () => {
    try {
      assembleRoute();
    } catch (e) {
      expect(e.message).toBe('Service Map should be provided');
    }
  });

  it('Should throw an Error if serviceMap is not a Map', () => {
    try {
      assembleRoute({});
    } catch (e) {
      expect(e.message).toBe('Service Map should be instance of a Map');
    }
  });

  it('Should return a function if a serviceMap is valid', () => {
    const serviceMap = new Map();
    const selectServiceName = assembleRoute(serviceMap);

    expect(selectServiceName).toBeInstanceOf(Function);
  });

  it('Should throw an Error if no serviceName is provided', () => {
    try {
      const serviceMap = new Map();
      const selectServiceName = assembleRoute(serviceMap);
      selectServiceName();
    } catch (e) {
      expect(e.message).toBe('Service Name should be provided');
    }
  });

  it('Should throw an Error if serviceName is not a string', () => {
    try {
      const serviceMap = new Map();
      const selectServiceName = assembleRoute(serviceMap);
      selectServiceName(1);
    } catch (e) {
      expect(e.message).toBe('Service Name should be a string');
    }
  });

  it('Should throw an Error if the serviceName is not available', () => {
    try {
      const serviceMap = new Map();
      serviceMap.set('test', { route: 'test' });

      const selectServiceName = assembleRoute(serviceMap);
      selectServiceName('test1');
    } catch (e) {
      expect(e.message).toBe('Service name is not available on Service Map');
    }
  });

  it('Should throw an Error if a routeName is missing on ParamsObject', () => {
    try {
      const serviceMap = new Map();
      serviceMap.set('test', { route: '/test/:testParams/:error' });

      const selectServiceName = assembleRoute(serviceMap);
      const createRoute = selectServiceName('test');

      const result = createRoute({ testParams: 'replaced' }, { queryKey: 'query1Value', secondQuery: 'second' });

      expect(result).toBe('/test/replaced?queryKey=query1Value&secondQuery=second');
    } catch (e) {
      expect(e.message).toBe('Query params provided do not correspond to those required on route');
    }
  });

  it('Should return the correct Route assemble', () => {
    const serviceMap = new Map();
    serviceMap.set('test', { route: '/test/:testParams/secondRoute/:error' });

    const selectServiceName = assembleRoute(serviceMap);
    const createRoute = selectServiceName('test');

    const result = createRoute({ testParams: 'replaced', error: 'error' }, { queryKey: 'query1Value', secondQuery: 'second' });

    expect(result).toBe('/test/replaced/secondRoute/error?queryKey=query1Value&secondQuery=second');
  });
});
