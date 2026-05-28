import express from 'express'
import { getAdmissionData, getContactData, getNewsData, getEventData, getTimetableData, getFacultyData, getAchievementData, getAdmissionDataById, getContactDataById, getNewsDataById, getEventDataById, getTimetableDataById, getFacultyDataById, getAchievementDataById } from '../controllers/adminGetController.js'
import { addNews, addEvent, addTimetable, addFaculty, addAchievement } from '../controllers/adminAddController.js'
import { removeNews, removeEvent, removeTimetable, removeFaculty, removeAchievement } from '../controllers/adminDeleteController.js'
import { updateNews, updateEvent, updateTimetable, updateFaculty, updateAchievement } from '../controllers/adminUpdateController.js'
import { sendEmail } from '../controllers/sendEmail.js'
import { verifyToken } from '../middlewares/adminAuthMiddleware.js'

const router = express.Router()

router.get('/admissions', getAdmissionData)
router.get('/admission/:id', getAdmissionDataById)
router.get('/contacts', getContactData)
router.get('/contact/:id', getContactDataById)
router.get('/news', getNewsData)
router.get('/news/:id', getNewsDataById)
router.get('/events', getEventData)
router.get('/event/:id', getEventDataById)
router.get('/timetables', getTimetableData)
router.get('/timetable/:id', getTimetableDataById)
router.get('/faculties', getFacultyData)
router.get('/faculty/:id', getFacultyDataById)
router.get('/achievements', getAchievementData)
router.get('/achievement/:id', getAchievementDataById)

router.post('/news/add', verifyToken, addNews)
router.post('/event/add', verifyToken, addEvent)
router.post('/timetable/add', verifyToken, addTimetable)
router.post('/faculty/add', verifyToken, addFaculty)
router.post('/achievement/add', verifyToken, addAchievement)
router.post('/sendemail', verifyToken, sendEmail)

router.delete('/news/:id', verifyToken, removeNews)
router.delete('/event/:id', verifyToken, removeEvent)
router.delete('/timetable/:id', verifyToken, removeTimetable)
router.delete('/faculty/:id', verifyToken, removeFaculty)
router.delete('/achievement/:id', verifyToken, removeAchievement)

router.put('/news/:id', verifyToken, updateNews)
router.put('/event/:id', verifyToken, updateEvent)
router.put('/timetable/:id', verifyToken, updateTimetable)
router.put('/faculty/:id', verifyToken, updateFaculty)
router.put('/achievement/:id', verifyToken, updateAchievement)

export default router