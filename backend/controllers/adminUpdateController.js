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
    const { } = req.body
    try {
        const event = await Event.findByIdAndUpdate(id, {})
        return res.status(200).json({ message: 'Event Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTimetable = async (req, res) => {
    const { id } = req.params
    const { } = req.body
    try {
        const timetable = await Timetable.findByIdAndUpdate(id, {})
        return res.status(200).json({ message: 'Timetable Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateFaculty = async (req, res) => {
    const { id } = req.params
    const { } = req.body
    try {
        const faculty = await Faculty.findByIdAndUpdate(id, {})
        return res.status(200).json({ message: 'Faculty Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateAchievement = async (req, res) => {
    const { id } = req.params
    const { } = req.body
    try {
        const achievement = await Achievement.findByIdAndUpdate(id, {})
        return res.status(200).json({ message: 'Achievement Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}