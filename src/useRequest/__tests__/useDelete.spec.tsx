import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import ApiProvider from '../../ApiProvider/Components/ApiProvider.Component';

import useRequestFactory from '../useRequestFactory';
import HttpVerbs from '../models/HttpVerbs.enum';
import services from '../mock';

const wrapper = ({ children }) => <ApiProvider configuration={{ baseUrl: 'baseUrl', services }}>{children}</ApiProvider>;

describe('useDelete', () => {
  const useDelete = useRequestFactory(HttpVerbs.delete);

  it('Should be loading after a fetch call', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('noParamsService'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ });
    });

    waitForNextUpdate();

    expect(result.current[0].loading).toBe(true);
  });

  it('Should not be loading after request is completed', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('noParamsService'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].loading).toBe(false);
  });

  it('Should be a success call without params, if the route do not ask for them', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('noParamsService'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(typeof result.current[0].data).toBe('object');
  });

  it('Should be a success call with query replaced', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('queryService'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ query: { limit: 100, offset: 200 } });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(200);
  });

  it('Should be a success call with params replaced', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('paramsService'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ routeParams: { pokemonName: 'ditto' } });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(200);
  });

  it('Should be a success call with params and query replaced', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDelete('queryParamsService'), { wrapper });

    const deleteCall = result.current[1];

    act(() => {
      deleteCall({ routeParams: { version: 'v2' }, query: { limit: 100, offset: 200 } });
    });

    waitForNextUpdate();
    await waitForNextUpdate();

    expect(result.current[0].data.status).toBe(200);
  });
});
