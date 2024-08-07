const User = require("../Models/user");



async function handleAllUserDB(req,res) {
    const allDbUsers = await User.find({})
    return res.status(200).json(allDbUsers)
}

async function handleGetSingleUser(req,res) {
     const singleUser = await User.findById(req.params.id);
     if(!singleUser) return res.status(404).json({msg:"user is not found"});
     return res.status(200).json(singleUser);

}

async function handleUpdateSingleUser(req,res) {
    console.log(req.body)
    const updateUser = await User.findByIdAndUpdate(req.params.id , {...req.body});
    if(!updateUser) return res.status(404).json({msg:"user is not found"})
    return res.status(200).json({success:"updated user"})
}



async function handleDeleteSingleUser(req,res) {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({success:"deleted user"})
}


async function handleCreateUser(req,res) {
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) return res.status(404).json({msg:"invalid details"});
    
    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        gender : body.gender,
        job_title : body.job_title,
        email : body.email
    })
    return res.status(201).json({msg:"success"})
}




module.exports = {
    handleAllUserDB,
    handleGetSingleUser,
    handleUpdateSingleUser,
    handleDeleteSingleUser,
    handleCreateUser
}