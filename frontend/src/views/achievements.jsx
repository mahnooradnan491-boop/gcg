import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios' 
import './achievements.css'

function Achievements() {
  
  const passRatios = [
    { year: "2026", title: "Pass Ratio of BSIT Fall Batch 2026" },
    { year: "2025", title: "Pass Ratio of BSIT Fall Batch 2025" },
    { year: "2024", title: "Pass Ratio of BSIT Fall Batch 2024" },
    { year: "2023", title: "Pass Ratio of BSIT Fall Batch 2023" },
  ];

  
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/achievements', { withCredentials: true });
      
        setPublications(response.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching achievements:", error);
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <>
      <Chatbox />
      <Header />

      <div className="achievements-container bg-white pb-5">
        <div className="text-center">
          <div className="achievements-hero-flex">
            <div className="hero-text">
              <p className="hero-top">Contributions that leads to better Pakistan</p>
              <h1 className="hero-h1">Focusing the quality <br /> Education</h1>
            </div>
          </div>
          <div className="recent-banner">
            <h2>Achievement that speaks</h2>
          </div>
          
         
          <div className="mt-5">
            <p className="text-muted small mb-1 ls-wide">YEARLY</p>
            <h2 className="fw-bold mb-4">PASS RATIO</h2>
            <div className="ratio-list mx-auto" style={{ maxWidth: '900px' }}>
              {passRatios.map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center bg-light p-3 mb-2 rounded shadow-sm">
                  <span className="fw-medium">{item.title}</span>
                  <Link to={`/achievements/chart/${item.year}`} className="btn btn-sm btn-success px-3 fw-bold">
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>

         
          <div className="mt-5 text-start mx-auto" style={{ maxWidth: '900px' }}>
            <h2 className="fw-bold mb-4">Paper Publications & Achievements</h2>
            <div className="pub-list">
              {loading ? (
                <div className="text-center my-4 text-muted">Loading achievements...</div>
              ) : publications.length === 0 ? (
                <div className="text-center my-4 text-muted">No achievements found.</div>
              ) : (
                publications.map((pub, index) => (
                  <div key={pub._id || index} className="d-flex justify-content-between align-items-center bg-light p-4 mb-2 rounded shadow-sm">
                   <div>
  {pub.image && (
    <img
      src={`http://localhost:3000/uploads/${pub.image}`}
      alt={pub.title}
      style={{
        width: '100px',
        height: '70px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px'
      }}
    />
  )}

  <span className="fw-medium text-dark d-block mb-1">
    {pub.title}
  </span>

  {pub.description && (
    <small className="text-muted d-block">
      {pub.description}
    </small>
  )}

  {pub.category && (
    <span className="badge bg-success mt-2">
      {pub.category}
    </span>
  )}
</div>
                    <div className="text-muted small text-end flex-shrink-0">
                      <div style={{ fontSize: '12px' }}>
                        <img src="/icons/clndr.png" alt="clndr-icon" width="12px" className="me-1" /> 
                        {formatDate(pub.date)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Achievements