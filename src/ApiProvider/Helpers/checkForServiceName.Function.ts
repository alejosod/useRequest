export default (serviceMap) => (serviceName) => {
  if (!serviceMap.has(serviceName)) throw new Error('Service is not configure');
};
