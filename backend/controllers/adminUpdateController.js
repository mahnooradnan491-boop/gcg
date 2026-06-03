import News from "../models/news.js"
import Event from "../models/events.js"
import Faculty from "../models/faculty.js"
import Timetable from "../models/timetable.js"
import Achievement from "../models/achievement.js"

export const updateNews = async (req, res) => {
    const { id } = req.params
    const { postedBy, date, category, title, description } = req.body
    try {
        const news = await News.findByIdAndUpdate(id, { postedBy, date, category, title, description })
        return res.status(200).json({ message: 'News Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params
    const { eventTitle, eventDescription, eventDate, eventVenue, organizer } = req.body
    const eventImage = req.file?.eventImage?.path
    try {
        const event = await Event.findByIdAndUpdate(id, { eventTitle, eventDescription, eventDate, eventVenue, eventImage, organizer })
        return res.status(200).json({ message: 'Event Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTimetable = async (req, res) => {
    const { id } = req.params
    const { className, date } = req.body
    const timetableImage = req.file?.timetableImage?.path
    try {
        const timetable = await Timetable.findByIdAndUpdate(id, { className, date, timetableImage })
        return res.status(200).json({ message: 'Timetable Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateFaculty = async (req, res) => {
    const { id } = req.params
    const { fullName, department, designation } = req.body
    const image = req.file?.image?.path
    try {
        const faculty = await Faculty.findByIdAndUpdate(id, { fullName, department, designation, image })
        return res.status(200).json({ message: 'Faculty Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateAchievement = async (req, res) => {
    const { id } = req.params
    const { title, description, date, category } = req.body
    const image = req.file?.image?.path
    try {
        const achievement = await Achievement.findByIdAndUpdate(id, { title, description, image, date, category })
        return res.status(200).json({ message: 'Achievement Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}