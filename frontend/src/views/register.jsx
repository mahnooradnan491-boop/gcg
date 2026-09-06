import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api'

function Register() {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [disable, setDisable] = useState(false)
    
    const [showOTPField, setShowOTPField] = useState(false)
    const [otp, setOtp] = useState('')

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/admission')
        }
    }, [])

    const handleRegister = async (e) => {
        e.preventDefault()
        setDisable(true);

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            setDisable(false);
            return;
        }

        if (password.length < 8) {
            setMessage("Password must be 8 characters long!");
            setDisable(false);
            return;
        }

        try {
            const res = await api.post('http://localhost:3000/api/register', { fullname, email, password })
            if (res.data.message.includes('OTP sent')) {
                setMessage(res.data.message)
                setShowOTPField(true) 
                setDisable(false)
            } else {
                setMessage(res.data.message)
                setDisable(false)
            }
        } catch (err) {
            setMessage(err.response?.data?.message || "Something went wrong!");
            setDisable(false)
        }
    }

    const handleVerifyOTP = async (e) => {
        e.preventDefault()
        setDisable(true)
        try {
            const res = await api.post('http://localhost:3000/api/verify-otp', { email, otp })
            if (res.data.message === 'Verification & Login Successful') {
                localStorage.setItem("user", JSON.stringify(res.data.info))
                navigate('/admission')
            }
        } catch (err) {
            setMessage(err.response?.data?.message || "Invalid OTP!");
            setDisable(false)
        }
    }

    return (
        <div className="login-master-wrapper d-flex align-items-center justify-content-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="main-login-card shadow bg-white p-4 p-md-5">
                            <div className="logo-box text-center">
                                <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                            </div>
                            <div className="text-center mb-4">
                                <h3 className="fw-bold mb-1">{showOTPField ? "Verify Email" : "Create an Account"}</h3>
                                {!showOTPField && <p className="text-muted small">Join us to start growing your future.</p>}
                            </div>
                            
                            {message && <div className={`alert py-2 small ${showOTPField ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
                            
                            {!showOTPField ? (
                                <>
                                    <form className="login-form" onSubmit={handleRegister}>
                                        <div className="mb-2">
                                            <label className="form-label small fw-bold text-muted">Full Name</label>
                                            <input type="text" className="form-control input-style" placeholder="John Doe" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label small fw-bold text-muted">Email Address</label>
                                            <input type="email" className="form-control input-style" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <label className="form-label small fw-bold text-muted">Password</label>
                                                <input type="password" className="form-control input-style" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="8" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small fw-bold text-muted">Confirm Password</label>
                                                <input type="password" className="form-control input-style" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength="8" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success w-100 fw-bold" disabled={disable}>Sign Up</button>
                                    </form>
                                    <div className="mt-4 text-center small text-muted">
                                        <p>Already have an account? <Link to="/login" className="forgot-link fw-bold">Sign In</Link></p>
                                        Copyright © 2026 - All Rights Reserved. GCG <br /> <Link to="/" className="text-success text-decoration-none">Back to site</Link>
                                    </div>
                                </>
                            ) : (
                                <form className="login-form" onSubmit={handleVerifyOTP}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Enter 6-digit OTP sent to {email}</label>
                                        <input type="text" className="form-control input-style text-center" placeholder="123456" value={otp} onChange={(e) => setOtp(e.target.value)} required maxLength="6" />
                                    </div>
                                    <button type="submit" className="btn btn-success w-100 fw-bold" disabled={disable}>Verify & Login</button>
                                </form>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;