function addQueryParams(route: string, queryParamsObject?: object) {
  if (typeof route !== 'string') throw new Error('Invalid route Type');
  if (!queryParamsObject) return route;

  const queryParamsArray = Object.entries(queryParamsObject);
  if (queryParamsArray.length <= 0) return route;

  const routeReplaced = queryParamsArray.reduce((accum, [key, value], index) => {
    const regex = index === queryParamsArray.length - 1
      ? new RegExp(`/:${key}`, 'g')
      : new RegExp(`/:${key}/`, 'g');

    return index === queryParamsArray.length - 1
      ? accum.replace(regex, `/${value}`)
      : accum.replace(regex, `/${value}/`);
  }, route);

  const paramsRegex = new RegExp('/:/w');

  if (paramsRegex.test(routeReplaced)) throw new Error('Query params provided do not correspond to those required on route');

  return routeReplaced;
}

export default addQueryParams;
