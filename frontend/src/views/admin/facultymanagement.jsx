import React, { useState, useEffect } from 'react'
import './admin.css'
import { Link } from 'react-router'

function FacultyManagement() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const faculties = await api.get('/faculties')
            setData(faculties)
        }
        getData()
    }, [])

    return (
        <div className="container-fluid bg-light gx-0">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <div className='d-flex justify-content-between mb-4'>
                    <h3 className="fw-bold text-dark" style={{ fontSize: '1.6rem' }}>FacultyManagement</h3>
                    <Link to="/admin/faculty/add" className='btn btn-success'>+ ADD faculty</Link>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Teacher Name</th>
                                <th className="py-3">Designation</th>
                                <th className="py-3">Department</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((member) => (
                                <tr key={member.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{member.id}</td>
                                    <td className="py-3 fw-semibold text-dark">{member.name}</td>
                                    <td className="py-3 text-secondary">{member.designation}</td>
                                    <td className="py-3 text-secondary">{member.department}</td>
                                    <td className="py-3 text-end px-3">
                                        <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>
                                            Add
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FacultyManagement;