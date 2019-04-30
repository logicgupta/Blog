const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');
const login=require('../Routes/login');
const auth=require('../Auth/auth');
const Blog=require('../Routes/insert');
const bodyParser=require('body-parser');
const TutOperation=require('../Routes/tutorial');

module.exports=function(app){

    app.use(express.json());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/login',login);
    app.use('/blog',Blog);
    app.use('/admin',TutOperation);


};