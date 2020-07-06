import React from 'react';

import ApiProviderContext from './ApiProvider.Context';
import { ApiProviderPropsType, ApiProviderDefaultProps } from '../Models';
import {
  createServiceMap, validateConfiguration, checkForServiceNameFactory,
  attachAxiosConfig, assembleRoute,
} from '../Helpers';

const ApiProvider:
React.FunctionComponent<ApiProviderPropsType> = (props: ApiProviderPropsType) => {
  console.log('here')
  const { children, configuration } = props;

  validateConfiguration(configuration);
  const serviceMap = createServiceMap(configuration);
  const checkForServiceName = checkForServiceNameFactory(serviceMap);
  const createRouteAssemble = assembleRoute(serviceMap);

  const contextValue = {
    checkForServiceName,
    attachAxiosConfig,
    createRouteAssemble,
  };

  return (
    <ApiProviderContext.Provider value={contextValue}>
      {children}
    </ApiProviderContext.Provider>
  );
};

ApiProvider.defaultProps = ApiProviderDefaultProps;

export default ApiProvider;
