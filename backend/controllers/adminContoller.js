import Admission from "../models/admission.js";

export const getAdmissionData = async (req, res) => {
    try {
        const admissions = await Admission.find().populate('userid', 'fullname email').exec();
        res.status(200).json(admissions);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}