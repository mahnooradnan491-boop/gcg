import { useState } from 'react'
import { motion } from 'framer-motion'
import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

function Program() {
  const [searchTerm, setSearchTerm] = useState('')

  const shouldShow = (title, category) => {
    if (!searchTerm) return true
    
    const search = searchTerm.toLowerCase()
    const isCategoryMatch = category.toLowerCase() === search
    const isTitleMatch = title.toLowerCase().includes(search)
    
    return isCategoryMatch || isTitleMatch
  }

  return (
    <>
      <Chatbox />
      <Header />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
        className="program-hero"
      >
        <motion.p
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          className='program-top'
        >
          All the honours degree programs are offered with the affiliation of University of the Punjab
        </motion.p>
        <motion.h1
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
        >
          <b>Offering Following Programs <br /> At GCG.</b>
        </motion.h1>
        <motion.button
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <motion.a href='https://pu.edu.pk/program'
          className='btn btn-successd-inline-flex align-items-center px-4 py-2 text-white text-decoration-none"'> 
  Enroll Now<span className="ps-2"><img src="/icons/arrowup.png" alt="arrow-icon" width="12px" /></span>
       </motion.a>
        </motion.button>
      </motion.div>

      <section className="py-5 bg-light">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center"
          >
            Search for a program
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="d-flex mb-4"
          >
            <input
              type="text"
              placeholder="Search for a course"
              className="form-control rounded-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-secondary rounded-0" onClick={() => setSearchTerm('Bachelors')}>Bachelor</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => setSearchTerm('Masters')}>Masters</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => setSearchTerm('Diploma')}>Diploma</button>
            <button className="btn btn-success rounded-0 px-5 text-nowrap" onClick={() => setSearchTerm('')}>View All</button>
          </motion.div>
          
          <div className="row mt-5">
            {shouldShow("BS Information Technology", "Bachelors") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/computerscience.png" className="card-img-top" alt="Computer Science" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                      Bachelors
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/900098/Department-of-Information-Technology" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        BS  Information Technology 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Mathematics", "Masters") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/civileng.png" className="card-img-top" alt="Civil Engineering" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                      Masters
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/admissions/programes/graduated" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        BS  Mathematics 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Statistics", "Bachelors") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/computerscience.png" className="card-img-top" alt="Computer Science" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                      Bachelors
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/900098/Department-of-Information-Technology" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                       BS  Statistics 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Botany", "Bachelors") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/botny.png" className="card-img-top" alt="Botny" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                      Bachelors
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/4001/Institute-of-Botany" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        BS Botany
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Chemistry", "Masters") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/chemistry.png" className="card-img-top" alt="Chemistry" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                      Masters
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/4401/School-of-Chemistry" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        BS  Chemistry 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS English", "Diploma") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/english.png" className="card-img-top" alt="English" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#198754' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#198754' }}></span>
                      Diploma
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/900419/Institute-of-English-Studies" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                       BS English 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Zoology", "Masters") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/zology.png" className="card-img-top" alt="Zology" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                      Masters
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/6301/Institute-of-Zoology" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                       BS Zoology 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Economics", "Masters") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/economics.png" className="card-img-top" alt="Economics" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                      Masters
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/900371/School-of-Economics" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                       BS Economics 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}

            {shouldShow("BS Physics", "Masters") && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <img src="/physics.png" className="card-img-top" alt="Physics" />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                      <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                      Masters
                    </div>
                    <h6>
                      <a 
                        href="https://pu.edu.pk/program/show/5501/Department-of-Physics" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-block"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                       BS Physics 
                      </a>
                    </h6>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Program