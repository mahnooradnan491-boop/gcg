import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routers/authRoutes.js'
import adminRoutes from './routers/adminRoutes.js'
import userRoutes from './routers/userRoutes.js'
import checkAdmin from './middlewares/checkadmin.js'
import checkStats from './middlewares/checkstats.js'
import successStoryRoutes from './routers/successStoryRoutes.js'
import facultyRoutes from './routers/facultyRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI).then(async () => {
    await checkAdmin()
    await checkStats()
})

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

server.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}))
server.use(cors(corsOptions))
server.use(express.json())
server.use(cookieParser())

server.use('/uploads', express.static(path.join(__dirname, 'uploads')))

server.use('/api', authRoutes)
server.use('/api', adminRoutes)
server.use('/api', userRoutes)
server.use('/api', successStoryRoutes)
server.use('/api', facultyRoutes)



server.listen(port, () => {
    console.log(`Server is running at ${port}`)
})