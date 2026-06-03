import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../../api.js'
import './Admin.css'

function FacultyInfo() {
    const [facultyData, setFacultyData] = useState({
        fullName: '',
        department: '',
        designation: '',
        image: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFacultyData({ ...facultyData, [name]: value })
    }

    const navigate = useNavigate()

    const handleAdd = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('fullName', facultyData.fullName)
        data.append('department', facultyData.department)
        data.append('designation', facultyData.designation)
        data.append('image', facultyData.image)

        try {
            const res = await api.post('/faculty/add', data)
            if (res.data.message == 'Faculty Created') {
                navigate('/admin/faculty')
            }
        } catch (error) {
            alert(error.message || error)
        }
    }
    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
            <div className="d-flex align-items-center gap-3 mb-3">
                <Link to="/admin/faculty" className="btn btn-outline-secondary btn-sm rounded-3">
                    ← Back
                </Link>
                <h4 className="fw-bold m-0">Faculty Details</h4>
            </div>
            <form onSubmit={handleAdd}>
                <div className="row g-4">
                    <div className="col-4">
                        <label className="small fw-bold text-muted mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-control bg-light py-2"
                            placeholder="Enter Full Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-4">
                        <label className="small fw-bold text-muted mb-1">Department</label>
                        <input
                            type="text"
                            name="department"
                            className="form-control bg-light py-2"
                            placeholder="Enter Department"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-4">
                        <label className="small fw-bold text-muted mb-1">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            className="form-control bg-light py-2"
                            placeholder="Enter Designation"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Image</label>
                        <input
                            type="file"
                            className="form-control bg-light py-2"
                            onChange={(e) => setFacultyData({ ...facultyData, image: e.target.files[0] })}
                        />
                    </div>
                    <div className="col-12 mt-4 text-end">
                        <button type="submit" className="btn btn-success px-5 fw-bold rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FacultyInfo