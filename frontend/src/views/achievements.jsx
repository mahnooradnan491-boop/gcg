import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react'
import './achievements.css'

function Achievements() {
  const passRatios = [
    { year: "2026", title: "Pass Ratio of BSIT Fall Batch 2026" },
    { year: "2025", title: "Pass Ratio of BSIT Fall Batch 2025" },
    { year: "2024", title: "Pass Ratio of BSIT Fall Batch 2024" },
    { year: "2023", title: "Pass Ratio of BSIT Fall Batch 2023" },
  ];

  const publications = [
    { title: "Retirement program teaching and no teaching staff", date: "10 August, 2026" },
    { title: "Plant For Pakistan 2025", date: "10 August, 2026" },
  ];

  return (

     <>
      <Chatbox />
      <Header />
    <div className="achievements-container bg-white pb-5">
     
      <div className="container text-center py-5">
        <p className="text-success small fst-italic mb-2">Contributions that leads to better Pakistan</p>
        <h1 className="fw-bold display-4 mb-4">Focusing the quality <br /> Education</h1>
        
        <div className="achievement-banner py-3 mb-5" style={{ backgroundColor: '#419a51', borderRadius: '5px' }}>
          <h2 className="text-white m-0 fw-normal">Achievement that speaks</h2>
        </div>

        
        <div className="mt-5">
          <p className="text-muted small mb-1 ls-wide">YEARLY</p>
          <h2 className="fw-bold mb-4">PASS RATIO</h2>
          
          <div className="ratio-list mx-auto" style={{ maxWidth: '900px' }}>
            {passRatios.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center bg-light p-3 mb-2 rounded shadow-sm">
                <span className="fw-medium">{item.title}</span>
                <a href="#" className="text-dark small text-decoration-none fw-bold">View</a>
              </div>
            ))}
          </div>
        </div>

       
        <div className="mt-5 text-start mx-auto" style={{ maxWidth: '900px' }}>
          <h2 className="fw-bold mb-4">Paper Publications</h2>
          
          <div className="pub-list">
            {publications.map((pub, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center bg-light p-4 mb-2 rounded shadow-sm">
                <span className="fw-medium text-dark">{pub.title}</span>
                <div className="text-muted small">
                  <i className="bi bi-calendar3 me-2"></i> 
                  <span style={{fontSize: '12px'}}><img src="/icons/clndr.png" alt="clndr-icon" width="12px" /> {pub.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Achievements;