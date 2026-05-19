import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("adminUser"))
    if (!admin) {
        return <Navigate to="/admin" />
    }
    return children
}

export default AdminProtectedRoute