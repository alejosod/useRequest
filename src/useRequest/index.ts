import useRequestFactory from './useRequestFactory';
import HttpVerbs from './models/HttpVerbs.enum';

export const useGet = useRequestFactory(HttpVerbs.get);
export const useDelete = useRequestFactory(HttpVerbs.delete);
export const usePost = useRequestFactory(HttpVerbs.post);
export const usePut = useRequestFactory(HttpVerbs.put);
export const usePatch = useRequestFactory(HttpVerbs.patch);
