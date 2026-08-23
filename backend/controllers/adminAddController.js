import News from "../models/news.js"
import Event from "../models/events.js"
import Faculty from "../models/faculty.js"
import Timetable from "../models/timetable.js"
import Achievement from "../models/achievement.js"

export const addNews = async (req, res) => {
    const { postedBy, date, category, title, description } = req.body
    try {
        const news = new News({ title, description, date, category, postedBy })
        await news.save()
        return res.status(200).json({ message: 'News Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addEvent = async (req, res) => {
    const { eventTitle, eventDescription, eventDate, eventVenue, organizer } = req.body
    const eventImage = req.file?.path ? req.file.path.replace(/^uploads[/\\]/, '') : null;
    try {
        const event = new Event({ eventTitle, eventDescription, eventDate, eventVenue, eventImage, organizer })
        await event.save()
        return res.status(200).json({ message: 'Event Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addTimetable = async (req, res) => {
    const { className, date } = req.body
    const timetableImage = req.file?.timetableImage?.path
    try {
        const timetable = new Timetable({ className, date, timetableImage })
        await timetable.save()
        return res.status(200).json({ message: 'Timetable Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addFaculty = async (req, res) => {
    const { fullName, department, designation } = req.body
       const eventImage = req.file?.path ? req.file.path.replace(/^uploads[/\\]/, '') : null;
    try {
        const faculty = new Faculty({ fullName, department, designation, image })
        await faculty.save()
        return res.status(200).json({ message: 'Faculty Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addAchievement = async (req, res) => {
    const { title, description, date, category } = req.body
       const image = req.file?.path ? req.file.path.replace(/^uploads[/\\]/, '') : null;
    try {
        const achievement = await new Achievement({ title, description, image, date, category })
        await achievement.save()
        return res.status(200).json({ message: 'Achievement Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}