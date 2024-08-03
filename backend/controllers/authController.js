import db from "../db.js";

export const registerUser = (req,res) =>{
    const {username,email,password} = req.body

    if (!username || !email || !password) {
        return res.status(400).send({message:"username , email and password are required."})
    }

    const sql = "insert into users(`username`,`email`,`password`) values (?,?,?)"

    db.query(sql,[username,email,password],(err,result)=>{
        if(err) res.status(400).send(err)
            console.log("successfully registered",result);
    })
}

export const loginUser = (req,res)=>{
    
}