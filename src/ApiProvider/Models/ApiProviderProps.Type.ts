import React from 'react';
import ApiProviderConfiguration from './ApiProviderConfiguration.Type';

export interface ApiProviderPropsType {
  children?: React.ReactNode | Array<React.ReactNode>;
  configuration?: ApiProviderConfiguration;
}

export const ApiProviderDefaultProps = {
  children: null,
};
