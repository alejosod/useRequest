import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import ApiProvider from '../../ApiProvider/Components/ApiProvider.Component';

import useRequestFactory from '../useRequestFactory';
import HttpVerbs from '../models/HttpVerbs.enum';
import services from '../mock';

const wrapper = ({ children }) => <ApiProvider configuration={{ baseUrl: 'baseUrl', services }}>{children}</ApiProvider>;

describe('useGet', () => {
  const useGet = useRequestFactory(HttpVerbs.get);

  it('Should be a success Call', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGet('User'), { wrapper });

    const get = result.current[1];

    act(() => {
      get({ routeParams: { userId: 2 } });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(200);
  });

  it('Should be a fail Call', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGet('User'), { wrapper });

    const get = result.current[1];

    act(() => {
      get({ routeParams: { userId: 23 } });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].error.response.status).toBe(404);
  });
});
