import React from 'react';

import { ApiProviderPropsType, ApiProviderDefaultProps } from '../Models';
import ApiProviderContext from './ApiProvider.Context';
import { validateConfiguration } from '../Helpers';

// (configurationName) => (verb) => (axiosInstance) => (body, params) => axiosInstance(body,params)

const ApiProvider:
React.FunctionComponent<ApiProviderPropsType> = (props: ApiProviderPropsType) => {
  const { children, configuration } = props;

  validateConfiguration(configuration);


  return (
    <ApiProviderContext.Provider value={{}}>
      {children}
    </ApiProviderContext.Provider>
  );
};

ApiProvider.defaultProps = ApiProviderDefaultProps;

export default ApiProvider;
