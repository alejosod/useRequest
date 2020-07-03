import configureAxiosInstance from '../Helpers/createAxiosInstance.Function';

describe('createAxiosInstance', () => {
  it('Should create an axios instance', () => {
    const axiosInstance = configureAxiosInstance({}, 'post');

    expect(typeof axiosInstance).toBe('function');
  });
});
