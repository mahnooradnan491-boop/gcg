import mongoose from 'mongoose'

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['General Notice', 'News', 'Exam Date Sheet'],
        default: 'News'
    },
    postedBy: {
        type: String,
        default: "Head of Department"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const News = mongoose.model('News', newsSchema)

export default News