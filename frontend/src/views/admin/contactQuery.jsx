import React, { useState } from 'react'
import './Admin.css'

function ContactQuery() {
  
  const [queryData, setQueryData] = useState({
    fullName: 'John Doe', 
    email: 'john@example.com',
    phone: '0300-1234567',
    subject: 'Admission Inquiry',
    message: 'I want to know about the admission process...',
    reply: ''
  });

  const handleDelete = () => {
    alert("Query Deleted!");
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    alert("Reply Sent: " + queryData.reply);
  };

  return (
    <div className="admin-container d-flex">
      
      <aside className="sidebar bg-dark text-white p-4">
        <h2 className="fw-bold mb-5">GCG Admin</h2>
        <nav className="nav flex-column gap-3">
          <div className="nav-link text-white opacity-75">Admission</div>
          <div className="nav-link active-link text-white fw-bold bg-success rounded shadow-sm">Contact</div>
          <div className="nav-link text-white opacity-75">News</div>
          <div className="nav-link text-white opacity-75">Events</div>
          <div className="nav-link text-white opacity-75">Time Table</div>
          <div className="nav-link text-white opacity-75">Faculty</div>
          <div className="nav-link text-white opacity-75">Achievements</div>
        </nav>
        <button className="btn btn-outline-light mt-auto logout-btn">Logout</button>
      </aside>

      
      <main className="main-content flex-grow-1 p-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold">Query Management</h1>
          <span className="text-muted fw-bold">Welcome, Admin</span>
        </div>

        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">Contact Details</h4>
            <button onClick={handleDelete} className="btn btn-danger px-4 rounded-3 fw-bold">Delete</button>
          </div>

          <form onSubmit={handleSendReply}>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="small fw-bold text-muted mb-1">Full Name</label>
                <input type="text" className="form-control bg-light" value={queryData.fullName} readOnly />
              </div>
              <div className="col-md-4">
                <label className="small fw-bold text-muted mb-1">Email</label>
                <input type="email" className="form-control bg-light" value={queryData.email} readOnly />
              </div>
              <div className="col-md-4">
                <label className="small fw-bold text-muted mb-1">Phone No.</label>
                <input type="text" className="form-control bg-light" value={queryData.phone} readOnly />
              </div>
              <div className="col-12 mt-3">
                <label className="small fw-bold text-muted mb-1">Subject</label>
                <input type="text" className="form-control bg-light" value={queryData.subject} readOnly />
              </div>
              <div className="col-12 mt-3">
                <label className="small fw-bold text-muted mb-1">Massege</label>
                <textarea className="form-control bg-light" rows="5" value={queryData.message} readOnly></textarea>
              </div>
              
              
              <div className="col-12 mt-5">
                <label className="small fw-bold text-muted mb-1">Massege (Reply)</label>
                <div className="d-flex gap-2">
                  <input 
                    type="text" 
                    className="form-control bg-light" 
                    placeholder="Type your reply here..." 
                    value={queryData.reply}
                    onChange={(e) => setQueryData({...queryData, reply: e.target.value})}
                  />
                  <button type="submit" className="btn btn-success px-5 fw-bold rounded-3">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactQuery;