import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import ApiProvider from '../../ApiProvider/Components/ApiProvider.Component';

import useRequestFactory from '../useRequestFactory';
import HttpVerbs from '../models/HttpVerbs.enum';
import services from '../mock';

const wrapper = ({ children }) => <ApiProvider configuration={{ baseUrl: 'baseUrl', services }}>{children}</ApiProvider>;

describe('useGet', () => {
  const usePut = useRequestFactory(HttpVerbs.put);

  it('Should be a success Call', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => usePut('User'),
      { wrapper },
    );

    const put = result.current[1];

    act(() => {
      put({
        params: {
          userId: 2,
        },
        body: {
          name: 'morpheus',
          job: 'zion resident',
        },
      });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(200);
  });
});
