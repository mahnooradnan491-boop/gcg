import { useEffect, useState } from 'react'
import './admin.css'
import api from '../../api'

function ContactManagement() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const queries = await api.get('/queries')
            setData(queries)
        }
        getData()
    }, [])

    return (
        <div className="container-fluid bg-light gx-0">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.6rem' }}>Query Management</h3>

                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Full Name</th>
                                <th className="py-3">Subject</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((query) => (
                                <tr key={query._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{query._id}</td>
                                    <td className="py-3 fw-semibold text-dark">{query.firstname} {query.lastname}</td>
                                    <td className="py-3 text-secondary">{query.subject}</td>
                                    <td className="py-3 text-end px-3">
                                        <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>
                                            reply
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ContactManagement