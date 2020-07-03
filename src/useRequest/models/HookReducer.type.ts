export interface HookReducerType {
  loading: boolean;
  success: boolean;
  error: undefined | Record<undefined, object>;
  data: undefined | Record<undefined, object>;
}
