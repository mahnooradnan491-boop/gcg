import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const adminSchema = mongoose.Schema({
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

adminSchema.pre('save', async function () {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 14)
        }
    } catch (error) {
        console.error("Error hashing password:", error)
    }
})

adminSchema.pre('findOneAndUpdate', async function () {
    try {
        const update = this.getUpdate()
        if (update.password) {
            update.password = await bcrypt.hash(update.password, 14)
        }
    } catch (error) {
        console.error("Error hashing password:", error)
    }
})

const Admin = mongoose.model('Admin', adminSchema)

export default Admin