import express from 'express'
import { register, login, logout, adminLogin, adminLogout, verifyOTP, deleteAllUsers } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', register)
router.post('/verify-otp', verifyOTP)
router.get('/delete-all', deleteAllUsers) /
router.post('/login', login)
router.get('/logout', logout)
router.post('/admin/login', adminLogin)
router.get('/admin/logout', adminLogout)

export default router