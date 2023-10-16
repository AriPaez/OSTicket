import { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();


export const verifyToken=(req:Request,res:Response)=>{

    let accessToken:string="";
    res.json({
        msg:'verifyToken'
    })
    
    try 
    {
        accessToken=process.env.ACCES_TOKEN_FB || "";
        console.log(req.query["hub.verify_token"]);
    } 
    catch (error)
    {
        
    }

}

export  const reciveMessage=(req:Request,res:Response)=>{
    res.json({
        msg:'reciveMessage'
    })

}
 