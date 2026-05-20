import { useNavigate } from "react-router"

function AdminInfo() {
    const navigate = useNavigate()

    return (
        <div className="row mb-5 g-4">
            <div className="col-md-6" style={{ cursor: 'pointer' }} onClick={() => navigate('/admission')}>
                <div className="card border-0 shadow-sm p-4 text-white" style={{ backgroundColor: '#212529', borderRadius: '30px' }}>
                    <div className="card-body">
                        <h5 className="opacity-75 mb-3">Total Admissions Received</h5>
                        <h1 className="display-3 fw-bold">220</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-6" style={{ cursor: 'pointer' }} onClick={() => navigate('/contact')}>
                <div className="card border-0 shadow-sm p-4 text-white" style={{ backgroundColor: '#212529', borderRadius: '30px' }}>
                    <div className="card-body">
                        <h5 className="opacity-75 mb-3">Total Contact Queries</h5>
                        <h1 className="display-3 fw-bold">42</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminInfo