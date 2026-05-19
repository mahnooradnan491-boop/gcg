import mongoose from 'mongoose'
import Admin from '../models/admin.js'

const checkAdmin = async () => {
    try {
        const admin = await Admin.findOne()

        if (!admin) {
            const defaultAdmin = new Admin({
                email: 'admin@gmail.com',
                password: '12345678'
            })
            await defaultAdmin.save()
            console.log('Default Admin Created')
        }
    } catch (error) {
        console.error('Error in checkAdmin:', error)
    }
}

export default checkAdmin