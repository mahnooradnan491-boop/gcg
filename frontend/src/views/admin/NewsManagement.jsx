import React, { useState } from 'react'
import './Admin.css'

function NewsManagement() {
    const [activeTab, setActiveTab] = useState('news')
    
    const [newsData, setNewsData] = useState({
        postedBy: '',
        date: '',
        category: '',
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handlePublish = (e) => {
        e.preventDefault();
        alert("News Published Successfully!");
    };

    const handleDelete = () => {
        alert("News Deleted!");
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
                            <h1 className="fw-bold">News Management</h1>
                            <span className="text-muted fw-bold">Welcome, Admin</span>
                        </div>

                        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="fw-bold m-0">News Details</h4>
                                <button type="button" onClick={handleDelete} className="btn btn-danger px-4 rounded-3 fw-bold">Delete</button>
                            </div>

                            <form onSubmit={handlePublish}>
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <label className="small fw-bold text-muted mb-1">Posted By</label>
                                        <input type="text" name="postedBy" className="form-control bg-light" placeholder="Admin Name" value={newsData.postedBy} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="small fw-bold text-muted mb-1">Date</label>
                                        <input type="date" name="date" className="form-control bg-light" value={newsData.date} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="small fw-bold text-muted mb-1">Category</label>
                                        <select name="category" className="form-select bg-light" value={newsData.category} onChange={handleChange}>
                                            <option value="">Select Category</option>
                                            <option value="Academic">Academic</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Admission">Admission</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className="small fw-bold text-muted mb-1">Title</label>
                                        <input type="text" name="title" className="form-control bg-light" placeholder="Enter news title" value={newsData.title} onChange={handleChange} />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className="small fw-bold text-muted mb-1">Description</label>
                                        <textarea name="description" className="form-control bg-light" rows="6" placeholder="Enter full news description" value={newsData.description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-12 mt-4 text-end">
                                        <button type="submit" className="btn btn-success px-5 py-2 fw-bold rounded-3" style={{ backgroundColor: '#419a51', border: 'none' }}>Publish</button>
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

export default NewsManagement;