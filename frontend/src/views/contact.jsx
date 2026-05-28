import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import './contact.css'
import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/contact', {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message
      })
      if (res.data.message == 'Message Sent') {
        alert(res.data.message)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setSubject('')
        setMessage('')
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Chatbox />
      <Header />
      <div className="contact-page">
        <div className="contact-hero">
          <p className='hero-top'>Having a questions ?</p>
          <b> <h1>Contact us or <br /> Make a Visit</h1></b>
        </div>
        <form className="contact-form-box" onSubmit={handleSubmit}>
          <h2>We Love to hear you</h2>
          <div className="row gx-0">
            <div className='col-lg-6 pe-lg-3'>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='col-lg-6'>
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="row gx-0">
            <div className='col-lg-6 pe-lg-3'>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='col-lg-6'>
              <input type="text" placeholder="Phone (Optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <input type="text" placeholder="Subject" className="full" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" className="btn btn-light mt-3 w-100 py-2 rounded-0">Send Message</button>
        </form>
        <div className='contact-info mx-auto px-4 mt-5'>
          <div className="row justify-content-center">
            <div className="info-left col-lg-6">
              <p><img src="/icons/email.png" alt="email-icon" width="50" className='me-3' /> abc@gmail.com</p>
              <p><img src="/icons/phone.png" alt="phone-icon" width="50" className='me-3' /> +92 300 1234567</p>
            </div>
            <div className="map col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.8180254749072!2d74.2039968!3d32.1604724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2a1b7a50fc9b%3A0x202625f2cca04e32!2sGovt%20Graduate%20College%20(Boys)%2C%20Satellite%20Town%2C%20Gujranwala!5e1!3m2!1sen!2s!4v1775920275025!5m2!1sen!2s"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact