import React, { useState } from 'react';
import './Admin.css'; // Wahi CSS file jo aapki dost use kar rahi hai

function FacultyInfo() {
    const [activeTab, setActiveTab] = useState('faculty');

    // Form data handle karne ke liye state
    const [facultyData, setFacultyData] = useState({
        fullName: '',
        department: '',
        designation: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFacultyData({ ...facultyData, [name]: value });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        alert("Faculty Added Successfully!");
        console.log(facultyData);
    };

    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                {/* Sidebar - Same as ContactQuery */}
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
                                <button className="nav-link text-white w-100 text-start border-0">Timetable</button>
                            </li>
                            <li className="nav-item w-100">
                                <button className={`nav-link text-white w-100 text-start border-0 ${activeTab === 'faculty' ? 'bg-success' : ''}`}>Faculty</button>
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
                            <h1 className="fw-bold">Faculty Management</h1>
                            <span className="text-muted fw-bold">Welcome, Admin</span>
                        </div>

                        {/* White Card Section */}
                        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
                            <h4 className="fw-bold mb-5">Faculty Details</h4>

                            <form onSubmit={handleAdd}>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            className="form-control bg-light py-2" 
                                            placeholder="Enter Full Name"
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Department</label>
                                        <input 
                                            type="text" 
                                            name="department"
                                            className="form-control bg-light py-2" 
                                            placeholder="Enter Department"
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Designation</label>
                                        <input 
                                            type="text" 
                                            name="designation"
                                            className="form-control bg-light py-2" 
                                            placeholder="Enter Designation"
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="small fw-bold text-muted mb-1">Image</label>
                                        <input 
                                            type="file" 
                                            className="form-control bg-light py-2" 
                                            onChange={(e) => setFacultyData({ ...facultyData, image: e.target.files[0] })}
                                        />
                                    </div>

                                    {/* Add Button matching green theme */}
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

export default FacultyInfo;