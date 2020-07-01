function addQueries(route: string, query?: object) {
  if (!query || typeof query !== 'object') return route;

  const queryArray = Object.entries(query);

  if (queryArray.length <= 0) return route;

  let queryString = '?';

  queryArray.forEach(([key, value], index) => {
    queryString = queryString.concat(`${key}=${value}${index === queryArray.length - 1 ? '' : '&'}`);
  });

  return route + queryString;
}

export default addQueries;
