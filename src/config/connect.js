const { Sequelize } = require('sequelize');
var jwt = require('jsonwebtoken');
import crud from '../service/crud'

require('dotenv').config();
const conect=()=>{
    const sequelize = new Sequelize('database_development', "root", null, {
        host: 'localhost',
        dialect:  'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
      });
      try{
        console.log("pass")
      }
      catch(e){
        console.log("loi")
      }
}

const ma_hoa=(obj)=>{
  let token=null;
  let key=process.env.JWT_SEC
  try{
    token = jwt.sign(obj, key);
  
  }
  catch(e){
    console.log(e)
  }
  return token

}
const giai_ma=(token)=>{
  let decoded=null;
  let key=process.env.JWT_SEC
try{
  decoded = jwt.verify(token, key);
}
catch(e){
  console.log(e)
}
 
return decoded
}
// function authChecker(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   if (req.cookies.JWT|| req.path==='/') {
//       next();
//   } else {
//     return res.status(403).json({
//       EM:1
//     })
//   }
// }
// const links=['/','/home','/pagtion']
// var link=['/','/resgister']
// const checkUser=(req, res,next)=>{
 
//   // console.log(req.path)
//   // next()
//     let cookiess = req.cookies
// if(links.includes(req.path)){ return next();}
// if(cookiess&&cookiess.JWT){
//   let token = cookiess.JWT;
//   let decoded=giai_ma(token)
// req.user = decoded
// return next();
//   }
//   else {
// return res.status(401).json({
//   EM:'Not User'
// })
//   }

//   }

  



module.exports ={conect,ma_hoa,giai_ma}
