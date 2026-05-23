import express from 'express'
import { getAdmissionData, getContactData, getNewsData, getEventData, getTimetableData, getFacultyData, getAchievementData } from '../controllers/adminGetController.js'
import { addNews, addEvent, addTimetable, addFaculty, addAchievement } from '../controllers/adminAddController.js'
import { removeNews, removeEvent, removeTimetable, removeFaculty, removeAchievement } from '../controllers/adminDeleteController.js'
import { updateNews, updateEvent, updateTimetable, updateFaculty, updateAchievement } from '../controllers/adminUpdateController.js'
import { verifyToken } from '../middlewares/adminAuthMiddleware.js'

const router = express.Router()

router.get('/admissions', getAdmissionData)
router.get('/contacts', getContactData)
router.get('/news', getNewsData)
router.get('/events', getEventData)
router.get('/timetables', getTimetableData)
router.get('/faculties', getFacultyData)
router.get('/achievements', getAchievementData)

router.post('/news/add', verifyToken, addNews)
router.post('/event/add', verifyToken, addEvent)
router.post('/timetable/add', verifyToken, addTimetable)
router.post('/faculty/add', verifyToken, addFaculty)
router.post('/achievement/add', verifyToken, addAchievement)

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