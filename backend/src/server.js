import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'


const server = express()

server.use(cors({origin:'http://localhost:5173',credentials:true}))
server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser())

server.use("/api",authRoutes)
server.use("/api",taskRoutes)


export default server