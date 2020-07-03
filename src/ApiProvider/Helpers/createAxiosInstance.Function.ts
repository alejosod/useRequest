import axios from 'axios';

export default (config: object, verb: string) => (body?: object) => {
  if (!body) return axios.create(config || {});
  return axios.create({
    ...config,
    method: verb,
    data: { ...body },
  });
};
