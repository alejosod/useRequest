import { HookReducerType } from '../models/HookReducer.type';

const initialHookState: HookReducerType = {
  loading: false,
  success: false,
  error: undefined,
  data: undefined,
};

export default initialHookState;
