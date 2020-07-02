import React from 'react';
import axios from 'axios';
import { addQueries, addQueryParams } from '../../UrlAssembler';

import ApiProviderContext from './ApiProvider.Context';
import { ApiProviderPropsType, ApiProviderDefaultProps } from '../Models';
import { createServiceMap, validateConfiguration } from '../Helpers';

const ApiProvider:
React.FunctionComponent<ApiProviderPropsType> = (props: ApiProviderPropsType) => {
  const { children, configuration } = props;

  validateConfiguration(configuration);
  const serviceMap = createServiceMap(configuration);

  const contextValue = {
    axios,
    serviceMap,
    addQueries,
    addQueryParams,
  };

  return (
    <ApiProviderContext.Provider value={contextValue}>
      {children}
    </ApiProviderContext.Provider>
  );
};

ApiProvider.defaultProps = ApiProviderDefaultProps;

export default ApiProvider;
