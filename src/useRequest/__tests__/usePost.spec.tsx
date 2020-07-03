import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import ApiProvider from '../../ApiProvider/Components/ApiProvider.Component';

import useRequestFactory from '../useRequestFactory';
import HttpVerbs from '../models/HttpVerbs.enum';
import services from '../mock';

const wrapper = ({ children }) => <ApiProvider configuration={{ baseUrl: 'baseUrl', services }}>{children}</ApiProvider>;

describe('useGet', () => {
  const usePost = useRequestFactory(HttpVerbs.post);

  it('Should be a success Call', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => usePost('UserRegistration'),
      { wrapper },
    );

    const post = result.current[1];

    act(() => {
      post({
        body: {
          email: 'eve.holt@reqres.in',
          password: 'pistol',
        },
      });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(200);
  });

  it('Should be a fail Call', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => usePost('UserRegistration'),
      { wrapper },
    );

    const post = result.current[1];

    act(() => {
      post({
        body: {
          email: 'sydney@fife',
        },
      });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].error.response.status).toBe(400);
  });
});
