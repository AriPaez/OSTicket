import { Request, Response } from "express";
import dotenv from 'dotenv'; 
import { logic } from "../models/logic";
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
            res.status(200).json({
                msg: `Todo ok!`
            });
        }
        else
        {
            res.status(400).send();
            res.status(400).json({
                msg: `Todo mal!`
            });
        }
    } 
    catch (error) {
        res.status(400).send();
    }
         
}

export const reciveMessage=(req:Request,res:Response)=>{
    
    const ALLOW_ID_OSTICKET=process.env.OSTICKET__PHONE_ID;

    try 
    {
         
     const body=req.body;
        res.json({
            body
        });
         

    }
    catch (error) 
    {
    
        res.status(400).json({
            msg:"no ok"
        });

    }

}
