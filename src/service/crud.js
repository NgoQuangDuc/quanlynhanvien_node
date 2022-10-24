import db from '../db/models/index'
import JWTservice from '../config/JWTservice'
const login=async(home)=>{
 let a= await db.User.findAll({
    attributes: ['username', 'email','password','group_id'],
    where: {
      username:home.login.username
    },raw: true
  });
console.log(a)

  try{
    if(a[0]&&a[0].username){

   
      if(a[0].password===home.login.password){
   
        let cac= await JWTservice.getGroupWithRole(a[0])
        let pushses=cac.map((c)=>{
          return c.Roles
        })
        console.log(pushses)
        return {
  data:pushses
        }
      }
      else{
        return {
          login:'User or Pass not true'
        }
      }
    }
  }
  
  catch(e){
    return{ 
      login:'User or Pass not true'
    }
  }


}
const show =async(home)=>{
 let d= await db.User.findAll({
    attributes: ['id',	'username',	'address',	'phone',	'sex'],raw: true
  });
return{
data: d
}
    }
    const create=async(list)=>{
      const jane =await db.User.create(list);
  return{
    word:'Successed'
  }

    }
    
    const updatesss=async(obj)=>{
      await db.User.update(
       obj,
        { where: { id: obj.id } }
      )
  }

 
    
  
    const deletes=async(id)=>{
    let a=await db.User.destroy({
        where: {
           id:id
        }
    })
    }
    const resgister=async(list)=>{
      const jane =await db.User.create(list);
      return{
        word:'Successed'
      }
    }
    const role=async()=>{
      let d=await db.Group.findAll({
        // include: [{
        //     model: db.Role,through:{
        //       attributes: []}
        // }],
        raw: true,nest:true
    })
    return{
      data:d
    }
  }
   const fetchGroup=async()=>{
    let d=await db.Role.findAll({
      attributes: ['id', 'url','description'],raw: true
  })
  return{
    data:d
  }
   }
 const  handRoles=async(home)=>{
  let d=await db.Group.findAll({
    where:home,
    include: [{
        model: db.Role
    }],raw: true,nest:true
})
return{
  data:d
}
 }
 const saveAll=async(many)=>{
await db.Role.bulkCreate(many)
return{
  data:'successd'
}
 }
 const pagtion=async(home)=>{
  console.log('1')
  let data=await show()

 let pagecout=Math.ceil(+data.data.length/+home.limit)
let offset = (home.currentPage - 1) * home.limit 
  let d=await db.User.findAndCountAll({
    attributes: ['id',	'username',	'address',	'phone',	'sex'],
    limit: +home.limit,
    offset: +offset,raw: true
})


return{
  cout:pagecout,
  data:d}
}
const deleteMany=async(idd)=>{
  console.log(idd)
await db.Group_role.destroy({ where: { group_id:idd[0].group_id}})
}
const options=async(users)=>{
await deleteMany(users)
await db.Group_role.bulkCreate(
users
    )
    return{
      data:'Successd'
    }
}
module.exports ={options,saveAll,handRoles,show,create, updatesss,deletes,login,resgister,role,fetchGroup,pagtion}