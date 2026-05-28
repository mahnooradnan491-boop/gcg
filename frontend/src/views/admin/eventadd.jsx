import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import './Admin.css'
import api from '../../api.js'

function EventAdd() {
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

    const navigate = useNavigate()

    const handleAddEvent = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append('eventTitle', eventData.eventTitle)
        data.append('eventDescription', eventData.eventDescription)
        data.append('eventDate', eventData.eventDate)
        data.append('eventVenue', eventData.eventVenue)
        data.append('organizer', eventData.organizer)
        data.append('eventImage', eventData.eventImage)

        try {
            const res = await api.post('/events/add', data)
            if (res.data.message == 'Event Created') {
                navigate('/admin/events')
            }
        } catch (error) {
            alert(error.message || error)
        }
    }

    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
            <div className="d-flex align-items-center gap-3 mb-3">
                <Link to="/admin/events" className="btn btn-outline-secondary btn-sm rounded-3">
                    ← Back
                </Link>
                <h4 className="fw-bold m-0">Events Details</h4>
            </div>
            <form onSubmit={handleAddEvent}>
                <div className="row g-4">
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-12 mt-4 text-end">
                        <button type="submit" className="btn btn-success px-5 fw-bold rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EventAdd