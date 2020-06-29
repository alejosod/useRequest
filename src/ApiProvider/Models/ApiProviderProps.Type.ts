import React from 'react';
import ApiProviderConfiguration from './ApiProviderConfiguration.Type';

export default interface ApiProviderPropsType {
  children: React.ReactNode | Array<React.ReactNode>;
  configuration: ApiProviderConfiguration;
}
