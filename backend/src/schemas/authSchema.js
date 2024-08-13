import {z} from 'zod'

export const registerSchema = z.object({
    username:z.string({
        required_error:"username is required"
    }).min(3),
    email: z.string({
        required_error:"email is required",
    }).email({
        message:"Invalid email"
    }),
    password:z.string({
        required_error:"password is required"
    }).min(3,{message:"Debe tener 3 caracteres como minimo"})
})

export const loginSchema = z.object({
    email: z.string({
        required_error:"email is required"
    }).email({
        message:"Invalid email"
    }),
    password:z.string({
        required_error:"password is required"
    }).min(3,{message:"Debe tener 3 caracteres como minimo"})
})