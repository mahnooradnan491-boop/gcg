import Admission from "../models/admission.js"
import Contact from "../models/contact.js"
import News from "../models/news.js"
import Event from "../models/events.js"
import Faculty from "../models/faculty.js"
import Timetable from "../models/timetable.js"
import Achievement from "../models/achievement.js"

export const getAdmissionData = async (req, res) => {
    try {
        const admissions = await Admission.find().populate('userid', 'fullname email').exec()
        return res.status(200).json(admissions)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getContactData = async (req, res) => {
    try {
        const contacts = await Contact.find()
        return res.status(200).json(contacts)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getNewsData = async (req, res) => {
    try {
        const news = await News.find()
        return res.status(200).json(news)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getEventData = async (req, res) => {
    try {
        const events = await Event.find()
        return res.status(200).json(events)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTimetableData = async (req, res) => {
    try {
        const timetables = await Timetable.find()
        return res.status(200).json(timetables)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getFacultyData = async (req, res) => {
    try {
        const faculties = await Faculty.find()
        return res.status(200).json(faculties)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAchievementData = async (req, res) => {
    try {
        const achievements = await Achievement.find()
        return res.status(200).json(achievements)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}