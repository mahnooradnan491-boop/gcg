import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='border-top border-1'>
                <div className='container py-3'>
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-start">
                            <Link to="/"><img src="/logo.png" alt="Site Logo" /></Link>
                            <div className='mt-3'>
                                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
                                    <img src="/icons/fblogo.png" alt="Facebook" width="40" />
                                </Link>
                                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
                                    <img src="/icons/instalogo.png" alt="Instagram" width="40" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center text-lg-end mt-4 mt-lg-0">
                            <h2>Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/#newsevents" className="nav-link">News & Events</Link></li>
                                <li><Link to="/programs" className="nav-link">Programs</Link></li>
                                <li><Link to="/faculty" className="nav-link">Faculty</Link></li>
                                <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
                                <li><Link to="/student/login" className="nav-link">Student Login</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 text-center text-lg-end">
                            <h2>Resources</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/admission" className="nav-link">Enroll Now</Link></li>
                                <li><Link to="/programs" className="nav-link">How to Apply</Link></li>
                                <li><Link to="/faculty" className="nav-link">Tuition Fees, Scholarship</Link></li>
                                <li><Link to="/gallery" className="nav-link">Mission & Vision</Link></li>
                                <li><Link to="/about" className="nav-link">About</Link></li>
                                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-top border-1'>
                <div className='container py-3'>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className='mb-0'>&copy; 2026 GCG. All rights reserved.</p>
                        </div>
                        <div>
                            <p className='mb-0'>Government Graduate College, Gujranwala</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer