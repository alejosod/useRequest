import { ApiProviderConfigurationType } from '../Models';

/**
 * Function that return a map with services
 * @param configuration { ApiProviderConfigurationType } - configuration object
 * @return { Map } - Services Map
 */
const createServiceMap = (configuration: ApiProviderConfigurationType): any => {
  const { services } = configuration;
  const configurationMap = new Map();

  services.forEach(({ serviceName, ...rest }) => {
    configurationMap.set(serviceName, { ...rest });
  });

  return configurationMap;
};

export default createServiceMap;
