import { HookReducerType, HookActionType } from '../models';
import * as actions from './constants';
import * as setState from './helpers';

function reducer(state: HookReducerType, action: HookActionType): HookReducerType {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_SUCCESS:
      return setState.createSuccessState(payload);
    case actions.SET_LOADING:
      return setState.createLoadingState();
    case actions.SET_ERROR:
      return setState.createErrorState(payload);
    default:
      throw new Error('On Hook Reducer: No action type specified');
  }
}

export default reducer;
