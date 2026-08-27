import { useEffect, useState } from 'react'
import './admin.css'
import api from '../../api'
import { Link } from 'react-router'

function AdmissionManagement() {

    const [data, setData] = useState([])
    const [statusFilter, setStatusFilter] = useState('all')
    const [loading, setLoading] = useState(true)

  
    const getData = async () => {
        try {
            setLoading(true)

            const res = await api.get('/admissions')

            setData(res.data)

        } catch (error) {

            console.error("Error fetching admissions:", error)

        } finally {

            setLoading(false)

        }
    }

    useEffect(() => {
        getData()
    }, [])

    const filteredData = data.filter((student) => {

        if (statusFilter === 'all') {
            return true
        }

        return student.status === statusFilter

    })


    return (
        <div className="container-fluid bg-light gx-0">

            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">

            
                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h3
                        className="fw-bold m-0 text-dark"
                        style={{ fontSize: '1.6rem' }}
                    >
                        Admission Management
                    </h3>

                    <div>

                        <button
                            type="button"
                            onClick={() => setStatusFilter('all')}
                            className={`btn btn-sm me-2 rounded-3 px-4 py-2 fw-semibold ${
                                statusFilter === 'all'
                                    ? 'btn-success'
                                    : 'btn-outline-secondary'
                            }`}
                        >
                            All
                        </button>

                        <button
                            type="button"
                            onClick={() => setStatusFilter('approved')}
                            className={`btn btn-sm me-2 rounded-3 px-4 py-2 fw-semibold ${
                                statusFilter === 'approved'
                                    ? 'btn-success'
                                    : 'btn-outline-secondary'
                            }`}
                        >
                            Approved
                        </button>


                        <button
                            type="button"
                            onClick={() => setStatusFilter('declined')}
                            className={`btn btn-sm rounded-3 px-4 py-2 fw-semibold ${
                                statusFilter === 'declined'
                                    ? 'btn-danger'
                                    : 'btn-outline-secondary'
                            }`}
                        >
                            Decline
                        </button>

                    </div>

                </div>


                <div className="table-responsive">

                    <table
                        className="table table-hover align-middle m-0"
                        style={{
                            borderTop: '1px solid #f0f0f0'
                        }}
                    >

                        <thead className="table-light text-muted">

                            <tr>

                                <th className="py-3 px-3">#</th>

                                <th className="py-3">
                                    Full Name
                                </th>

                                <th className="py-3">
                                    Father Name
                                </th>

                                <th className="py-3">
                                    Program
                                </th>

                                <th className="py-3">
                                    Timing
                                </th>

                                <th className="py-3">
                                    Status
                                </th>

                                <th className="py-3 text-end px-3">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {loading ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-5"
                                    >
                                        Loading admissions...
                                    </td>

                                </tr>

                            ) : filteredData.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-5 text-muted"
                                    >
                                        No {statusFilter === 'all'
                                            ? ''
                                            : statusFilter} admissions found.
                                    </td>

                                </tr>

                            ) : (

                                filteredData.map((student, index) => (

                                    <tr
                                        key={student._id}
                                        style={{
                                            borderBottom:
                                                '1px solid #f8f9fa'
                                        }}
                                    >

                                        <td className="py-3 px-3 fw-bold text-muted">
                                            {index + 1}
                                        </td>


                                        <td className="py-3 fw-semibold text-dark">
                                            {student.userid?.fullname}
                                        </td>


                                        <td className="py-3 text-secondary">
                                            {student.fatherName}
                                        </td>


                                        <td className="py-3 text-secondary">
                                            {student.program}
                                        </td>


                                        <td className="py-3 text-secondary">
                                            {student.timing}
                                        </td>

                                        <td className="py-3">

                                            {student.status === 'approved' ? (

                                                <span className="badge bg-success px-3 py-2">
                                                    Approved
                                                </span>

                                            ) : student.status === 'declined' ? (

                                                <span className="badge bg-danger px-3 py-2">
                                                    Declined
                                                </span>

                                            ) : (

                                                <span className="badge bg-warning text-dark px-3 py-2">
                                                    Pending
                                                </span>

                                            )}

                                        </td>

                                        <td className="py-3 text-end px-3">

                                            <Link
                                                to={`/admin/admission/${student._id}`}
                                                className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0"
                                                style={{
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                Show
                                            </Link>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default AdmissionManagement