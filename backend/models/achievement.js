import mongoose from 'mongoose'

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

const Achievement = mongoose.model('Achievement', achievementSchema)

export default Achievement