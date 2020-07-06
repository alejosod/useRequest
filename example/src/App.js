import React from 'react'

import { ApiProvider } from 'test'
import Text from "./Tex";

const configuration = {
  baseUrl: 'baseUrl',
  services: [
    {
      serviceName: 'User',
      route: 'https://reqres.in/api/users/:userId',
    },
  ]
}

const App = () => {
  return (
    <ApiProvider configuration={configuration}>
      <Text />
    </ApiProvider>
  )
}
export default App
