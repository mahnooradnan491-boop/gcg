import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

function NewsManagement() {
  const [newsData, setNewsData] = useState({
    postedBy: '',
    date: '',
    category: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData({ ...newsData, [name]: value });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    console.log("News Published:", newsData);
    alert("News Published Successfully!");
  };

  const handleDelete = () => {
    alert("News Deleted!");
  };

  return (
    <div className="admin-container d-flex">
      
      <aside className="sidebar bg-dark text-white p-4">
        <h2 className="fw-bold mb-5">GCG Admin</h2>
        <nav className="nav flex-column gap-3">
          <Link to="/admin/admission" className="nav-link text-white opacity-75 text-decoration-none">Admission</Link>
          <Link to="/admin/contact" className="nav-link text-white opacity-75 text-decoration-none">Contact</Link>
          <Link to="/admin/news" className="nav-link active-link text-white fw-bold bg-success rounded shadow-sm text-decoration-none">News</Link>
          <div className="nav-link text-white opacity-75">Events</div>
          <div className="nav-link text-white opacity-75">Time Table</div>
          <div className="nav-link text-white opacity-75">Faculty</div>
          <div className="nav-link text-white opacity-75">Achievements</div>
        </nav>
        <button className="btn btn-outline-light mt-auto logout-btn">Logout</button>
      </aside>

      
      <main className="main-content flex-grow-1 p-5 bg-light">
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
                <button type="submit" className="btn btn-success px-5 py-2 fw-bold rounded-3" style={{backgroundColor: '#419a51'}}>Publish</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NewsManagement;