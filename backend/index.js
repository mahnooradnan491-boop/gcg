import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import User from './models/user.js'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

server.use(helmet())
server.use(cors(corsOptions))
server.use(express.json())
server.use(cookieParser())

server.post('/api/register', async (req, res) => {
    const { fullname, email, password } = req.body
    try {
        const user = new User({ fullname, email, password })
        await user.save()
        res.json({ message: 'User Registered Successfully' })
    } catch (error) {
        res.json({ message: 'Error', error })
    }
})

server.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.json({ message: 'User Not Found' })
    const compare = await bcrypt.compare(password, user.password)
    if (!compare) return res.json({ message: 'Invalid Credentials' })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({ message: 'Login Successful', token })
})

server.listen(port, () => {
    console.log(`Server is running at ${port}`)
});