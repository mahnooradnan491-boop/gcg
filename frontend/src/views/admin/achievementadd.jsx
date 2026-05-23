import { useState } from 'react'
import './Admin.css' // Apni purani CSS file use karein

function AchievementManagement() {
    const [activeTab, setActiveTab] = useState('achievements')

    // Achievement form data handle karne ke liye state
    const [achievementData, setAchievementData] = useState({
        title: '',
        description: '',
        image: null,
        date: '',
        category: 'Academic'
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setAchievementData({ ...achievementData, [name]: value })
    }

    const handleCreateAchievement = (e) => {
        e.preventDefault()
        alert("Achievement Created Successfully!")
        console.log(achievementData)
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
                            <li className="nav-item w-100"><button className="nav-link text-white w-100 text-start border-0">Admission</button></li>
                            <li className="nav-item w-100"><button className="nav-link text-white w-100 text-start border-0">Contact</button></li>
                            <li className="nav-item w-100"><button className="nav-link text-white w-100 text-start border-0">News</button></li>
                            <li className="nav-item w-100"><button className="nav-link text-white w-100 text-start border-0">Events</button></li>
                            <li className="nav-item w-100"><button className="nav-link text-white w-100 text-start border-0">Time Table</button></li>
                            <li className="nav-item w-100"><button className="nav-link text-white w-100 text-start border-0">Faculty</button></li>
                            <li className="nav-item w-100">
                                <button
                                    onClick={() => setActiveTab('achievements')}
                                    className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'achievements' ? 'bg-success' : ''}`}
                                >
                                    Achievements
                                </button>
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
                            <h2 className="fw-normal">Achievement Management</h2>
                            <span className="text-muted small">Welcome, Admin</span>
                        </div>

                        {/* Achievement Details Card */}
                        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
                            <h5 className="fw-bold mb-5">Achievement Details</h5>

                            <form onSubmit={handleCreateAchievement}>
                                <div className="row g-3">
                                    {/* Title Field */}
                                    <div className="col-12 mb-2">
                                        <label className="small fw-bold text-muted mb-1">Title</label>
                                        <input type="text" name="title" className="form-control bg-light py-2 border-secondary-subtle" onChange={handleChange} required />
                                    </div>

                                    {/* Description Field */}
                                    <div className="col-12 mb-2">
                                        <label className="small fw-bold text-muted mb-1">Description</label>
                                        <textarea name="description" rows="2" className="form-control bg-light py-2 border-secondary-subtle" onChange={handleChange} required></textarea>
                                    </div>

                                    {/* Image Field with Preview Box */}
                                    <div className="col-12 mb-2">
                                        <label className="small fw-bold text-muted mb-1">Image</label>
                                        <div className="d-flex gap-2">
                                            <input type="file" className="form-control bg-light py-2 border-secondary-subtle" onChange={(e) => setAchievementData({ ...achievementData, image: e.target.files[0] })} required />
                                            <div className="bg-light border border-secondary-subtle rounded d-flex align-items-center justify-content-center" style={{ width: '50px', height: '45px' }}>
                                                <i className="bi bi-image text-muted"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Field */}
                                    <div className="col-12 mb-2">
                                        <label className="small fw-bold text-muted mb-1">Date</label>
                                        <input type="date" name="date" className="form-control bg-light py-2 border-secondary-subtle" onChange={handleChange} required />
                                    </div>

                                    {/* Category Dropdown */}
                                    <div className="col-12 mb-2">
                                        <label className="small fw-bold text-muted mb-1">Category</label>
                                        <select name="category" className="form-select bg-light py-2 border-secondary-subtle" onChange={handleChange} value={achievementData.category}>
                                            <option value="Academic">Academic</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Cultural">Cultural</option>
                                            <option value="Research">Research</option>
                                        </select>
                                    </div>

                                    {/* Create Button */}
                                    <div className="col-12 mt-4 text-end">
                                        <button type="submit" className="btn btn-success px-4 py-2 fw-normal rounded-2 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                                            Create Achievement
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

export default AchievementManagement