import News from "../models/news.js"
import Event from "../models/events.js"
import Faculty from "../models/faculty.js"
import Timetable from "../models/timetable.js"
import Achievement from "../models/achievement.js"

export const addNews = async (req, res) => {
    const { } = req.body
    try {
        const news = await new News({})
        return res.status(200).json({ message: 'News Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addEvent = async (req, res) => {
    const { } = req.body
    try {
        const event = await new Event({})
        return res.status(200).json({ message: 'Event Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addTimetable = async (req, res) => {
    const { } = req.body
    try {
        const timetable = await new Timetable({})
        return res.status(200).json({ message: 'Timetable Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addFaculty = async (req, res) => {
    const { } = req.body
    try {
        const faculty = await new Faculty({})
        return res.status(200).json({ message: 'Faculty Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addAchievement = async (req, res) => {
    const { } = req.body
    try {
        const achievement = await new Achievement({})
        return res.status(200).json({ message: 'Achievement Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}