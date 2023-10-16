import { Router } from "express";
import {reciveMessage, verifyToken } from '../controllers/message'

const router=Router();

router.get('/',verifyToken);
router.post('/',reciveMessage); 


export default router;