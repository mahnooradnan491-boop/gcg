import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { fullname, email, password } = req.body
    try {
        const user = new User({ fullname, email, password })
        await user.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        return res.status(201).cookie('access_token', token, { maxAge: 3600000, httpOnly: true }).json({ message: 'User Registered Successfully', token })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User Not Found' })
    const compare = await bcrypt.compare(password, user.password)
    if (!compare) return res.status(400).json({ message: 'Invalid Credentials' })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    return res.status(200).cookie('access_token', token, { maxAge: 3600000, httpOnly: true }).json({ message: 'Login Successful', token })
}

export const logout = (req, res) => {
    return res.clearCookie('access_token')
}