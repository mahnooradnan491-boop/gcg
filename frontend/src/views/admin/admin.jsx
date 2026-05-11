import { useState } from 'react';

function Admin() {
    const [activeTab, setActiveTab] = useState('admission')
    const menuItems = [
        { id: 'admission', label: 'Admission' },
        { id: 'contact', label: 'Contact' },
        { id: 'news', label: 'News' },
        { id: 'events', label: 'Events' },
        { id: 'timetable', label: 'Time Table' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'achievement', label: 'Achievements' },
    ];

    return (
        <div className="container-fluid p-0" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="row g-0">
                <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark min-vh-100" style={{ backgroundColor: '#1e2125 !important' }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-4 pt-4 text-white min-vh-100">
                        <h2 className="fs-3 fw-bold mb-5 mt-2">GCG Admin</h2>
                        
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start w-100" id="menu">
                            {menuItems.map((item) => (
                                <li className="nav-item w-100 mb-2" key={item.id}>
                                    <button 
                                        onClick={() => setActiveTab(item.id)} 
                                        className={`nav-link text-white w-100 text-start py-2 px-3 border-0 rounded-3 ${activeTab === item.id ? 'bg-success' : ''}`}
                                        style={{ transition: '0.3s' }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="pb-5 w-100 px-2">
                            <button className="btn btn-outline-light w-100 rounded-pill py-2">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="col py-4 px-5">
                    <div className="container-fluid">
                        <header className="mb-5 d-flex justify-content-between align-items-center">
                            <h1 className="fw-bold text-dark display-6" style={{ letterSpacing: '-1px' }}>Dashboard</h1>
                            <div className="fs-5">Welcome, <span className="fw-bold">Admin</span></div>
                        </header>
                        <div className="row mb-5 g-4">
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm p-4 text-white" style={{ backgroundColor: '#212529', borderRadius: '30px' }}>
                                    <div className="card-body">
                                        <h5 className="opacity-75 mb-3">Total Admissions Received</h5>
                                        <h1 className="display-3 fw-bold">220</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm p-4 text-white" style={{ backgroundColor: '#212529', borderRadius: '30px' }}>
                                    <div className="card-body">
                                        <h5 className="opacity-75 mb-3">Total Contact Queries</h5>
                                        <h1 className="display-3 fw-bold">42</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0 shadow-sm p-4 mt-2" style={{ borderRadius: '40px', minHeight: '400px' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-4 px-2">
                                    <h3 className="fw-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h3>
                                    {activeTab === 'admission' && (
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-outline-dark px-4 rounded-3">Approved</button>
                                            <button className="btn btn-outline-dark px-4 rounded-3">Decline</button>
                                        </div>
                                    )}
                                </div>

                                {/* Conditional Rendering for Forms */}
                                {activeTab === 'timetable' ? (
                                    <form className="px-2">
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Class Name</label>
                                            <input type="text" className="form-control bg-light border-0 py-2" placeholder="Enter class name" style={{ borderRadius: '10px' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Date</label>
                                            <input type="date" className="form-control bg-light border-0 py-2" style={{ borderRadius: '10px' }} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label small fw-bold">Image</label>
                                            <input type="file" className="form-control bg-light border-0 py-2" style={{ borderRadius: '10px' }} />
                                        </div>
                                        <div className="text-end mt-4">
                                            <button type="submit" className="btn btn-success px-5 py-2 rounded-3 border-0 shadow-sm">Add Timetable</button>
                                        </div>
                                    </form>
                                ) : activeTab === 'achievement' ? (
                                    <form className="px-2">
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Title</label>
                                            <input type="text" className="form-control bg-light border-0 py-2" placeholder="Achievement title" style={{ borderRadius: '10px' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Description</label>
                                            <textarea className="form-control bg-light border-0 py-2" rows="3" placeholder="Enter description" style={{ borderRadius: '10px' }}></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small fw-bold text-muted">Date</label>
                                                <input type="date" className="form-control bg-light border-0 py-2" style={{ borderRadius: '10px' }} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small fw-bold text-muted">Category</label>
                                                <select className="form-select bg-light border-0 py-2" style={{ borderRadius: '10px' }}>
                                                    <option>Academic</option>
                                                    <option>Sports</option>
                                                    <option>Cultural</option>
                                                    <option>Research</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label small fw-bold text-muted">Upload Photo</label>
                                            <input type="file" className="form-control bg-light border-0 py-2" style={{ borderRadius: '10px' }} />
                                        </div>
                                        <div className="text-end mt-4">
                                            <button type="submit" className="btn btn-success px-5 py-2 rounded-3 border-0 shadow-sm">Create Achievement</button>
                                        </div>
                                    </form>
                                ) : (
                                    /* Default Table View for other tabs */
                                    <div className="table-responsive">
                                        <table className="table table-borderless align-middle">
                                            <thead style={{ backgroundColor: '#eeeeee', borderRadius: '10px' }}>
                                                <tr className="text-muted">
                                                    <th className="p-3">#</th>
                                                    {activeTab === 'admission' ? (
                                                        <>
                                                            <th>Full Name</th>
                                                            <th>Father Name</th>
                                                            <th>Program</th>
                                                            <th>Timing</th>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <th>Date</th>
                                                            <th>Title</th>
                                                            <th>Posted By</th>
                                                        </>
                                                    )}
                                                    <th className="text-end px-4">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-2">
                                                <tr>
                                                    <td className="p-3">1</td>
                                                    {activeTab === 'admission' ? (
                                                        <>
                                                            <td>John Doe</td>
                                                            <td>Doe Damn</td>
                                                            <td>BSCS</td>
                                                            <td>Morning</td>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <td>2026-05-11</td>
                                                            <td>Sample Title</td>
                                                            <td>Admin</td>
                                                        </>
                                                    )}
                                                    <td className="text-end px-4">
                                                        <a href="#" className="text-dark text-decoration-underline me-3">View</a>
                                                        {activeTab === 'news' && <a href="#" className="text-dark text-decoration-underline">Remove</a>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;