import mongoose from 'mongoose'

const admissionSchema = mongoose.Schema({
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
    phoneno: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    fathercnic: {
        type: String,
        required: true
    },
    gaurdianphoneno: {
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
    matricRollno: {
        type: String,
        required: true,
        unique: true
    },
    matricTotalmarks: {
        type: Number,
        required: true
    },
    matricObtainedmarks: {
        type: Number,
        required: true
    },
    matricResultsheet: {
        type: String,
        required: true
    },
    interRollno: {
        type: String,
        required: true,
        unique: true
    },
    interTotalmarks: {
        type: Number,
        required: true
    },
    interObtainedmarks: {
        type: Number,
        required: true
    },
    interResultsheet: {
        type: String,
        required: true
    }
})

const Admission = mongoose.model('Admission', admissionSchema)

export default Admission