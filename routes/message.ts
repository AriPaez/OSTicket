import { Router } from "express";
import {reciveMessage, verifyToken } from '../controllers/message'

const router=Router();

router.get('/',reciveMessage);
router.post('/',verifyToken); 


export default router;