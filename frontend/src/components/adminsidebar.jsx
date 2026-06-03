import { useNavigate } from "react-router"
import api from "../api"

function AdminSidebar() {
    const navigate = useNavigate()

    const menuItems = [
        { id: 'admission', label: 'Admission' },
        { id: 'contact', label: 'Contact' },
        { id: 'news', label: 'News' },
        { id: 'events', label: 'Events' },
        { id: 'timetable', label: 'Time Table' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'Success Stories', label: 'Success Stories' },
    ]

    const activeTab = window.location.pathname

    const logout = async () => {
        try {
            const res = await api.get('/admin/logout')
            if (res.data.message == 'logout') {
                localStorage.removeItem('adminUser')
                navigate('/admin')
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark min-vh-100" style={{ backgroundColor: '#1e2125 !important' }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-4 pt-4 text-white min-vh-100">
                <h2 className="fs-3 fw-bold mb-5 mt-2">GCG Admin</h2>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start w-100" id="menu">
                    {menuItems.map((item) => (
                        <li className="nav-item w-100 mb-2" key={item.id}>
                            <button
                                onClick={() => navigate(`/admin/${item.id}`)}
                                className={`nav-link text-white w-100 text-start py-2 px-3 border-0 rounded-3 ${activeTab.slice(7) === item.id ? 'bg-success' : ''}`}
                                style={{ transition: '0.3s' }}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="pb-5 w-100 px-2">
                    <button className="btn btn-outline-light w-100 rounded-pill py-2" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar