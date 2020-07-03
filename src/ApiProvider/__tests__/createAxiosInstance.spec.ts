import configureAxiosInstance from '../Helpers/createAxiosInstance.Function';

describe('createAxiosInstance', () => {
  it('Should create an axios instance if a body is provided', () => {
    const createAxiosInstance = configureAxiosInstance({}, 'post');
    const axiosInstance = createAxiosInstance({});

    expect(typeof axiosInstance).toBe('function');
  });

  it('Should create an axios instance if a body is not provided', () => {
    const createAxiosInstance = configureAxiosInstance({}, 'post');
    const axiosInstance = createAxiosInstance();

    expect(typeof axiosInstance).toBe('function');
  });
});
