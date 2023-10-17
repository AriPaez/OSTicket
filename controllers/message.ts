import { Request, Response } from "express";
import dotenv from 'dotenv'; 
import { logic } from "../shared/logic";
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

       
        let entry=(req.body["entry"])[0];
        let changes=(entry["changes"])[0];
        let value=changes["value"];
        let messageObject=value["messages"];
        let messages=messageObject[0];    

        let typeMessage:string=messages["type"];
        


        if(value.metadata.phone_number_id!= ALLOW_ID_OSTICKET)
        {
            if(typeof messageObject != "undefined")
            {
                        

                        let nameUser:string=(value["contacts"][0].profile.name);
                     
                        let number:string=messages["from"].replace('9','');
                        
                        if(typeMessage=="text")
                        {
                            messageText((messages["text"])["body"],number,nameUser);
                        }
                        else if(typeMessage=="interactive")
                        {
                            let interactiveObject=messages["interactive"];
                            let typeInteractive:string=interactiveObject["type"];
                            if(typeInteractive=="button_reply")
                            {
                                
                                messageInteractive((interactiveObject["button_reply"])["id"],number,nameUser);
                            }
                            else
                            {
                                messageList_reply((interactiveObject["list_reply"])["title"],number,nameUser);
                            }


                        }
            }
            else
            {
                    console.log("\n#########################################################################\n");
                    console.log("DROP WABA PACKETS");
                    console.log("\nTHE TEXT OF WABA IS");
                    console.log("\n#########################################################################\n");

            }
        }
        
      
    }
    catch (error) 
    {
    
        res.status(400).json({
            msg:"no ok"
        });

    }

}


const messageText=(messages:string,number:string,nameUser:string)=>
{
     
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
        console.log("ALLOW OSTICKET PACKETS=>");
        console.log("\nTHE TEXT OF WABA_OSTICKET IS: ");
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

        logic(messages,number,nameUser);

}
 
const messageInteractive=(messages:string,number:string,nameUser:string)=>
{
     
   
    /*
    when the id returns with a comma, it has the ticket id and user number to notify closure
    */
    if(messages.includes(","))
    {
        let arr=messages .split(",");
      
        
           // notification.ticketClosed(arr[0],arr[1]);

            return null;
    }

    logic(messages,number,nameUser);
    
}

const messageList_reply=(messages:string,number:string,nameUser:string)=>
{
  

    logic(messages,number,nameUser);
    
}



 