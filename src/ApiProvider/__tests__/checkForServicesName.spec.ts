import createNameMapChecker from '../Helpers/checkForServiceName.Function';

describe('checkForServicesName', () => {
  it('Should throw an error if the service is not in the map.', () => {
    const ServiceMap = new Map();
    ServiceMap.set('test', 'test');

    try {
      const checkForServiceName = createNameMapChecker(ServiceMap);
      checkForServiceName('test1');
    } catch (e) {
      expect(e.message).toBe('Service is not configure');
    }
  });

  it('Should not throw an error if the service is in the map', () => {
    const ServiceMap = new Map();
    ServiceMap.set('test', 'test');

    const checkForServiceName = createNameMapChecker(ServiceMap);
    const result = checkForServiceName('test');

    expect(result).toBe(undefined);
  });
});
