import createServiceMap from '../Helpers/createServicesMap.Function';
import { ApiProviderConfigurationType } from '../Models';

describe('createServiceMap', () => {
  it('Should return a map', () => {
    const configuration: ApiProviderConfigurationType = {
      baseUrl: '',
      services: [
        {
          serviceName: 'serviceName',
          route: 'route',
        },
      ],
    };
    const result = createServiceMap(configuration);

    expect(result).toBeInstanceOf(Map);
  });

  it('Should contain a key called serviceName', () => {
    const configuration: ApiProviderConfigurationType = {
      baseUrl: '',
      services: [
        {
          serviceName: 'serviceName',
          route: 'route',
        },
      ],
    };

    const result = createServiceMap(configuration);
    const containsText = result.has('serviceName');

    expect(containsText).toBe(true);
  });

  it('Should have an object value in the serviceName key', () => {
    const configuration: ApiProviderConfigurationType = {
      baseUrl: '',
      services: [
        {
          serviceName: 'serviceName',
          route: 'route',
        },
      ],
    };

    const result = createServiceMap(configuration);
    const containsText = result.get('serviceName');

    expect(containsText).toBeInstanceOf(Object);
  });

  it('Should have contain a route key with route value on serviceName key', () => {
    const configuration: ApiProviderConfigurationType = {
      baseUrl: '',
      services: [
        {
          serviceName: 'serviceName',
          route: 'route',
        },
      ],
    };

    const result = createServiceMap(configuration);
    const containsText = result.get('serviceName');

    expect(containsText.route).toBe('route');
  });
});
