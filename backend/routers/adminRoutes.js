import express from 'express'
import { getAdmissionData } from '../controllers/adminContoller.js'

const router = express.Router()

router.get('/admissions', getAdmissionData)

export default router