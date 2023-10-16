import { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();


export const verifyToken=(req:Request,res:Response)=>{
 
    try 
    {
        
        let accessToken=process.env.ACCES_TOKEN_FB;
       
        let token =req.query["hub.verify_token"];
 
        console.log("Estoy pasando por aqui!");
        let challange =req.query["hub.challenge"];
 
        if(challange!=null && token!=null && token==accessToken)
        {
            res.send(challange);
            
        }
        else
        {
            res.status(400).send();
             
        }
    } 
    catch (error) {
        res.status(400).send();
    }
         
}

export  const reciveMessage=(req:Request,res:Response)=>{
    

}
 