import { useState } from 'react'
import { Link } from 'react-router'
import './Admin.css'

function EventManagement() {
    const [activeTab, setActiveTab] = useState('events')

    const [eventData, setEventData] = useState({
        eventTitle: '',
        eventDescription: '',
        eventDate: '',
        eventVenue: '',
        organizer: '',
        eventImage: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setEventData({ ...eventData, [name]: value })
    }

    const handleAddEvent = (e) => {
        e.preventDefault()
        alert("Event Added Successfully!")
        console.log(eventData)
    }

    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
            <div className="d-flex align-items-center gap-3 mb-3">
                <Link to="/admin/event" className="btn btn-outline-secondary btn-sm rounded-3">
                    ← Back
                </Link>
                <h4 className="fw-bold m-0">Events Details</h4>
            </div>
            <form onSubmit={handleAddEvent}>
                <div className="row g-4">
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Event Title</label>
                        <input
                            type="text"
                            name="eventTitle"
                            className="form-control bg-light py-2"
                            placeholder="Enter Event Title"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Event Description</label>
                        <textarea
                            name="eventDescription"
                            className="form-control bg-light py-2"
                            rows="3"
                            placeholder="Enter Event Description"
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Event Date</label>
                        <input
                            type="date"
                            name="eventDate"
                            className="form-control bg-light py-2"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Event Venue</label>
                        <input
                            type="text"
                            name="eventVenue"
                            className="form-control bg-light py-2"
                            placeholder="Enter Event Venue"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Organizer</label>
                        <input
                            type="text"
                            name="organizer"
                            className="form-control bg-light py-2"
                            placeholder="Enter Organizer Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Event Image</label>
                        <input
                            type="file"
                            className="form-control bg-light py-2"
                            onChange={(e) => setEventData({ ...eventData, eventImage: e.target.files[0] })}
                        />
                    </div>
                    <div className="col-12 mt-5 text-end">
                        <button type="submit" className="btn btn-success px-5 fw-bold rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EventManagement