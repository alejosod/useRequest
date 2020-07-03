import axios, { AxiosRequestConfig, Method } from 'axios';

export default (config: AxiosRequestConfig, verb: Method) => (body?: object) => {
  if (!body) return axios.create(config || {});
  return axios.create({
    ...config,
    method: verb,
    data: { ...body },
  });
};
