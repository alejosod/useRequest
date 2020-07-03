import { HttpVerbs } from '../models';
import useRequestFactory from '../useRequestFactory';

describe('useRequestFactory', () => {
  test('It should return instance of useRequest with GET verb', () => {
    const useRequest = useRequestFactory(HttpVerbs.get);

    expect(useRequest).toBeInstanceOf(Function);
  });

  test('It should return instance of useRequest with POST verb', () => {
    const useRequest = useRequestFactory(HttpVerbs.post);

    expect(useRequest).toBeInstanceOf(Function);
  });

  test('It should return instance of useRequest with PUT verb', () => {
    const useRequest = useRequestFactory(HttpVerbs.put);

    expect(useRequest).toBeInstanceOf(Function);
  });

  test('It should return instance of useRequest with DELETE verb', () => {
    const useRequest = useRequestFactory(HttpVerbs.delete);

    expect(useRequest).toBeInstanceOf(Function);
  });

  test('It should return instance of useRequest with PATCH verb', () => {
    const useRequest = useRequestFactory(HttpVerbs.patch);

    expect(useRequest).toBeInstanceOf(Function);
  });
});
