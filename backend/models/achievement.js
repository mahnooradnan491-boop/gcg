import mongoose from 'mongoose'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const achievementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Academic', 'Sports', 'Co-Curricular', 'Other']
    }
})

achievementSchema.pre('findOneAndDelete', async function () {
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

achievementSchema.pre('findOneAndUpdate', async function () {
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

const Achievement = mongoose.model('Achievement', achievementSchema)

export default Achievement