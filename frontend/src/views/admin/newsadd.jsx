import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../../api.js'

function NewsAdd() {
    const [newsData, setNewsData] = useState({
        postedBy: '',
        date: '',
        category: '',
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewsData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const navigate = useNavigate()

    const handlePublish = async (e) => {
        e.preventDefault()
        const { postedBy, date, category, title, description } = newsData
        try {
            const res = await api.post('/news/add', { postedBy, date, category, title, description })
            if (res.data.message == 'News Created') {
                navigate('/admin/news')
            }
        } catch (error) {
            alert(error.message || error)
        }
    }

    return (
        <div className="content-card bg-white rounded-4 p-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-3">
                    <Link to="/admin/news" className="btn btn-outline-secondary btn-sm rounded-3">
                        ← Back
                    </Link>
                    <h4 className="fw-bold m-0">News Details</h4>
                </div>
            </div>

            <form onSubmit={handlePublish}>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Posted By</label>
                        <input type="text" name="postedBy" className="form-control bg-light" placeholder="Admin Name" value={newsData.postedBy} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Date</label>
                        <input type="date" name="date" className="form-control bg-light" value={newsData.date} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="small fw-bold text-muted mb-1">Category</label>
                        <select name="category" className="form-select bg-light" value={newsData.category} onChange={handleChange}>
                            <option value="">Select Category</option>
                            <option value="General Notice">General Notice</option>
                            <option value="News">News</option>
                            <option value="Exam Date Sheet">Exam Date Sheet</option>
                        </select>
                    </div>
                    <div className="col-12 mt-3">
                        <label className="small fw-bold text-muted mb-1">Title</label>
                        <input type="text" name="title" className="form-control bg-light" placeholder="Enter news title" value={newsData.title} onChange={handleChange} />
                    </div>
                    <div className="col-12 mt-3">
                        <label className="small fw-bold text-muted mb-1">Description</label>
                        <textarea name="description" className="form-control bg-light" rows="6" placeholder="Enter full news description" value={newsData.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12 mt-4 text-end">
                        <button type="submit" className="btn btn-success px-5 py-2 fw-bold rounded-3" style={{ backgroundColor: '#419a51', border: 'none' }}>Publish</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewsAdd