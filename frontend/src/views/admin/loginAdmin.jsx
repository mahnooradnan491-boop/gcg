import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../api'

function LoginAdmin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [disable, setDisable] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        const admin = localStorage.getItem('adminUser')
        if (admin) {
            navigate('/admin/dashboard')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisable(true)
        setMessage('')

        if (password.length < 8) {
            setMessage("Password must be 8 characters long!")
            setDisable(false)
            return
        }

        try {
            const res = await api.post('/admin/login', { email, password })
            if (res.data.message == 'login') {
                setIsSuccess(true)
                setMessage("Admin Login Successful!")
                localStorage.setItem("adminUser", JSON.stringify(res.data.info))

                setTimeout(() => {
                    navigate('/admin/dashboard')
                }, 2000)
            }
        } catch (err) {
            setIsSuccess(false)
            setDisable(false)
            setMessage(err.response?.data?.message || "Invalid Admin Credentials!")
        }
    }

    return (
        <div className="login-master-wrapper d-flex align-items-center justify-content-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-5">
                        <div className="main-login-card shadow p-4 p-md-5 text-center">
                            <div className="logo-box text-center mb-3">
                                <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '120px' }} />
                            </div>

                            <div className="text-center mb-4">
                                <h3 className="fw-bold mb-1" style={{ color: '#2b3a33' }}>Admin Portal</h3>
                                <p className="text-muted small">Enter your credentials to access the dashboard</p>
                            </div>
                            {message && (
                                <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} py-2 small mb-3 text-center`}>
                                    {message}
                                </div>
                            )}
                            <form className="login-form text-start" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small fw-bold text-muted mb-1">Admin Email</label>
                                    <input
                                        type="email"
                                        className="form-control input-style"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label small fw-bold text-muted mb-1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control input-style"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="text-center mb-4 mt-3">
                                    <span className="text-muted opacity-75 small" style={{ fontSize: '12px', cursor: 'pointer' }}>
                                        Remember this device
                                    </span>
                                </div>
                                <button type="submit" className="btn btn-success w-100 fw-bold py-2" disabled={disable}>
                                    {disable && isSuccess ? "REDIRECTING..." : "LOGIN TO DASHBOARD"}
                                </button>
                            </form>
                            <div className="mt-5 text-center small text-muted" style={{ fontSize: '12px' }}>
                                <p className="mb-1" style={{ opacity: 0.7 }}>
                                    Copyright © 2026 - GCG Admin Panel
                                </p>
                                <Link to="/" className="text-success text-decoration-none fw-bold">
                                    Back to Home
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin