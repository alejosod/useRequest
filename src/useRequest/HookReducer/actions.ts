import { HookActionType } from '../models';
import * as actions from './constants';

/**
 * Action to set a loading state
 * @return { HookActionType } - Action
 */
export function setLoading(): HookActionType {
  return {
    type: actions.SET_LOADING,
    payload: undefined,
  };
}

/**
 * Action to set a error state
 * @return { HookActionType } - Action
 */
export function setError(error: object): HookActionType {
  return {
    type: actions.SET_ERROR,
    payload: error,
  };
}

/**
 * Action to set a success state
 * @return { HookActionType } - Action
 */
export function setSuccess(data: object): HookActionType {
  return {
    type: actions.SET_SUCCESS,
    payload: data,
  };
}
