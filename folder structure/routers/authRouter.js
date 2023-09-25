import express from 'express'
import {authController,logInController,demoController} from '../controllers/authController.js';
import { isAdmin, requiredSignIn } from '../middleware/authMiddleWare.js';

const router  = express.Router();


// register
router.post("/register", authController)
//login
router.post("/log-in",logInController)
//demo                  //middlewares
router.get("/demo", requiredSignIn,isAdmin , demoController)



export default router;