import mongoose from 'mongoose'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

eventSchema.pre('findOneAndDelete', async function () {
    const docToQuery = await this.model.findOne(this.getQuery())
    if (docToQuery && docToQuery.eventImage) {
        const filePath = path.join(__dirname, '../uploads', docToQuery.eventImage)
        try {
            await fs.unlink(filePath)
        } catch (error) {
            if (error.code === 'ENOENT') {
                return
            }
            throw new Error(`File deletion failed. Database record preserved. Reason: ${error.message}`)
        }
    }
})

eventSchema.pre('findOneAndUpdate', async function () {
    const docToQuery = await this.model.findOne(this.getQuery())
    const newImage = this.getUpdate().eventImage
    if (newImage && docToQuery && docToQuery.eventImage) {
        const filePath = path.join(__dirname, '../uploads', docToQuery.eventImage)
        try {
            await fs.unlink(filePath)
        } catch (error) {
            if (error.code === 'ENOENT') {
                return
            }
            throw new Error(`File deletion failed. Database record preserved. Reason: ${error.message}`)
        }
    }
})

const Event = mongoose.model('Event', eventSchema)

export default Event