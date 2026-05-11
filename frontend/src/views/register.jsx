import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post('/api/register', { fullname, email, password })
            setMessage(res.data.message || "Registration Successful!");
        } catch (err) {
            setMessage(err.response?.data?.message || "Something went wrong!");
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
                                <h3 className="fw-bold mb-1">Create an Account</h3>
                                <p className="text-muted small">Join us to start growing your future.</p>
                            </div>
                            {message && <div className="alert alert-info py-2 small">{message}</div>}
                            <form className="login-form" onSubmit={handleSubmit}>
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
                                        <input type="password" className="form-control input-style" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-bold text-muted">Confirm Password</label>
                                        <input type="password" className="form-control input-style" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success w-100 fw-bold">Sign Up</button>
                            </form>
                            <div className="mt-4 text-center">
                                <p className="small text-muted">
                                    Already have an account? <Link to="/login" className="forgot-link fw-bold">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;