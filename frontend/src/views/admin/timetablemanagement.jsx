import { useState, useEffect } from 'react'
import './admin.css'
import { Link } from 'react-router'
import api from '../../api.js'

function TimetableManagement() {
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await api.get('/timetables')
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleRemove = async (id) => {
        if (window.confirm('Are you sure you want to remove this timetable?')) {
            await api.delete(`/timetable/${id}`)
            getData()
        }
    }

    return (
        <div className="container-fluid bg-light gx-0">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <div className='d-flex justify-content-between mb-4'>
                    <h3 className="fw-bold text-dark" style={{ fontSize: '1.6rem' }}>TimetableManagement</h3>
                    <Link to="/admin/timetable/add" className='btn btn-success'>+ ADD timetable</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Class / Program</th>
                                <th className="py-3">Semester</th>
                                <th className="py-3">Department</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!data || data.length === 0 ?
                                (
                                    <tr>
                                        <td>No Data Found</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                                :
                                (data.map((item, index) => (
                                    <tr key={item._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                        <td className="py-3 px-3 fw-bold text-muted">{index + 1}</td>
                                        <td className="py-3 fw-semibold text-dark">{item.class}</td>
                                        <td className="py-3 text-secondary">{item.semester}</td>
                                        <td className="py-3 text-secondary">{item.department}</td>
                                        <td className="py-3 text-end px-3">
                                            <Link className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0 me-3" style={{ fontSize: '0.95rem' }} to={`/admin/timetable/${item._id}`}>
                                                View
                                            </Link>
                                            <button className="btn btn-link text-decoration-underline text-danger fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }} onClick={() => handleRemove(item._id)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TimetableManagement