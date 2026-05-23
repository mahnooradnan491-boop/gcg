import { useState } from 'react'
import './Admin.css'
function ContactQuery({ onBack }) {
    const [queryData, setQueryData] = useState({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '0300-1234567',
        subject: 'Admission Inquiry',
        message: 'I want to know about the admission process...',
        reply: ''
    })
    const handleDelete = () => {
        alert("Query Deleted!")
    }
    const handleSendReply = (e) => {
        e.preventDefault()
        alert("Reply Sent: " + queryData.reply)
    }
    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0 mt-2" style={{ borderRadius: '40px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-3">
                    <button onClick={onBack} className="btn btn-sm btn-outline-secondary rounded-3 px-3">← Back</button>
                    <h4 className="fw-bold m-0">Contact Details</h4>
                </div>
                <button onClick={handleDelete} className="btn btn-danger px-4 rounded-3 fw-bold border-0" style={{ backgroundColor: '#ff0015' }}>Delete</button>
            </div>

            <form onSubmit={handleSendReply}>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Full Name</label>
                        <input type="text" className="form-control bg-light" value={queryData.fullName} readOnly />
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
                                value={queryData.reply}
                                onChange={(e) => setQueryData({ ...queryData, reply: e.target.value })}
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