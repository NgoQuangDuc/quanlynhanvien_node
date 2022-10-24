import express from 'express';
import homeController from '../controller/homeController'
const router = express.Router()
import{giai_ma} from '../config/connect'

const testMiddlewares =(req,res,next) =>{
        if (req.cookies.JWT) {
          let token = req.cookies.JWT
             let decoded=giai_ma(token)
        
         
         req.user = decoded.data
          return next(); }
        else{  return res.status(403).json({
            EM:1
          })}
    //   if(true){
    //      return res.send('haha')
    //   }
      // console.log(req.path) 
      // next()
      
        }
        const permistions=(req, res,next)=>{
          if(req.user){
            let currents=req.path
      let data=req.user
            const check=data.some(c=>c.url===currents)
  if(check){
    return next();
  }
  else{
    return res.status(401).json({
     EM:1
   })}
           
          }
          else{
             return res.status(401).json({
              EM:1
            })}
          }
        
    


const routes=(app)=>{
  // router.all('*',testMiddlewares)
    router.post('/',homeController.login)
    router.get(`/home`,homeController.show)
    router.post('/create',testMiddlewares,permistions,homeController.create)
    router.post('/update',testMiddlewares,permistions,homeController.update)
    router.post('/deletes',testMiddlewares,permistions,homeController.deletes)
    router.post('/resgister',testMiddlewares,permistions,homeController.resgister)
    router.get('/role',testMiddlewares,permistions,homeController.role)
    router.get('/fetchgroup',testMiddlewares,permistions,homeController.fetchGroup)
    router.post('/handroles',testMiddlewares,permistions,homeController.handRoles)    
    router.post('/saveall',testMiddlewares,permistions,homeController.saveAll)
    router.get(`/pagtion`,homeController.pagtion)
    router.post('/options',testMiddlewares,permistions,homeController.options)
    
    
       return app.use('/',router)
}

module.exports = routes
