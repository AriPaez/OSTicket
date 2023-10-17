 import { DataTypes } from "sequelize";

 import db from '../DB/connection';

 const User=db.define('User',{
    phone:{
        type:DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    queryHour:{
        type:DataTypes.DATE,
    },


 });