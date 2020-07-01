function addQueries(route, query) {
    var queryArray = Object.entries(query);
    if (queryArray.length <= 0)
        return route;
    var queryString = '?';
    queryArray.forEach(function (_a, index) {
        var key = _a[0], value = _a[1];
        queryString.concat(key + "=" + value + (index === queryArray.length ? '&' : ''));
    });
    return queryString;
}
addQueries('/test/rout', { query1: '1', query2: '2' });
