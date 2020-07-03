import React from 'react';

interface ApiProviderContextValue {
  checkForServiceName?: Function;
  attachAxiosConfig?: Function;
  createRouteAssemble?: Function;
}

export default React.createContext<ApiProviderContextValue>({});
