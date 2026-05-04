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
    }
})

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 14)
    }
})

userSchema.pre('findOneAndUpdate', async function () {
    const update = this.getUpdate()
    if (update.password) {
        update.password = await bcrypt.hash(update.password, 14)
    }
})

const User = mongoose.model('User', userSchema)

export default User