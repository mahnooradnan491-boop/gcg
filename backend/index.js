import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routers/authRoutes.js'
import adminRoutes from './routers/adminRoutes.js'
import checkAdmin from './middlewares/checkadmin.js'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI).then(async () => {
    await checkAdmin()
})

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

server.use(helmet())
server.use(cors(corsOptions))
server.use(express.json())
server.use(cookieParser())

server.use('/api', authRoutes)
server.use('/api', adminRoutes)

server.listen(port, () => {
    console.log(`Server is running at ${port}`)
});