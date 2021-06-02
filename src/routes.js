import { Router } from 'express'

import UserController from './app/controller/UserController'

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({message: 'index!'})
})

routes.get('/users', UserController.index)

//add new user
routes.post('/users', UserController.store)

//update new user
routes.put('/users/:id', UserController.update)

//add new user
routes.delete('/users/:id', UserController.delete)

export default routes;
