import express from "express";
var jwt = require('jsonwebtoken');
const configViewEngine=(app)=>{
   app.use(express.static(__dirname + 'src/public'));
    app.set('view engine', 'ejs');
    app.set('views', 'src/view');
}
const giaima=()=>{
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
return token
}
const quetma=()=>{
    var decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NjMzNTE0NjR9.724RAX8hJoVAuhCI490XHzL8siN7te0FwiOvZlwC_4M', 'shhhhh');
  return decoded
}
module.exports ={giaima, configViewEngine,quetma}