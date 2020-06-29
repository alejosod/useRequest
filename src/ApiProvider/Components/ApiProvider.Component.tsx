import React from 'react';

import ApiProviderPropsType from '../Models/ApiProviderProps.Type';
import ApiProviderContext from './ApiProvider.Context';

const ApiProvider: React.FunctionComponent = (props: ApiProviderPropsType) => {
  const { children, configuration } = props;

  return (
    <ApiProviderContext.Provider value={{}}>
      {children}
    </ApiProviderContext.Provider>
  );
};

export default ApiProvider;
