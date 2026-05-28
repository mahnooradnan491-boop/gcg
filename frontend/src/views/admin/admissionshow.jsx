import { useParams } from "react-router"
import api from "../../api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AdmissionShow = () => {
    const [fields, setFields] = useState([])
    const [academicFields, setAcademicFields] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/admission/${id}`)
                const data = res.data
                setFields([
                    { label: 'CNIC', value: data.cnic, span: 6 },
                    { label: 'Date of Birth', value: data.dob.split('T')[0], span: 6 },
                    { label: 'Gender', value: data.gender, span: 6 },
                    { label: 'Phone', value: data.phone, span: 6 },
                    { label: 'Father\'s Name', value: data.fatherName, span: 6 },
                    { label: 'Father\'s CNIC', value: data.fatherCnic, span: 6 },
                    { label: 'Guardian Phone', value: data.guardianPhone, span: 6 },
                    { label: 'Address', value: data.address, span: 12 }
                ])
                setAcademicFields([
                    { label: 'Matric Roll Number', value: data.matricRoll, span: 6 },
                    { label: 'Matric Total Marks', value: data.matricTotal, span: 6 },
                    { label: 'Matric Obtained Marks', value: data.matricObtained, span: 6 },
                    { label: 'Matric Certificate', value: data.matricSheet, span: 6, isFile: true },
                    { label: 'Intermediate Roll Number', value: data.interRoll, span: 6 },
                    { label: 'Intermediate Total Marks', value: data.interTotal, span: 6 },
                    { label: 'Intermediate Obtained Marks', value: data.interObtained, span: 6 },
                    { label: 'Intermediate Certificate', value: data.interSheet, span: 6, isFile: true }
                ])
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [id])

    return (
        <div>
            <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '35px' }}>
                <div className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div className="d-flex align-items-center gap-3">
                            <Link to="/admin/admission" className="btn btn-outline-secondary btn-sm rounded-3">
                                ← Back
                            </Link>
                            <h4 className="fw-bold m-0">Details of student</h4>
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-success px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ backgroundColor: '#2e7d32', border: 'none' }}>Approved</button>
                            <button className="btn btn-danger px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ backgroundColor: '#d32f2f', border: 'none' }}>Decline</button>
                        </div>
                    </div>
                    <div className="row g-3 mb-4">
                        {fields.map((f, i) => (
                            <div key={i} className={`col-md-${f.span}`}>
                                <label className="form-label text-muted fw-semibold mb-1" style={{ fontSize: '13px' }}>{f.label}</label>
                                <input type="text" className="form-control border-0 py-2 px-3 rounded-3" style={{ backgroundColor: '#f0f2f5' }} value={f.value} readOnly />
                            </div>
                        ))}
                    </div>
                    <div className="row g-3">
                        {academicFields.map((f, i) => (
                            <div key={i} className={`col-md-${f.span}`}>
                                <label className="form-label text-muted fw-semibold mb-1" style={{ fontSize: '13px' }}>{f.label}</label>
                                {f.isFile ? (
                                    <button className="btn w-100 py-3 border-0 rounded-3 text-dark fw-medium" style={{ backgroundColor: '#e0e0e0' }} onClick={() => window.open(`http://localhost:3000/${f.value}`, '_blank')}>
                                        View File
                                    </button>
                                ) : (
                                    <input type="text" className="form-control border-0 py-2 px-3 rounded-3" style={{ backgroundColor: '#f0f2f5' }} value={f.value} readOnly />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmissionShow