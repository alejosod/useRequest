import ApiProviderServiceType from './ApiProviderService.Type';

export default interface ApiProviderConfigurationType {
  baseUrl: string;
  services: Array<ApiProviderServiceType>;
}
