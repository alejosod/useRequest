import { HookReducerType } from '../models';

/*
*
* This helpers function reduce code from main file
* they return the different states as they should return to
* prevent bugs, and to be called where they are need.
*
*/

/**
 * Return a success state
 * @param data { any } - data return from the request
 * @return { HookReducerType } - success state with data from request
 */
export function createSuccessState(data: object): HookReducerType {
  return {
    success: true,
    error: false,
    loading: false,
    data,
  };
}

/**
 * Returns an error state
 * @param error { any } - error return from the request
 * @return { HookReducerType } - error state with error request
 */
export function createErrorState(error: object): HookReducerType {
  return {
    success: false,
    error,
    loading: false,
    data: undefined,
  };
}

/**
 * Returns a loading state
 * @return { HookReducerType } - loading state
 */
export function createLoadingState(): HookReducerType {
  return {
    success: false,
    loading: true,
    error: undefined,
    data: undefined,
  };
}
