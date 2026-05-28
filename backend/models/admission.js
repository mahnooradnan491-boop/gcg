import mongoose from 'mongoose'

const admissionSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cnic: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    phone: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    fatherCnic: {
        type: String,
        required: true
    },
    guardianPhone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    matricRoll: {
        type: String,
        required: true,
        unique: true
    },
    matricTotal: {
        type: Number,
        required: true
    },
    matricObtained: {
        type: Number,
        required: true
    },
    matricSheet: {
        type: String,
        required: true
    },
    interRoll: {
        type: String,
        required: true,
        unique: true
    },
    interTotal: {
        type: Number,
        required: true
    },
    interObtained: {
        type: Number,
        required: true
    },
    interSheet: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        enum: ['Morning', 'Evening'],
        default: 'Morning',
        required: true
    }
})

const Admission = mongoose.model('Admission', admissionSchema)

export default Admission