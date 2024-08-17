import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import { connectDB } from './db.js'




const server = express()


const corsOptions = {
    origin: 'https://login-project-8wnm9j43a-patricio9991s-projects.vercel.app/', // Replace with your frontend domain
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  };

server.use(cors(corsOptions))
server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser())

server.use("/api",authRoutes)
server.use("/api",taskRoutes)


server.listen(4000,()=>{
    console.log("Conectado al puerto 4000")
})
connectDB()