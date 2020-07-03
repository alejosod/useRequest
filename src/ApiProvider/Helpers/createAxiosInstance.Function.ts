import axios, { AxiosRequestConfig, Method } from 'axios';

export default (config: AxiosRequestConfig, verb: Method) => axios.create({ ...config, method: verb } || {});
