import { Router } from 'express';
import SnackController from './controller/SnackController';

const routes = Router();

routes.get('/snack', SnackController.find);
routes.get('/snack/:id', SnackController.findById);
routes.post('/snack', SnackController.create);
routes.put('/snack/:id', SnackController.change);
routes.delete('/snack/:id', SnackController.delete);

export default routes;
