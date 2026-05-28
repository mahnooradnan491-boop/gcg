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

export const getAdmissionDataById = async (req, res) => {
    const { id } = req.params
    try {
        const admission = await Admission.findById(id).populate('userid', 'fullname email').exec()
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' })
        }
        return res.status(200).json(admission)
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

export const getContactDataById = async (req, res) => {
    const { id } = req.params
    try {
        const contact = await Contact.findById(id)
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' })
        }
        return res.status(200).json(contact)
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

export const getNewsDataById = async (req, res) => {
    const { id } = req.params
    try {
        const news = await News.findById(id)
        if (!news) {
            return res.status(404).json({ message: 'News not found' })
        }
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

export const getEventDataById = async (req, res) => {
    const { id } = req.params
    try {
        const event = await Event.findById(id)
        if (!event) {
            return res.status(404).json({ message: 'Event not found' })
        }
        return res.status(200).json(event)
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

export const getTimetableDataById = async (req, res) => {
    const { id } = req.params
    try {
        const timetable = await Timetable.findById(id)
        if (!timetable) {
            return res.status(404).json({ message: 'Timetable not found' })
        }
        return res.status(200).json(timetable)
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

export const getFacultyDataById = async (req, res) => {
    const { id } = req.params
    try {
        const faculty = await Faculty.findById(id)
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty not found' })
        }
        return res.status(200).json(faculty)
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

export const getAchievementDataById = async (req, res) => {
    const { id } = req.params
    try {
        const achievement = await Achievement.findById(id)
        if (!achievement) {
            return res.status(404).json({ message: 'Achievement not found' })
        }
        return res.status(200).json(achievement)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}