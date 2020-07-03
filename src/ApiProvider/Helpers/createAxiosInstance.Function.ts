import axios from 'axios'

export default (body, config) => {
  if (!body) return config || {};
  return {
    ...config,
    data: { ...body },
  };
};
