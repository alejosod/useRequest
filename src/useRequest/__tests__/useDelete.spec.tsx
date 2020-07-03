import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import ApiProvider from '../../ApiProvider/Components/ApiProvider.Component';

import useRequestFactory from '../useRequestFactory';
import HttpVerbs from '../models/HttpVerbs.enum';
import services from '../mock';

const wrapper = ({ children }) => <ApiProvider configuration={{ baseUrl: 'baseUrl', services }}>{children}</ApiProvider>;

describe('useDelete', () => {
  const useDelete = useRequestFactory(HttpVerbs.delete);

  it('Should be a success Call', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('User'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ routeParams: { userId: 2 } });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(204);
  });
});
