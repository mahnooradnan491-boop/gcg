import { useEffect, useState } from 'react'
import './admin.css'
import { Link } from 'react-router'
import api from '../../api'

function NewsManagement() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const news = await api.get('/news')
            setData(news)
        }
        getData()
    }, [])

    return (
        <div className="container-fluid bg-light gx-0">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <div className='d-flex justify-content-between mb-4'>
                    <h3 className="fw-bold text-dark" style={{ fontSize: '1.6rem' }}>News Management</h3>
                    <Link to="/admin/news/add" className='btn btn-success'>+ ADD NEWS</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Title</th>
                                <th className="py-3">Posted By</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((news) => (
                                <tr key={news._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{news._id}</td>
                                    <td className="py-3 text-secondary">{news.date}</td>
                                    <td className="py-3 fw-semibold text-dark">{news.title}</td>
                                    <td className="py-3 text-secondary">{news.postedBy}</td>
                                    <td className="py-3 text-end px-3">
                                        <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0 me-3" style={{ fontSize: '0.95rem' }}>View</button>
                                        <button className="btn btn-link text-decoration-underline text-danger fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>Remove</button>
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

export default NewsManagement