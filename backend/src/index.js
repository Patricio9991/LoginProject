import server from './server.js'
import { connectDB } from './db.js'
import Cookies from 'js-cookie'

connectDB()
server.listen("3000")

console.log("Server on port",3000)

