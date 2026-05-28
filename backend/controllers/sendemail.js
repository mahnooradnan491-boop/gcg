import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
})

export const sendEmail = async (req, res) => {
    const { to, subject, message } = req.body.sendData

    const mailOptions = {
        from: `"My Custom App" <${process.env.GMAIL_USER}>`,
        to: to,
        subject: subject,
        text: message,
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true, messageId: info.messageId })
    } catch (error) {
        console.error("Nodemailer Error:", error)
        res.status(500).json({ success: false, error: error.message })
    }
}