import { useReducer, useContext } from 'react';
import { ApiProviderContext } from '../ApiProvider';

import reducer, {
  initialHookState, setLoading, setSuccess, setError,
} from './HookReducer';
import {
  HookReducerType, HttpVerbs, RequestParamsType,
} from './models';

/**
 * This factory select an http verb and inject it to select that
 * specific verb in the API injected
 * @param verb { string } - the name of the verb for the axios instance
 * @returns requestHook { Function } - custom hook
 */

export default (verb: HttpVerbs): Function =>
/**
     * This custom hook manage the state of the request.
     *
     * The state of the request is HookReducerType(check models)
     * A loading flag indicates if the request is in pending state,
     * it goes to false when the request is completed or fails.
     * An error key that is undefined or the actual server error response.
     * A success flag that indicates if the request is successful.
     * A data key that contain the actual server response if the request is successful.
     *
     * @param config { object } - Axios configuration object that
     *        will override default config for this hook instance.
     * @returns { Array } - container an instance of HookReducerType and the request trigger
     * @throws Error - if an action for the reducer if action is not specified
     */

// eslint-disable-next-line implicit-arrow-linebreak
  (serviceName: string, config?: object): [HookReducerType, Function] => {
    const {
      checkForServiceName, attachAxiosConfig, createRouteAssemble,
    } = useContext(ApiProviderContext);

    // This will throw an error at runTime
    checkForServiceName(serviceName);
    const createRoute = createRouteAssemble(serviceName);
    const axiosInstance = attachAxiosConfig(config, verb);

    const [hookState, dispatch] = useReducer(reducer, initialHookState);

    const request = async (requestParams: RequestParamsType): Promise<void> => {
      const { query, params, body } = requestParams;

      const url = createRoute(params, query);

      dispatch(setLoading());
      try {
        const response = await axiosInstance.request({ url, data: body });
        if (response) dispatch(setSuccess(response));
      } catch (e) {
        dispatch(setError(e));
      }
    };

    return [hookState, request];
  };
