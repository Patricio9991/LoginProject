import { Router } from "express";
import { register,login,logout, profile} from "../controllers/auth.controllers.js";
import {validateToken} from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validateSchema.js";
import { registerSchema } from "../schemas/authSchema.js";
const router = Router()



router.get('/profile',validateToken, profile)

router.post('/register',validateSchema(registerSchema),register)
router.post('/login',login)
router.post('/logout',logout)


export default router