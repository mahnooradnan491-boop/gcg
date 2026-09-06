import User from '../models/user.js'
import Admin from '../models/admin.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'


export const register = async (req, res) => {
    const { fullname, email, password } = req.body
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.OTP_EMAIL_USER, 
                pass: process.env.OTP_EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.OTP_EMAIL_USER,
            to: email,
            subject: "Verify your Account - GCG",
            text: `Welcome to GCG! Your OTP for registration is: ${otp}`
        });

        const user = new User({ fullname, email, password, otp })
        await user.save()

        return res.status(201).json({ message: 'OTP sent to your email. Please verify.' })
        
    } catch (error) {
        console.error("Registration Error: ", error.message);
        return res.status(500).json({ message: "Failed to send OTP. Please check your email address or server configuration." })
    }
}


export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        
        if (String(user.otp) !== String(otp).trim()) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        user.isVerified = true;
        user.otp = undefined; 
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        const { password: pwd, ...info } = user._doc

        return res.status(200).cookie('access_token', token, { maxAge: 3600000, httpOnly: true }).json({ 
            message: 'Verification & Login Successful', 
            info 
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: 'User Not Found' })
        
        if (!user.isVerified) return res.status(400).json({ message: 'Please verify your email first' })

        const compare = await bcrypt.compare(password, user.password)
        if (!compare) return res.status(400).json({ message: 'Invalid Credentials' })
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        const { password: pwd, ...info } = user._doc
        
        return res.status(200).cookie('access_token', token, { maxAge: 3600000, httpOnly: true }).json({ message: 'Login Successful', info })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    return res.clearCookie('access_token').json({ message: 'logout' })
}


export const adminLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const admin = await Admin.findOne({ email })
        if (!admin) return res.status(404).json({ message: 'Admin Not Found' })
        
        const compare = await bcrypt.compare(password, admin.password)
        if (!compare) return res.status(400).json({ message: 'Invalid Credentials' })
        
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        const { password: pwd, ...info } = admin._doc
        
        return res.status(200).cookie('admin_access_token', token, { maxAge: 3600000, httpOnly: true }).json({ message: 'login', info })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const adminLogout = (req, res) => {
    return res.clearCookie('admin_access_token').json({ message: 'logout' })
}


export const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany({}); 
        return res.status(200).json({ message: "Mubarak ho! Database se saare purane users delete ho gaye hain. Ab naya account banayen!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}