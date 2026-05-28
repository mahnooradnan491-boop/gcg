import { useEffect } from "react"
import { useNavigate } from "react-router"
import api from "../api"
import { useState } from "react"

function AdminInfo() {
    const [admissions, setAdmissions] = useState()
    const [contacts, setContacts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const res = await api.get('/admissions')
            setAdmissions(res.data.length)
            const res2 = await api.get('/contacts')
            setContacts(res2.data.length)
        }
        getData()
    }, [])

    return (
        <div className="row mb-5 g-4">
            <div className="col-md-6" style={{ cursor: 'pointer' }} onClick={() => navigate('/admin/admission')}>
                <div className="card border-0 shadow-sm p-4 text-white" style={{ backgroundColor: '#212529', borderRadius: '30px' }}>
                    <div className="card-body">
                        <h5 className="opacity-75 mb-3">Total Admissions Received</h5>
                        <h1 className="display-3 fw-bold">{admissions}</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-6" style={{ cursor: 'pointer' }} onClick={() => navigate('/admin/contact')}>
                <div className="card border-0 shadow-sm p-4 text-white" style={{ backgroundColor: '#212529', borderRadius: '30px' }}>
                    <div className="card-body">
                        <h5 className="opacity-75 mb-3">Total Contact Queries</h5>
                        <h1 className="display-3 fw-bold">{contacts}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminInfo