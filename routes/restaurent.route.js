import express from 'express';
import { addRestaurent, deleteRestaurent, getRestaurents, updateRestaurent } from '../controllers/restaurent.controller.js';

const restaurentRouter = express.Router();

restaurentRouter.post('/add-restaurent',addRestaurent);
restaurentRouter.get('/get-restaurents',getRestaurents);
restaurentRouter.patch('/update-restaurent/:id',updateRestaurent);
restaurentRouter.delete('/delete-restaurent/:id',deleteRestaurent);

export default restaurentRouter;