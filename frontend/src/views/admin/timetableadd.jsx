import { useState } from 'react'
import './Admin.css' // Apni purani CSS file hi use karein

function TimetableManagement() {
    const [activeTab, setActiveTab] = useState('timetable')

    // Timetable form data handle karne ke liye state
    const [timetableData, setTimetableData] = useState({
        className: '',
        date: '',
        timetableImage: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setTimetableData({ ...timetableData, [name]: value })
    }

    const handleAddTimetable = (e) => {
        e.preventDefault()
        alert("Time Table Added Successfully!")
        console.log(timetableData)
    }

    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                {/* Sidebar */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark min-vh-100">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline fw-bold mt-3">GCG Admin</span>
                        </div>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100 mt-2">
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Admission</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Contact</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">News</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Events</button>
                            </li>
                            <li className="nav-item w-100">
                                <button
                                    onClick={() => setActiveTab('timetable')}
                                    className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'timetable' ? 'bg-success' : ''}`}
                                >
                                    Time Table
                                </button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Faculty</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Achievements</button>
                            </li>
                        </ul>
                        <div className="pb-4 w-100 mt-auto">
                            <button className="btn btn-sm btn-outline-light w-100 rounded-2">Logout</button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col p-0">
                    <main className="main-content p-5 bg-light min-vh-100">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-normal">Time Table Management</h2>
                            <span className="text-muted small">Welcome, Admin</span>
                        </div>

                        {/* Timetable Details Card */}
                        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
                            <h5 className="fw-bold mb-5">Time Table Details</h5>

                            <form onSubmit={handleAddTimetable}>
                                <div className="row g-4">
                                    {/* Class Name Field */}
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Class Name</label>
                                        <input
                                            type="text"
                                            name="className"
                                            className="form-control bg-light py-2 border-secondary-subtle"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Date Field */}
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control bg-light py-2 border-secondary-subtle"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Image Upload Field */}
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Image</label>
                                        <input
                                            type="file"
                                            className="form-control bg-light py-2 border-secondary-subtle"
                                            onChange={(e) => setTimetableData({ ...timetableData, timetableImage: e.target.files[0] })}
                                            required
                                        />
                                    </div>

                                    {/* Add Button */}
                                    <div className="col-12 mt-5 text-end">
                                        <button type="submit" className="btn btn-success px-5 py-2 fw-normal rounded-2 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default TimetableManagement