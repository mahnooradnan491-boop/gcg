import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import './Admin.css'
import api from '../../api'

function AchievementShow() {
    const [activeTab, setActiveTab] = useState('achievements')

    const [achievementData, setAchievementData] = useState({
        title: '',
        description: '',
        image: null,
        date: '',
        category: 'Academic'
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setAchievementData({ ...achievementData, [name]: value })
    }

    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/achievement/${id}`)
                setAchievementData({ image: null, ...res.data })
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [id])

    const navigate = useNavigate()

    const handleAddAchievement = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append('title', achievementData.title)
        data.append('description', achievementData.description)
        data.append('date', achievementData.date)
        data.append('category', achievementData.category)
        data.append('image', achievementData.image)

        try {
            const res = await api.put(`/achievement/${id}`, data)
            if (res.data.message == 'Achievement Updated') {
                navigate('/admin/achievements')
            }
        } catch (error) {
            alert(error.message || error);
        }
    }

    return (
        <div className="content-card bg-white p-5 rounded-4 shadow-sm border-0">
            <div className="d-flex align-items-center gap-3 mb-3">
                <Link to="/admin/achievements" className="btn btn-outline-secondary btn-sm rounded-3">
                    ← Back
                </Link>
                <h4 className="fw-bold m-0">Achievements Details</h4>
            </div>
            <form onSubmit={handleAddAchievement}>
                <div className="row g-3">
                    {/* Title Field */}
                    <div className="col-4 mb-2">
                        <label className="small fw-bold text-muted mb-1">Title</label>
                        <input type="text" name="title" className="form-control bg-light py-2 border-secondary-subtle" placeholder="Enter achievement title" value={achievementData.title} onChange={handleChange} required />
                    </div>
                    <div className="col-4 mb-2">
                        <label className="small fw-bold text-muted mb-1">Date</label>
                        <input type="date" name="date" className="form-control bg-light py-2 border-secondary-subtle" value={achievementData.date.split('T')[0]} onChange={handleChange} required />
                    </div>

                    {/* Category Dropdown */}
                    <div className="col-4 mb-2">
                        <label className="small fw-bold text-muted mb-1">Category</label>
                        <select name="category" className="form-select bg-light py-2 border-secondary-subtle" onChange={handleChange} value={achievementData.category}>
                            <option value="Academic">Academic</option>
                            <option value="Sports">Sports</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Research">Research</option>
                        </select>
                    </div>

                    {/* Description Field */}
                    <div className="col-12 mb-2">
                        <label className="small fw-bold text-muted mb-1">Description</label>
                        <textarea name="description" rows="2" className="form-control bg-light py-2 border-secondary-subtle" placeholder="Enter achievement description" value={achievementData.description} onChange={handleChange} required></textarea>
                    </div>

                    {/* Image Field with Preview Box */}
                    <div className="col-12 mb-2">
                        <label className="small fw-bold text-muted mb-1">Image</label>
                        <div className="d-flex gap-2">
                            <input type="file" className="form-control bg-light py-2 border-secondary-subtle" onChange={(e) => setAchievementData({ ...achievementData, image: e.target.files[0] })} />
                        </div>
                    </div>

                    <div className="col-12 mt-4 text-end">
                        <button type="submit" className="btn btn-success px-4 py-2 fw-normal rounded-2 border-0 shadow-sm" style={{ backgroundColor: '#419a51' }}>
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AchievementShow