const AdmissionShow = () => {
    const fields = [
        { label: "Full Name", span: 3 }, { label: "Email", span: 3 },
        { label: "Program", span: 3 }, { label: "Timing", span: 3 },
        { label: "B.FORM / CNIC", span: 3 }, { label: "Date of Birth", span: 3 },
        { label: "Gender", span: 3 }, { label: "Phone No.", span: 3 },
        { label: "Father Name", span: 3 }, { label: "Father's CNIC", span: 3 },
        { label: "Guardian Phone No.", span: 3 }, { label: "Relation", span: 3 },
        { label: "Address", span: 9 }, { label: "City", span: 3 },
    ]
    const academicFields = [
        { label: "Matric Roll No.", span: 3 }, { label: "Total Marks", span: 3 },
        { label: "Obtained Marks", span: 3 }, { label: "Scan Result Sheet (PDF, IMAGE)", span: 3, isFile: true },
        { label: "Inter Roll No.", span: 3 }, { label: "Total Marks", span: 3 },
        { label: "Obtained Marks", span: 3 }, { label: "Scan Result Sheet (PDF, IMAGE)", span: 3, isFile: true },
    ]
    return (
        <div>
            <Link to="/admission" className="btn btn-sm btn-outline-secondary mb-3 px-3 rounded-pill fw-medium">
                ← Back to List
            </Link>
            <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '35px' }}>
                <div className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h3 className="fw-bold mb-0">Details of student</h3>
                        <div className="d-flex gap-2">
                            <button className="btn btn-success px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ backgroundColor: '#2e7d32', border: 'none' }}>Approved</button>
                            <button className="btn btn-danger px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ backgroundColor: '#d32f2f', border: 'none' }}>Decline</button>
                        </div>
                    </div>
                    <div className="row g-3 mb-4">
                        {fields.map((f, i) => (
                            <div key={i} className={`col-md-${f.span}`}>
                                <label className="form-label text-muted fw-semibold mb-1" style={{ fontSize: '13px' }}>{f.label}</label>
                                <input type="text" className="form-control border-0 py-3 px-3 rounded-3" style={{ backgroundColor: '#f0f2f5' }} readOnly />
                            </div>
                        ))}
                    </div>
                    <div className="row g-3">
                        {academicFields.map((f, i) => (
                            <div key={i} className={`col-md-${f.span}`}>
                                <label className="form-label text-muted fw-semibold mb-1" style={{ fontSize: '13px' }}>{f.label}</label>
                                {f.isFile ? (
                                    <button className="btn w-100 py-3 border-0 rounded-3 text-dark fw-medium" style={{ backgroundColor: '#e0e0e0' }}>View File</button>
                                ) : (
                                    <input type="text" className="form-control border-0 py-3 px-3 rounded-3" style={{ backgroundColor: '#f0f2f5' }} readOnly />
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