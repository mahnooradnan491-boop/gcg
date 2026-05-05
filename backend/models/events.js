import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    eventTitle: {
        type: String,
        required: true
    },
    eventDescription: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventVenue: {
        type: String,
        required: true
    },
    eventImage: {
        type: String
    },
    organizer: {
        type: String,
        default: "Government Graduate College"
    }
})

const Event = mongoose.model('Event', eventSchema)

export default Event