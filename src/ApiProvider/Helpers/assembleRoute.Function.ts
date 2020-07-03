/* eslint-disable */
import { addQueryParams, addQueries } from '../../UrlAssembler';

/**
 * Factory function that receive a Map of service and return a factory.
 * This should be called from the ApiProvider Component
 * @param serviceMap { Map<string, string> } - Map created from the configuration object.
 * @throws { Error } - if not serviceMap is provided
 * @throws { Error } - if ServiceMap is not intance of a Map
 * @return Factory function to attach the name to the next function.
 */
export default (serviceMap: Map<string, any>): Function => {
  if(!serviceMap) throw new Error('Service Map should be provided')
  if(!(serviceMap instanceof Map)) throw new Error('Service Map should be instance of a Map')

  /**
   * Factory function that receive the name of the service,
   * This should be called from the hook factory.
   * @param serviceName { string } = service name.
   * @return Factory function that return a string with the route.
   *
   */
  return (serviceName: string): Function => {
    if(!serviceName) throw new Error('Service Name should be provided')
    if(typeof serviceName !== 'string') throw new Error('Service Name should be a string')
    if(!serviceMap.has(serviceName)) throw new Error('Service name is not available on Service Map')

    /**
     * Function that returns a route string containing the params and query
     * This should be called when the fetch function is called.
     * @param query { object } - object containing tue query to be inserted in the route.
     * @param params { object } - object containing the params to be inserted in the route.
     * @returns { string } - the final route sring
     */
    return (params: object, query: object, ): string => {

      const {route} = serviceMap.get(serviceName);

      const routeWithParams = addQueryParams(route, params);
      return addQueries(routeWithParams, query);
    };
  }
}
