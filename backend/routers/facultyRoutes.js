import express from 'express'
import { addFaculty} from '../controllers/adminAddController.js'
import { getFacultyData } from '../controllers/adminGetController.js'
import upload from '../middlewares/fileupload.js'

const router = express.Router()

router.post('/faculty/add', upload.single('image'), addFaculty)

router.get('/faculty', getFacultyData)

export default router