import React, { useState, useEffect } from 'react'
import './admin.css'
import { Link } from 'react-router'


function EventManagement() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const event = await api.get('/event')
            setData(event)
        }
        getData()
    }, [])

    return (
        <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
            <div className='d-flex justify-content-between mb-4'>
                <h3 className="fw-bold text-dark" style={{ fontSize: '1.6rem' }}>EventManagement</h3>
                <Link to="/admin/event/add" className='btn btn-success'>+ ADD event</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                    <thead className="table-light text-muted">
                        <tr>
                            <th className="py-3 px-3">#</th>
                            <th className="py-3">Event Title</th>
                            <th className="py-3">Date</th>
                            <th className="py-3">Venue</th>
                            <th className="py-3 text-end px-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                <td className="py-3 px-3 fw-bold text-muted">{item._id}</td>
                                <td className="py-3 fw-semibold text-dark">{item.title}</td>
                                <td className="py-3 text-secondary">{item.date}</td>
                                <td className="py-3 text-secondary">{item.venue}</td>
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
    )
}

export default EventManagement