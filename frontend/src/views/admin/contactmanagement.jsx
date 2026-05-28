import { useEffect, useState } from 'react'
import './admin.css'
import api from '../../api'
import { Link } from 'react-router-dom'

function ContactManagement() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await api.get('/contacts')
            setData(res.data)
        }
        getData()
    }, [])

    return (
        <div className="container-fluid bg-light gx-0">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.6rem' }}>Contact Management</h3>

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
                            {!data || data.length === 0 ?
                                (
                                    <tr>
                                        <td>No Data Found</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                                :
                                (data?.map((contact, index) => (
                                    <tr key={contact._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                        <td className="py-3 px-3 fw-bold text-muted">{index + 1}</td>
                                        <td className="py-3 fw-semibold text-dark">{contact.firstName} {contact.lastName}</td>
                                        <td className="py-3 text-secondary">{contact.subject}</td>
                                        <td className="py-3 text-end px-3">
                                            <Link to={`/admin/contact/${contact._id}`} className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>
                                                reply
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ContactManagement