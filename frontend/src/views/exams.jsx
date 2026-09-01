import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import './exams.css'

function Exams() {
  return (
    <>
      <Chatbox />
      <Header />

    <div className="exams-page" style={{ backgroundColor: '#fafafa', minHeight: '100vh', overflowX: 'hidden' }}>
      
      
      <div className="exam-hero text-center d-flex align-items-center justify-content-center flex-column py-5" style={{ backgroundColor: '#f4f6f8', borderBottom: '1px solid #e2e8f0' }}>
        <motion.span 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-success small fw-semibold text-uppercase tracking-wider mb-2" 
          style={{ fontSize: '13px', letterSpacing: '1.5px' }}
        >
          Contributions that leads to better Pakistan
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="fw-bold text-dark display-5 mb-4" 
          style={{ color: '#1a202c', letterSpacing: '-0.5px' }}
        >
          Focusing the quality <br /> Education
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="py-3 px-5 text-white fw-bold rounded-2 shadow-sm" 
          style={{ backgroundColor: '#419a51', fontSize: '20px', minWidth: '35%' }}
        >
          Examinations
        </motion.div>
      </div>

      
      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            
         
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card shadow-sm border-0 p-4 p-md-5 rounded-4 mb-5 bg-white"
            >
              <h2 className="fw-bold text-success mb-4 position-relative pb-2 border-bottom text-center text-md-start">
                Examination System
              </h2>
              
             
              <p className="exam-paragraph text-muted mb-0">
                Our college is proudly affiliated with the esteemed <strong className="text-dark">University of the Punjab</strong>. 
                As a testament to this affiliation, the examination process for all the honours degree 
                programs offered at our college is meticulously set and coordinated by the university. 
                This collaboration ensures that our students undergo rigorous and standardized assessments 
                in line with the academic standards and guidelines set out by the university. The 
                examinations are designed to assess the comprehension of the curriculum and the ability 
                of students to apply acquired knowledge. This affiliation with the University of the 
                Punjab not only adds credibility to our academic programs but also provides students with 
                an opportunity to earn degrees recognized for their quality and relevance in the broader 
                academic and professional communities.
              </p>
            </motion.div>

            
            <div className="useful-links-section">
              <motion.h3 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="fw-bold mb-4 text-dark px-2"
              >
                Useful links for BS degree programs:
              </motion.h3>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ x: 4 }}
                    className="h-100"
                  >
                    <a href="http://pu.edu.pk/home/datesheets/" target="_blank" rel="noreferrer" className="text-decoration-none d-block h-100">
                      <div className="link-card d-flex align-items-center p-3 bg-white shadow-sm rounded-3 border-start border-success border-4 h-100 transition-all">
                        <div className="icon-box bg-success bg-opacity-10 text-success p-3 rounded-circle me-3">
                          <img src="/icons/calender.png" alt="icon" width="25px" /> 
                        </div>
                        <div>
                          <h5 className="fw-bold text-dark mb-1">Date Sheets</h5>
                          <p className="text-muted small mb-0">Check your upcoming exam schedule</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>

             
                <div className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ x: 4 }}
                    className="h-100"
                  >
                    <a href="http://pu.edu.pk/home/results/" target="_blank" rel="noreferrer" className="text-decoration-none d-block h-100">
                      <div className="link-card d-flex align-items-center p-3 bg-white shadow-sm rounded-3 border-start border-success border-4 h-100 transition-all">
                        <div className="icon-box bg-success bg-opacity-10 text-success p-3 rounded-circle me-3">
                          🎓
                        </div>
                        <div>
                          <h5 className="fw-bold text-dark mb-1">Results</h5>
                          <p className="text-muted small mb-0">View latest academic results from PU</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ x: 4 }}
                    className="h-100"
                  >
                    <a href="http://pu.edu.pk/splash/allied" target="_blank" rel="noreferrer" className="text-decoration-none d-block h-100">
                      <div className="link-card d-flex align-items-center p-3 bg-white shadow-sm rounded-3 border-start border-success border-4 h-100 transition-all">
                        <div className="icon-box bg-success bg-opacity-10 text-success p-3 rounded-circle me-3">
                          🎟️
                        </div>
                        <div>
                          <h5 className="fw-bold text-dark mb-1">Download Roll No. Slips</h5>
                          <p className="text-muted small mb-0">Get your examination entry slips</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>
                
                <div className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ x: 4 }}
                    className="h-100"
                  >
                    <a href="http://pu.edu.pk/home/exam_news" target="_blank" rel="noreferrer" className="text-decoration-none d-block h-100">
                      <div className="link-card d-flex align-items-center p-3 bg-white shadow-sm rounded-3 border-start border-success border-4 h-100 transition-all">
                        <div className="icon-box bg-success bg-opacity-10 text-success p-3 rounded-circle me-3">
                          📰
                        </div>
                        <div>
                          <h5 className="fw-bold text-dark mb-1">Examination News</h5>
                          <p className="text-muted small mb-0">Stay updated with critical exam notices</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
      <Footer />
    </>
  )
}

export default Exams