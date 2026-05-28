import express from 'express'
import { addAdmission, getAdmission, updateAdmission, addContact } from '../controllers/userController.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import upload from '../middlewares/fileupload.js'

const router = express.Router()

router.post('/admission', verifyToken, upload.fields([
    { name: 'matricSheet', maxCount: 1 },
    { name: 'interSheet', maxCount: 1 }
]), addAdmission)

router.get('/admission', verifyToken, getAdmission)

router.put('/admission', verifyToken, upload.fields([
    { name: 'matricSheet', maxCount: 1 },
    { name: 'interSheet', maxCount: 1 }
]), updateAdmission)

router.post('/contact', addContact)

export default router