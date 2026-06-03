import { useState, useEffect } from 'react'
import './Admin.css'
import { Link, useNavigate, useParams } from 'react-router'
import api from '../../api.js'

function TimetableManagement() {
    const [timetableData, setTimetableData] = useState({
        className: '',
        date: '',
        timetableImage: null
    })

    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/timetable/${id}`)
                setTimetableData({ timetableImage: null, ...res.data })
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setTimetableData({ ...timetableData, [name]: value })
    }

    const navigate = useNavigate()

    const handleAddTimetable = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('className', timetableData.className)
        data.append('date', timetableData.date)
        data.append('timetableImage', timetableData.timetableImage)

        try {
            const res = await api.put(`/timetable/${id}`, data)
            if (res.data.message == 'Timetable Updated') {
                navigate('/admin/timetable')
            }
        } catch (error) {
            alert(error.message || error)
        }
    }

    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
            <div className="d-flex align-items-center gap-3 mb-3">
                <Link to="/admin/timetable" className="btn btn-outline-secondary btn-sm rounded-3">
                    ← Back
                </Link>
                <h4 className="fw-bold m-0">Time Table Details</h4>
            </div>
            <form onSubmit={handleAddTimetable}>
                <div className="row g-4">
                    {/* Class Name Field */}
                    <div className="col-6">
                        <label className="small fw-bold text-muted mb-1">Class Name</label>
                        <input
                            type="text"
                            name="className"
                            className="form-control bg-light py-2 border-secondary-subtle"
                            value={timetableData.className}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Date Field */}
                    <div className="col-6">
                        <label className="small fw-bold text-muted mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            className="form-control bg-light py-2 border-secondary-subtle"
                            value={timetableData.date.split('T')[0]}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Image Upload Field */}
                    <div className="col-12">
                        <label className="small fw-bold text-muted mb-1">Image</label>
                        <input
                            type="file"
                            className="form-control bg-light py-2 border-secondary-subtle"
                            onChange={(e) => setTimetableData({ ...timetableData, timetableImage: e.target.files[0] })}
                        />
                    </div>

                    {/* Add Button */}
                    <div className="col-12 mt-4 text-end">
                        <button type="submit" className="btn btn-success px-5 py-2 fw-normal rounded-2 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TimetableManagement