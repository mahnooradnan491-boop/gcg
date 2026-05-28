import { useEffect, useState } from 'react'
import './Admin.css'
import { Link, resolvePath, useParams } from 'react-router-dom'
import api from '../../api.js'

function ContactQuery() {
    const [reply, setReply] = useState('')
    const [queryData, setQueryData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/contact/${id}`)
                setQueryData(res.data)
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [id])

    const sendData = {
        to: queryData.email,
        subject: `Re: ${queryData.subject}`,
        message: reply
    }

    const handleSendReply = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post('/sendemail', sendData)

            if (res.data.message == 'Email Send') {
                alert('Email successfully delivered to recipient!')
            }
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0 mt-2" style={{ borderRadius: '40px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-3">
                    <Link to="/admin/contact" className="btn btn-sm btn-outline-secondary rounded-3 px-3">← Back</Link>
                    <h4 className="fw-bold m-0">Contact Details</h4>
                </div>
            </div>

            <form onSubmit={handleSendReply}>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Full Name</label>
                        <input type="text" className="form-control bg-light" value={`${queryData.firstName} ${queryData.lastName}`} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Email</label>
                        <input type="email" className="form-control bg-light" value={queryData.email} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Phone No.</label>
                        <input type="text" className="form-control bg-light" value={queryData.phone} readOnly />
                    </div>
                    <div className="col-12 mt-3">
                        <label className="small fw-bold text-muted mb-1">Subject</label>
                        <input type="text" className="form-control bg-light" value={queryData.subject} readOnly />
                    </div>
                    <div className="col-12 mt-3">
                        <label className="small fw-bold text-muted mb-1">Message</label>
                        <textarea className="form-control bg-light" rows="5" value={queryData.message} readOnly></textarea>
                    </div>

                    <div className="col-12 mt-5">
                        <label className="small fw-bold text-muted mb-1">Message (Reply)</label>
                        <div className="d-flex gap-2">
                            <input
                                type="text"
                                className="form-control bg-light"
                                placeholder="Type your reply here..."
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                            />
                            <button type="submit" className="btn btn-success px-5 fw-bold rounded-3 border-0" style={{ backgroundColor: '#419a51' }}>Send</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactQuery