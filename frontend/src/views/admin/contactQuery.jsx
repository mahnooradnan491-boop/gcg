import React, { useState } from 'react'
import './Admin.css'

function ContactQuery() {
    const [activeTab, setActiveTab] = useState('contact');

    const [queryData, setQueryData] = useState({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '0300-1234567',
        subject: 'Admission Inquiry',
        message: 'I want to know about the admission process...',
        reply: ''
    });

    const handleDelete = () => {
        alert("Query Deleted!");
    };

    const handleSendReply = (e) => {
        e.preventDefault();
        alert("Reply Sent: " + queryData.reply);
    };

    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark min-vh-100">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline fw-bold mt-3">GCG Admin</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100">
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('admission')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'admission' ? 'bg-success' : ''}`}>Admission</button>
                            </li>
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('contact')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'contact' ? 'bg-success' : ''}`}>Contact</button>
                            </li>
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('news')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'news' ? 'bg-success' : ''}`}>News</button>
                            </li>
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('events')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'events' ? 'bg-success' : ''}`}>Events</button>
                            </li>
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('timetable')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'timetable' ? 'bg-success' : ''}`}>Timetable</button>
                            </li>
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('faculty')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'faculty' ? 'bg-success' : ''}`}>Faculty</button>
                            </li>
                            <li className="nav-item w-100">
                                <button onClick={() => setActiveTab('achievement')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'achievement' ? 'bg-success' : ''}`}>Achievement</button>
                            </li>
                        </ul>
                        <hr />
                        <div className="pb-4 w-100">
                            <button className="btn btn-sm btn-outline-light w-100">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="col p-0">
                    <main className="main-content p-5 bg-light min-vh-100">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1 className="fw-bold">Query Management</h1>
                            <span className="text-muted fw-bold">Welcome, Admin</span>
                        </div>

                        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="fw-bold m-0">Contact Details</h4>
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
                                        <label className="small fw-bold text-muted mb-1">Massege</label>
                                        <textarea className="form-control bg-light" rows="5" value={queryData.message} readOnly></textarea>
                                    </div>

                                    <div className="col-12 mt-5">
                                        <label className="small fw-bold text-muted mb-1">Massege (Reply)</label>
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
                    </main>
                </div>
            </div>
        </div>
    );
}

export default ContactQuery;