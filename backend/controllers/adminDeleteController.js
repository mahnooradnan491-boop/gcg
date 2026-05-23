import News from "../models/news.js"
import Event from "../models/events.js"
import Faculty from "../models/faculty.js"
import Timetable from "../models/timetable.js"
import Achievement from "../models/achievement.js"

export const removeNews = async (req, res) => {
    const { id } = req.params
    try {
        const news = await News.findByIdAndDelete(id)
        return res.status(200).json({ message: 'News Deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const removeEvent = async (req, res) => {
    const { id } = req.params
    try {
        const event = await Event.findByIdAndDelete(id)
        return res.status(200).json({ message: 'Event Deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const removeTimetable = async (req, res) => {
    const { id } = req.params
    try {
        const timetable = await Timetable.findByIdAndDelete(id)
        return res.status(200).json({ message: 'Timetable Deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const removeFaculty = async (req, res) => {
    const { id } = req.params
    try {
        const faculty = await Faculty.findByIdAndDelete(id)
        return res.status(200).json({ message: 'Faculty Deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const removeAchievement = async (req, res) => {
    const { id } = req.params
    try {
        const achievement = await Achievement.findByIdAndDelete(id)
        return res.status(200).json({ message: 'Achievement Deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}