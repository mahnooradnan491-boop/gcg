import React, { useState } from 'react'
import './admission.css'
import axios from 'axios'

function Admission() {
  const [step, setStep] = useState(1)


  const [matricFile, setMatricFile] = useState(null)
  const [interFile, setInterFile] = useState(null)

  const handleNext = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()

    data.append('matricSheet', matricFile)
    data.append('interSheet', interFile)

    try {
      const res = await axios.post('/api/admission', data)
      setStep(3)
    } catch (err) {
      alert("Submission failed!")
    }
  }
  return (
    <div className="admission-page container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#c8e2d4', minHeight: '100vh' }}>
      <div className="admission-card bg-white p-4 p-md-5" style={{ borderRadius: '50px', maxWidth: '1000px', width: '95%' }}>

        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
          <div className="d-flex align-items-center">
            <img src="/logo.png" alt="GCG Logo" width="150" className="me-3" />

          </div>
          {step < 3 && (
            <h4 className="fw-bold mt-3 mt-md-0">
              {step === 1 ? "Personal Information" : "Educational Information"}
            </h4>
          )}
        </div>

        <form className="admission-form">

          {step === 1 && (
            <div className="personal-info">
              <div className="row mb-4">
                <div className="col-md-3 mb-3"><label className="form-label">B.FORM / CNIC</label><input type="text" className="form-control" /></div>
                <div className="col-md-3 mb-3"><label className="form-label">Date of Birth</label><input type="date" className="form-control" /></div>
                <div className="col-md-3 mb-3">
                  <label className="form-label">Gender</label>
                  <select className="form-select"><option>Select</option><option>Male</option><option>Female</option></select>
                </div>
                <div className="col-md-3 mb-3"><label className="form-label">Phone No.</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4 mb-3"><label className="form-label">Father Name</label><input type="text" className="form-control" /></div>
                <div className="col-md-4 mb-3"><label className="form-label">Father's CNIC</label><input type="text" className="form-control" /></div>
                <div className="col-md-4 mb-3"><label className="form-label">Guardian Phone No.</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mb-5">
                <div className="col-md-9 mb-3"><label className="form-label">Address</label><input type="text" className="form-control" /></div>
                <div className="col-md-3 mb-3"><label className="form-label">City</label><input type="text" className="form-control" /></div>
              </div>
              <button onClick={handleNext} className="btn w-100 py-3 text-white fw-bold" style={{ backgroundColor: '#419a51', borderRadius: '10px' }}>Next</button>
            </div>
          )}

          {/* STEP 2: EDUCATIONAL INFORMATION */}
          {step === 2 && (
            <div className="educational-info">
              <div className="row mb-4">
                <div className="col-md-3 mb-3"><label className="form-label">Matric Roll No.</label><input type="text" className="form-control" /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Total Marks</label><input type="number" className="form-control" /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Obtained Marks</label><input type="number" className="form-control" /></div>
                <div className="col-md-5 mb-3"><label className="form-label">Scan Result Sheet (PDF, IMAGE)</label><input type="file" className="form-control" /></div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 mb-3"><label className="form-label">Inter Roll No.</label><input type="text" className="form-control" /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Total Marks</label><input type="number" className="form-control" /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Obtained Marks</label><input type="number" className="form-control" /></div>
                <div className="col-md-5 mb-3"><label className="form-label">Scan Result Sheet (PDF, IMAGE)</label><input type="file" className="form-control" /></div>
              </div>
              <button onClick={handleNext} className="btn w-100 py-3 text-white fw-bold" style={{ backgroundColor: '#419a51', borderRadius: '10px' }}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div className="thank-you-section text-center py-4">
              <h1 className="fw-bold mb-2" style={{ fontSize: '60px' }}>Thank You !</h1>
              <p className="text-muted mb-5">Your Request has been received, we will contact back you soon</p>


              <div className="my-5">
                <img
                  src="/icons/thankyou-icon.png"
                  alt="Success Icon"
                  style={{ width: '180px' }}
                />
              </div>
            </div>
          )}
        </form>
        <div className="text-center mt-5 text-muted" style={{ fontSize: '14px' }}>
          Copyright © 2026 - All Rights Reserved. GCG | <a href="/" className="text-success text-decoration-none">Back to site</a>
        </div>
      </div>
    </div>
  )
}

export default Admission