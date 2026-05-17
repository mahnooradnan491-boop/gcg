import React, { useState } from 'react'

const AdmissionInfo = () => {
    const [activeTab, setActiveTab] = useState('admission');

    const fields = [
        { label: "Full Name", span: 3 }, { label: "Email", span: 3 },
        { label: "Program", span: 3 }, { label: "Timing", span: 3 },
        { label: "B.FORM / CNIC", span: 3 }, { label: "Date of Birth", span: 3 },
        { label: "Gender", span: 3 }, { label: "Phone No.", span: 3 },
        { label: "Father Name", span: 3 }, { label: "Father's CNIC", span: 3 },
        { label: "Guardian Phone No.", span: 3 }, { label: "Relation", span: 3 },
        { label: "Address", span: 9 }, { label: "City", span: 3 },
    ];

    const academicFields = [
        { label: "Matric Roll No.", span: 3 }, { label: "Total Marks", span: 3 },
        { label: "Obtained Marks", span: 3 }, { label: "Scan Result Sheet (PDF, IMAGE)", span: 3, isFile: true },
        { label: "Inter Roll No.", span: 3 }, { label: "Total Marks", span: 3 },
        { label: "Obtained Marks", span: 3 }, { label: "Scan Result Sheet (PDF, IMAGE)", span: 3, isFile: true },
    ];

    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark min-vh-100">
                    <div className="d-flex flex-column align-items-start px-4 pt-4 text-white min-vh-100">
                        <span className="fs-4 fw-bold mb-5 mt-2">GCG Admin</span>
                        
                        <ul className="nav nav-pills flex-column mb-auto w-100">
                            {['admission', 'contact', 'news', 'events', 'timetable', 'faculty', 'achievement'].map((tab) => (
                                <li className="nav-item w-100 mb-2" key={tab}>
                                    <button 
                                        onClick={() => setActiveTab(tab)} 
                                        className={`nav-link text-white w-100 text-start border-0 py-2 ${activeTab === tab ? 'bg-success rounded-3' : ''}`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="pb-4 w-100 mt-5">
                            <button className="btn btn-outline-light w-100 rounded-pill">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="col py-4 px-5 bg-light min-vh-100">
                    <header className="mb-4 d-flex justify-content-between align-items-center">
                        <h1 className="fw-bold display-6">Admission Info</h1>
                        <div className="text-muted fs-5">Welcome, <span className="fw-bold text-dark">Admin</span></div>
                    </header>

                    <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '35px' }}>
                        <div className="card-body p-0">
                          
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <h3 className="fw-bold mb-0">Details of student</h3>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-success px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ backgroundColor: '#2e7d32', border: 'none' }}>Approved</button>
                                    <button className="btn btn-danger px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ backgroundColor: '#d32f2f', border: 'none' }}>Decline</button>
                                </div>
                            </div>
                            <div className="row g-3 mb-4">
                                {fields.map((f, i) => (
                                    <div key={i} className={`col-md-${f.span}`}>
                                        <label className="form-label text-muted fw-semibold mb-1" style={{ fontSize: '13px' }}>{f.label}</label>
                                        <input type="text" className="form-control border-0 py-3 px-3 rounded-3" style={{ backgroundColor: '#f0f2f5' }} readOnly />
                                    </div>
                                ))}
                            </div>

                            <div className="row g-3">
                                {academicFields.map((f, i) => (
                                    <div key={i} className={`col-md-${f.span}`}>
                                        <label className="form-label text-muted fw-semibold mb-1" style={{ fontSize: '13px' }}>{f.label}</label>
                                        {f.isFile ? (
                                            <button className="btn w-100 py-3 border-0 rounded-3 text-dark fw-medium" style={{ backgroundColor: '#e0e0e0' }}>View File</button>
                                        ) : (
                                            <input type="text" className="form-control border-0 py-3 px-3 rounded-3" style={{ backgroundColor: '#f0f2f5' }} readOnly />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    );
};

export default AdmissionInfo