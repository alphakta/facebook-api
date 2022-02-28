import { Router } from 'express';
import * as AuthenticationController from '../../controllers/authentication.controller';

const api = Router();

api.post('/login', AuthenticationController.loginUser);
api.post('/register', AuthenticationController.registerUser);

export default api;
