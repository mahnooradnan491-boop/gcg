import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid border-1 border-bottom px-0">
                <Link to="/" className="pe-4"><img src="/logo.png" alt="Site Logo" width="250px" /></Link>
                <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#header">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column align-items-start border-start border-1" id="header">
                    <marquee className="py-2 px-4 text-success border-1 border-bottom w-100">
                        This Place is for Moving Notification for visitor + Important Notice + Call Us etc.
                    </marquee>
                    <div className="w-100 d-flex justify-content-between align-items-lg-center flex-column flex-lg-row">
                        <ul className="navbar-nav px-3">
                            <li>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/admission" className="nav-link">Admission</Link>
                            </li>
                            <li>
                                <Link to="/programs" className="nav-link">Programs</Link>
                            </li>
                            <li>
                                <Link to="/#timetable" className="nav-link">Time Table</Link>
                            </li>
                            <li>
                                <Link to="/#newsevents" className="nav-link">News & Events</Link>
                            </li>
                            <li>
                                <Link to="/faculty" className="nav-link">Faculty</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/login" className="btn btn-success rounded-0 py-3 px-5">Login <span className="ps-2"><img src="/icons/arrowup.png" alt="arrow-icon" width="12px" /></span></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;