import React, { useState } from 'react';
import './Admin.css'; // Wahi CSS file jo aapki dost use kar rahi hai

function EventManagement() {
    const [activeTab, setActiveTab] = useState('events');

    // Event form data handle karne ke liye state
    const [eventData, setEventData] = useState({
        eventTitle: '',
        eventDescription: '',
        eventDate: '',
        eventVenue: '',
        organizer: '',
        eventImage: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        alert("Event Added Successfully!");
        console.log(eventData);
    };

    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                {/* Sidebar - Same as Faculty and Contact */}
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
                                <button onClick={() => setActiveTab('events')} className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'events' ? 'bg-success' : ''}`}>Events</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Timetable</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Faculty</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className="nav-link text-white w-100 text-start border-0">Achievement</button>
                            </li>
                        </ul>
                        <div className="pb-4 w-100 mt-auto">
                            <button className="btn btn-sm btn-outline-light w-100 rounded-pill">Logout</button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col p-0">
                    <main className="main-content p-5 bg-light min-vh-100">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1 className="fw-bold">Event Management</h1>
                            <span className="text-muted fw-bold">Welcome, Admin</span>
                        </div>

                        {/* Event Details Card */}
                        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
                            <h4 className="fw-bold mb-5">Event Details</h4>

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

                                    {/* Add Button */}
                                    <div className="col-12 mt-5 text-end">
                                        <button type="submit" className="btn btn-success px-5 fw-bold rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
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
    );
}

export default EventManagement;