import Admission from "../models/admission.js"
import Contact from "../models/contact.js"

export const addAdmission = async (req, res) => {
    const userid = req.user.id
    const {
        cnic, dob,
        gender, phone,
        fatherName, fatherCnic,
        guardianPhone, address, city,
        matricRoll, matricTotal,
        matricObtained,
        interRoll, interTotal, interObtained,
        program, timing
    } = req.body
    const matricSheet = req.files?.['matricSheet']?.[0]?.path
    const interSheet = req.files?.['interSheet']?.[0]?.path
    try {
        const admission = new Admission({
            userid,
            cnic, dob,
            gender, phone,
            fatherName, fatherCnic,
            guardianPhone, address, city,
            matricRoll, matricTotal,
            matricObtained, matricSheet,
            interRoll, interTotal, interObtained, interSheet,
            program, timing
        })
        await admission.save()
        return res.status(200).json({ message: 'Created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateAdmission = async (req, res) => {
    const userid = req.user.id
    const {
        cnic, dob, gender, phone, fatherName, fatherCnic, guardianPhone, address, city, matricRoll, matricTotal, matricObtained, interRoll, interTotal, interObtained, program, timing
    } = req.body
    const matricSheet = req.files?.['matricSheet']?.[0]?.path
    const interSheet = req.files?.['interSheet']?.[0]?.path
    try {
        const admission = await Admission.findOneAndUpdate({ userid }, {
            cnic, dob, gender, phone, fatherName, fatherCnic, guardianPhone, address, city, matricRoll, matricTotal, matricObtained, matricSheet, interRoll, interTotal, interObtained, interSheet, program, timing
        })
        return res.status(200).json({ message: 'Updated' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAdmission = async (req, res) => {
    const userid = req.user.id
    try {
        const admission = await Admission.findOne({ userid })
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' })
        }
        return res.status(200).json(admission)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const addContact = async (req, res) => {
    const { firstName, lastName, email, phone, subject, message } = req.body
    try {
        const contact = new Contact({ firstName, lastName, email, phone, subject, message })
        await contact.save()
        return res.status(200).json({ message: 'Message Sent' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}