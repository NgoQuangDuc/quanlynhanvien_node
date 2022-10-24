import crud from '../service/crud'
import connect from '../config/connect'
const login=async(req, res) => {
    let a=await crud.login(req.body)

//     let dad=crud.handRoles(req.body.username)
let keyss= connect.ma_hoa(a)
console.log(keyss)
res.cookie('JWT',keyss,{  httpOnly: true ,maxAge: 1000*30});
return res.status(200).json({
            data:'Successd'
  
    })
   
   
}
const resgister=async(req,res)=>{
    let a=await crud.resgister(req.body)
    return res.status(200).json({
        data:'Successed'

})
}
const show=async(req,res)=>{
try{
    let d=await crud.show()
    // console.log(req.cookies)
    // return res.render('../src/view/show.ejs',d.data)
    return res.status(200).json({
        data:d.data,
    })
}
catch(err){
    res.status(500).json({message:err.message})
}
}
const pagtion=async(req,res)=>{
 
    try{
        let d=await crud.pagtion(req.query)
        
      
        return res.status(200).json({
      
            da:d
         
        })
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    }
const create=async (req, res)=>{
    console.log(req.body)
   let a= await crud.create(req.body)
   return res.status(200).json({
    success: 1,
    word:a.word
   })

}
const update=async(req, res)=>{
    let a=await crud.updatesss(req.body)
    return res.status(200).json({
        success: "ds"
       })

}
const deletes=async(req, res)=>{
    let a=await crud.deletes(req.body.id)
    return res.status(200).json({success:'success'})
}
const role=async(req, res)=>{
let a=await crud.role()
console.log(a)
return res.status(200).json({
    data:a.data
})
}
const fetchGroup=async(req, res)=>{
let d=await crud.fetchGroup()

return res.status(200).json({
    data:d.data
})
}
const handRoles=async(req, res)=>{
    let d=await crud.handRoles(req.body)
    console.log(d)
    return res.status(200).json({
        data:d.data
    })
}
const saveAll=async(req, res)=>{
let d=await crud.saveAll(req.body)
return res.status(200).json({
    data:d.data
})
}
const options=async(req, res)=>{

   let  d=await crud.options(req.body)
  return res.status(200).json({
   d:d.data
  })
 }
module.exports ={options,handRoles,show,create,update,deletes,login,resgister,role,fetchGroup,saveAll,pagtion}