import express from 'express'
import { matchRoutes } from 'react-router-config'

import render from './render'
import createStore from '../helpers/createStore'
import routes from '../routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    const context = {}
    const content = render(req, store, context)

    if (context.notFound) {
      res.status(404)
    }
    
    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})