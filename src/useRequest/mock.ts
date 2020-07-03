const services = [
  {
    serviceName: 'noParamsService',
    route: 'https://pokeapi.co/api/v2/pokemon/ditto',
  },
  {
    serviceName: 'paramsService',
    route: 'https://pokeapi.co/api/v2/pokemon/:pokemonName',
  },
  {
    serviceName: 'queryService',
    route: 'https://pokeapi.co/api/v2/pokemon',
  },
  {
    serviceName: 'queryParamsService',
    route: 'https://pokeapi.co/api/:version/pokemon',
  },
];

export default services;
