import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="achievements-hero-flex"
          >
            <div className="hero-text">
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hero-top"
              >
                Contributions that leads to better Pakistan
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hero-h1"
              >
                Focusing the quality <br /> Education
              </motion.h1>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="recent-banner"
          >
            <h2>Achievement that speaks</h2>
          </motion.div>
          
          <div className="mt-5">
            <p className="text-muted small mb-1 ls-wide">YEARLY</p>
            <h2 className="fw-bold mb-4">PASS RATIO</h2>
            <div className="ratio-list mx-auto" style={{ maxWidth: '900px' }}>
              {passRatios.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="d-flex justify-content-between align-items-center bg-light p-3 mb-2 rounded shadow-sm"
                >
                  <span className="fw-medium">{item.title}</span>
                  <Link to={`/achievements/chart/${item.year}`} className="btn btn-sm btn-success px-3 fw-bold">
                    View
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-5 text-start mx-auto" style={{ maxWidth: '900px' }}>
            <h2 className="fw-bold mb-4 text-center">Paper Publications & Achievements</h2>

            <div className="pub-list">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center my-4 text-muted"
                >
                  Loading achievements...
                </motion.div>
              ) : publications.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center my-4 text-muted"
                >
                  No achievements found.
                </motion.div>
              ) : (
                publications.map((pub, index) => (
                  <motion.div
                    key={pub._id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="d-flex justify-content-between align-items-center bg-light p-4 mb-3 rounded shadow-sm"
                  >
                    <div>
                      {pub.image && (
                        <motion.img
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          src={`http://localhost:3000/uploads/${pub.image.split(/[\\/]/).pop()}`}
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
                        <img
                          src="/icons/clndr.png"
                          alt="clndr-icon"
                          width="12px"
                          className="me-1"
                        /> 
                        {formatDate(pub.date)}
                      </div>
                    </div>
                  </motion.div>
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