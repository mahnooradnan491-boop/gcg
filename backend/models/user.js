import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String
    }
})

userSchema.pre('save', async function () {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 14)
        }
    } catch (error) {
        console.error("Error hashing password:", error)
    }
})

userSchema.pre('findOneAndUpdate', async function () {
    try {
        const update = this.getUpdate()
        if (update.password) {
            update.password = await bcrypt.hash(update.password, 14)
        }
    } catch (error) {
        console.error("Error hashing password:", error)
    }
})

const User = mongoose.model('User', userSchema)

export default User