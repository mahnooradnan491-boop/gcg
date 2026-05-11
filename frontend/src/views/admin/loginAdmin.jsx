import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginAdmin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/admin/login', { email, password })
            
            if (res.data) {
                console.log("Admin Data:", res.data)
                setMessage("Admin Login Successful!")
                setTimeout(() => {
                    navigate('/admin/dashboard')
                }, 2000);
            }
        }
        catch (err) {
            setMessage(err.response?.data?.message || "Invalid Admin Credentials")
        }
    };

    return (
        <div className="login-master-wrapper d-flex align-items-center justify-content-center bg-light min-vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <div className="card border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '30px' }}>
                            <div className="card-body p-0">
                                <div className="text-center mb-4">
                                    <img src="/logo.png" alt="GCG Logo" className="img-fluid mb-3" style={{ maxWidth: '120px' }} />
                                    <h2 className="fw-bold text-dark">Admin Portal</h2>
                                    <p className="text-muted small">Enter your credentials to access the dashboard</p>
                                </div>
                                {message && (
                                    <div className={`alert ${message.includes('Successful') ? 'alert-success' : 'alert-danger'} py-2 small text-center`}>
                                        {message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Admin Email</label>
                                        <input 
                                            type="email" 
                                            className="form-control border-0 py-3 px-3 rounded-3" 
                                            style={{ backgroundColor: '#f0f2f5' }}
                                            placeholder="admin@gcg.edu.pk" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label small fw-bold text-muted">Password</label>
                                        </div>
                                        <input 
                                            type="password" 
                                            className="form-control border-0 py-3 px-3 rounded-3" 
                                            style={{ backgroundColor: '#f0f2f5' }}
                                            placeholder="••••••••" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" id="adminCheck" />
                                        <label className="form-check-label small text-muted" htmlFor="adminCheck">
                                            Remember this device
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-success w-100 fw-bold py-3 rounded-3 shadow-sm" style={{ letterSpacing: '1px' }}>
                                        LOGIN TO DASHBOARD
                                    </button>
                                </form>

                                <div className="footer-box mt-5 text-center">
                                    <p className="text-muted mb-0" style={{ fontSize: '11px' }}>
                                        Copyright © 2026 - GCG Admin Panel
                                    </p>
                                    <Link to="/" className="text-decoration-none small fw-bold text-success">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;