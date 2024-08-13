import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const validateToken = (req,res,next)=>{
    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "no token"})

    jwt.verify(token,TOKEN_SECRET,(err,decoded)=>{
        if (err) return res.send(401)

        req.userDecoded = decoded
        //aca añade la informacion del decoded de jwt al req de la misma manera en la que agragaria una key aun objeto que no la tiene
    })
    next()
}