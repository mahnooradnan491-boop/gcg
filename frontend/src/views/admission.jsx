import React, { useEffect, useState } from 'react'
import './admission.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'
import api from '../api.js'

function Admission() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [cnic, setCnic] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('Select')
  const [phone, setPhone] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [fatherCnic, setFatherCnic] = useState('')
  const [guardianPhone, setGuardianPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const [matricRoll, setMatricRoll] = useState('')
  const [matricTotal, setMatricTotal] = useState('')
  const [matricObtained, setMatricObtained] = useState('')
  const [matricFile, setMatricFile] = useState(null)

  const [interRoll, setInterRoll] = useState('')
  const [interTotal, setInterTotal] = useState('')
  const [interObtained, setInterObtained] = useState('')
  const [interFile, setInterFile] = useState(null)

  const [program, setProgram] = useState('')
  const [timing, setTiming] = useState('Morning')

  const [btn, setBtn] = useState("Submit")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/login')
    }
    const fetchData = async () => {
      const res = await api.get('/admission')
      if (res.data) {
        setCnic(res.data.cnic)
        setDob(res.data.dob.split('T')[0])
        setGender(res.data.gender)
        setPhone(res.data.phone)
        setFatherName(res.data.fatherName)
        setFatherCnic(res.data.fatherCnic)
        setGuardianPhone(res.data.guardianPhone)
        setAddress(res.data.address)
        setCity(res.data.city)
        setMatricRoll(res.data.matricRoll)
        setMatricTotal(res.data.matricTotal)
        setMatricObtained(res.data.matricObtained)
        setInterRoll(res.data.interRoll)
        setInterTotal(res.data.interTotal)
        setInterObtained(res.data.interObtained)
        setProgram(res.data.program)
        setTiming(res.data.timing)
        setBtn("Update")
      }
    }
    fetchData()
  }, [])

  const handleNext = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const logout = async () => {
    try {
      const res = await api.get('/logout')
      if (res.data.message == 'logout') {
        localStorage.removeItem('user')
        navigate('/login')
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('cnic', cnic)
    data.append('dob', dob)
    data.append('gender', gender)
    data.append('phone', phone)
    data.append('fatherName', fatherName)
    data.append('fatherCnic', fatherCnic)
    data.append('guardianPhone', guardianPhone)
    data.append('address', address)
    data.append('city', city)
    data.append('matricRoll', matricRoll)
    data.append('matricTotal', matricTotal)
    data.append('matricObtained', matricObtained)
    data.append('matricSheet', matricFile)
    data.append('interRoll', interRoll)
    data.append('interTotal', interTotal)
    data.append('interObtained', interObtained)
    data.append('interSheet', interFile)
    data.append('program', program)
    data.append('timing', timing)

    try {
      if (btn == "Update") {
        const res = await api.put('/admission', data)
        if (res.data.message == 'Updated') {
          setStep(3)
        }
        return
      }
      const res = await api.post('/admission', data)
      if (res.data.message == 'Created') {
        setStep(3)
      }
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
          <div className="d-flex gap-3 align-items-center">
            {step > 1 && (
              <button className="btn btn-outline-success" onClick={() => setStep(step - 1)}>Back</button>
            )}
            {step < 3 && (
              <h4 className="fw-bold mt-3 mt-md-0 mb-0">
                {step === 1 ? "Personal Information" : "Educational Information"}
              </h4>
            )}
          </div>
        </div>

        <form className="admission-form" onSubmit={handleSubmit}>

          {step === 1 && (
            <div className="personal-info">
              <div className="row">
                <div className="col-md-3 mb-3"><label className="form-label">B.FORM / CNIC</label><input type="text" className="form-control" value={cnic} onChange={(e) => setCnic(e.target.value)} /></div>
                <div className="col-md-3 mb-3"><label className="form-label">Date of Birth</label><input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
                <div className="col-md-3 mb-3">
                  <label className="form-label">Gender</label>
                  <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3"><label className="form-label">Phone No.</label><input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3"><label className="form-label">Father Name</label><input type="text" className="form-control" value={fatherName} onChange={(e) => setFatherName(e.target.value)} /></div>
                <div className="col-md-4 mb-3"><label className="form-label">Father's CNIC</label><input type="text" className="form-control" value={fatherCnic} onChange={(e) => setFatherCnic(e.target.value)} /></div>
                <div className="col-md-4 mb-3"><label className="form-label">Guardian Phone No.</label><input type="text" className="form-control" value={guardianPhone} onChange={(e) => setGuardianPhone(e.target.value)} /></div>
              </div>
              <div className="row">
                <div className="col-md-9 mb-3"><label className="form-label">Address</label><input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} /></div>
                <div className="col-md-3 mb-3"><label className="form-label">City</label><input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} /></div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Program</label>
                  <select className="form-select" value={program} onChange={(e) => setProgram(e.target.value)}>
                    <option value="">Select Program</option>
                    <option value="BSIT">BS Information Technology</option>
                    <option value="BSCS">BS Computer Science</option>
                    <option value="BSSE">BS Software Engineering</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Timing</label>
                  <select className="form-select" value={timing} onChange={(e) => setTiming(e.target.value)}>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
              <button onClick={handleNext} className="btn w-100 py-3 text-white fw-bold mt-3" style={{ backgroundColor: '#419a51', borderRadius: '10px' }}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div className="educational-info">
              <div className="row mb-4">
                <div className="col-md-3 mb-3"><label className="form-label">Matric Roll No.</label><input type="text" className="form-control" value={matricRoll} onChange={(e) => setMatricRoll(e.target.value)} /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Total Marks</label><input type="number" className="form-control" value={matricTotal} onChange={(e) => setMatricTotal(e.target.value)} /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Obtained Marks</label><input type="number" className="form-control" value={matricObtained} onChange={(e) => setMatricObtained(e.target.value)} /></div>
                <div className="col-md-5 mb-3"><label className="form-label">Scan Result Sheet (PDF, IMAGE)</label><input type="file" className="form-control" onChange={(e) => setMatricFile(e.target.files[0])} /></div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 mb-3"><label className="form-label">Inter Roll No.</label><input type="text" className="form-control" value={interRoll} onChange={(e) => setInterRoll(e.target.value)} /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Total Marks</label><input type="number" className="form-control" value={interTotal} onChange={(e) => setInterTotal(e.target.value)} /></div>
                <div className="col-md-2 mb-3"><label className="form-label">Obtained Marks</label><input type="number" className="form-control" value={interObtained} onChange={(e) => setInterObtained(e.target.value)} /></div>
                <div className="col-md-5 mb-3"><label className="form-label">Scan Result Sheet (PDF, IMAGE)</label><input type="file" className="form-control" onChange={(e) => setInterFile(e.target.files[0])} /></div>
              </div>
              <button type="submit" className="btn w-100 py-3 text-white fw-bold" style={{ backgroundColor: '#419a51', borderRadius: '10px' }}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div className="thank-you-section text-center py-4">
              <h1 className="fw-bold mb-2" style={{ fontSize: '60px' }}>Thank You !</h1>
              <p className="text-muted mb-5">Your Request has been {btn}, we will contact back you soon</p>
              <div>
                <img
                  src="/icons/approved.gif"
                  alt="Success Icon"
                  style={{ width: '180px' }}
                />
              </div>
            </div>
          )}
        </form>
        <div className="text-center mt-3 text-muted" style={{ fontSize: '14px' }}>
          Copyright © 2026 - All Rights Reserved. GCG | <Link to="/" className="text-success text-decoration-none">Back to site</Link> | <button className='border-0 bg-white text-danger fw-bold' onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Admission