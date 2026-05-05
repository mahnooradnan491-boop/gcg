import mongoose from 'mongoose'

const facultySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    image: {
        type: String
    },
    bio: {
        type: String
    }
})

const Faculty = mongoose.model('Faculty', facultySchema)

export default Faculty