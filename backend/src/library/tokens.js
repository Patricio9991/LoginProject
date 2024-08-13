import {TOKEN_SECRET} from '../config.js'
import jwt from 'jsonwebtoken'


export function createToken(dataUser){

    return new Promise((resolve,reject)=>{

        jwt.sign(dataUser,TOKEN_SECRET,
        {
            expiresIn: '1d'
        },
            (err,token)=>{
                if(err) reject(err)
                resolve (token)
            }
        )
    })


}