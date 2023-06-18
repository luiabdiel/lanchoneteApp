import { Router } from 'express';
import SnackController from './controller/SnackController';

const routes = Router();

routes.get('/snacks', SnackController.find)
routes.get('/snack/:id', SnackController.findById)
routes.post('/snack', SnackController.create);

export default routes;
