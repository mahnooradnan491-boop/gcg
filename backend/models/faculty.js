import mongoose from 'mongoose'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const facultySchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})

facultySchema.pre('findOneAndDelete', async function () {
    const docToQuery = await this.model.findOne(this.getQuery())
    if (docToQuery && docToQuery.image) {
        const filePath = path.join(__dirname, '../uploads', docToQuery.image)
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

facultySchema.pre('findOneAndUpdate', async function () {
    const docToQuery = await this.model.findOne(this.getQuery())
    const newImage = this.getUpdate().image
    if (newImage && docToQuery && docToQuery.image) {
        const filePath = path.join(__dirname, '../uploads', docToQuery.image)
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

const Faculty = mongoose.model('Faculty', facultySchema)

export default Faculty