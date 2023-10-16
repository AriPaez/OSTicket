import express,{Application} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import useRoutes from '../routes/message';

class Server
{

    private app:Application;
    private port:string;

    private apiPaths={
        ticket:'/ticket'
    }

    constructor(){

        this.app=express();
        this.port=process.env.PORT || "3000";
        this.routes();
        this. middleware();
        this.app.use(express.static('public'));
    }


    middleware(){
        
        this.app.use(cors());
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.apiPaths.ticket,useRoutes);
    }


    listen()
    {
        this.app.listen(this.port,()=>{
            console.log("The server run in the port "+this.port);
        });
    }


}

export default Server;