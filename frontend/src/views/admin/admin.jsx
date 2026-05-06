import { useState } from 'react'

function Admin() {
    const [activeTab, setActiveTab] = useState('admission');

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

                <div className="col py-3 bg-light">
                    <div className="container">
                        <header className="mb-4 d-flex justify-content-between align-items-center">
                            <h2 className="fw-bold">Dashboard</h2>
                            <div className="text-muted">Welcome, Administrator</div>
                        </header>

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="card bg-primary text-white border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <h6>Total Admission Received</h6>
                                        <h3 className="fw-bold">1,240</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-warning text-dark border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <h6>Total Contact Queries</h6>
                                        <h3 className="fw-bold">42</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-sm">
                            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 fw-bold text-capitalize">{activeTab} Management</h5>
                                {activeTab !== 'admission' && activeTab !== 'contact' && (
                                    <button className="btn btn-success btn-sm">Add New {activeTab}</button>
                                )}
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover border mt-2">
                                        <thead className="table-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Title / Name</th>
                                                <th>Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {activeTab === 'admission' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>John Doe (Computer Science)</td>
                                                    <td>2026-04-13</td>
                                                    <td><button className="btn btn-sm btn-outline-primary">View Info</button></td>
                                                </tr>
                                            )}
                                            {activeTab === 'contact' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>Inquiry about Hostel</td>
                                                    <td>2026-04-12</td>
                                                    <td><button className="btn btn-sm btn-outline-success">Reply</button></td>
                                                </tr>
                                            )}
                                            {activeTab === 'news' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>Semester Results Declared</td>
                                                    <td>2026-04-10</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                                                    </td>
                                                </tr>
                                            )}
                                            {activeTab === 'events' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>Annual Sports Day 2026</td>
                                                    <td>2026-04-15</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                                                    </td>
                                                </tr>
                                            )}
                                            {activeTab === 'timetable' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>BSc Semester 4 - Final</td>
                                                    <td>2026-04-01</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )}
                                            {activeTab === 'faculty' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>Dr. Smith (Physics Dept)</td>
                                                    <td>2026-03-20</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )}
                                            {activeTab === 'achievement' && (
                                                <tr>
                                                    <td>1</td>
                                                    <td>National Quiz Winner</td>
                                                    <td>2026-03-15</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin