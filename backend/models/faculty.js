import mongoose from 'mongoose'

const facultySchema = mongoose.Schema({
    name: {
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

const Faculty = mongoose.model('Faculty', facultySchema)

export default Faculty