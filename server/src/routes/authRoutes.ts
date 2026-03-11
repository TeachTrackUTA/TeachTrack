//Noe chairez 3/11/2026

import { Router } from 'express';
import { login, register } from '../controllers/authController';


const router = Router();   //creates a 'mini Express app' just for auth. routes

//POST/api/auth/register = creates a new user when someone submits registration form
router.post('/register', register); //register = the function in authController that handles this 

//Post /api/auth/login - when someone submits the login form
router.post('/login', login);   //login = function in authController that handles this 

export default router; //exports so index.ts can use 







