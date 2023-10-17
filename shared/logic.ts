import user from "../models/user";

export async function logic(text:string,number:string,nameUser:string){

        

        let textUser:string=text.toLowerCase();


        console.log("this is the message:"+text);
     

        if(await user.findByPk(number))
        {     



        }




}