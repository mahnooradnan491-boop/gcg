import mongoose from 'mongoose'

const timetableSchema = mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },

    day: {
        type: String,
        required: true
    },
     secondtime: {
        type:String,
        required: true
     },

    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    roomNo: {
        type: String,
        required: true
    }
})

const Timetable = mongoose.model('Timetable', timetableSchema)

export default Timetable