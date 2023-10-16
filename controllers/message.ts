import { Request, Response } from "express"

export const verifyToken=(req:Request,res:Response)=>{

    res.json({
        msg:'verifyToken'
    })

}

export  const reciveMessage=(req:Request,res:Response)=>{
    res.json({
        msg:'reciveMessage'
    })

}
 