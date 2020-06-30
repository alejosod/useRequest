import ApiProviderConfigurationType from '../Models/ApiProviderConfiguration.Type';

/**
 * Function that validate the configuration for the Api Provider
 * @param configuration { ApiProviderConfigurationType } - Configuration object
 * @return { boolean } - valid configuration
 */
function validateConfiguration(configuration: ApiProviderConfigurationType): boolean {
  const { baseUrl, services } = configuration;

  // base url validations
  if (!baseUrl) throw new Error('BaseUrl needs to be Provided');
  if (typeof baseUrl !== 'string') throw new Error('Invalid BaseUrl type');

  // services validation
  if (!Array.isArray(services)) throw new Error('Invalid Service type');
  if (services.length < 1) throw new Error('At least a service Must be Provided');

  return true;
}

export default validateConfiguration;
