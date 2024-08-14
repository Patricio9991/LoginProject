import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import { connectDB } from './db.js'




const server = express()

server.use(cors({origin:'https://login-project-six-zeta.vercel.app/',credentials:true}))
server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser())

server.use("/api",authRoutes)
server.use("/api",taskRoutes)


connectDB()