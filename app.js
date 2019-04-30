const express=require('express');
const Joi=require('joi');
const app=express();
require('./Mongoose/connect')();
require('./startup/dev')(app);
require('./startup/index')(app);

app.listen(process.env.PORT|8080,(ab)=>{ console.log('Server Running on Port '+ab);})