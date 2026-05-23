import { useState } from 'react'
import './Admin.css' // Apni purani CSS file hi use karein
import { Link } from 'react-router'

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
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
            <div className="d-flex align-items-center gap-3 mb-3">
                <Link to="/admin/timetable" className="btn btn-outline-secondary btn-sm rounded-3">
                    ← Back
                </Link>
                <h4 className="fw-bold m-0">Time Table Details</h4>
            </div>
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
    )
}

export default TimetableManagement