import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import { createToken } from "../library/tokens.js"

export const register = async (req,res) =>{
    const {username,email,password} = req.body
    
    try {
        const findDuplicate = await User.findOne({email:email})

        if (findDuplicate) return res.json({"errorsAlertTexts":['El email ya esta en uso']})

        const passHash = await bcrypt.hash(password,10)

        const newUser = new User({
            username,
            email,
            password: passHash
        })
        

        const userSaved = await newUser.save()
        const token = await createToken({id:userSaved.id})
        console.log(token)
        res.cookie('token',token)
        res.json({userSaved})



        
    } catch (error) {
        if (error) res.json({message:error.message})
    }


}


export const login = async (req,res) =>{
    const {email,password} = req.body

    try{
        const userFound = await User.findOne({email:email})
        if(!userFound) return res.json({message:"User not found"})

                                                        //contraseña gaurdada en la DB
        const isMatch = await bcrypt.compare(password,userFound.password)
        if (!isMatch) return res.json({message:"Invalid password"})

        const loginToken = await createToken({id:userFound._id})
        console.log(loginToken)
        res.cookie('token',loginToken,{sameSite:'None',secure:true})
        res.json({username:userFound.username})
        
    }
    catch(err){
        console.log(err)
    }
}


export const logout = (req,res) =>{
    res.clearCookie('token')
    res.sendStatus(200)
}


export const profile = async (req,res)=>{
    const userFound = await User.findById(req.userDecoded.id)

    if(!userFound) return res.send(401).json({message:"User not Found"})
    console.log(req.userDecoded)
    
    return res.json(userFound)
}