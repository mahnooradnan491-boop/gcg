import mongoose from 'mongoose'

const timetableSchema = mongoose.Schema({
    classname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Timetable = mongoose.model('Timetable', timetableSchema)

export default Timetable