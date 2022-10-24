import db from "../db/models/index";
const getGroupWithRole=async(user)=>{
    let d=await db.Group.findAll({
        where: {id:user.group_id},
        include: {
            model: db.Role,through:{
                attributes: []}
        },raw: true,nest:true,
        
    })
    return d?d:{};
}
module.exports={getGroupWithRole}