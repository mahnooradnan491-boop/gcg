import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
})

api.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            if (localStorage.getItem('user') && localStorage.getItem('adminUser')) {
                localStorage.removeItem('user')
                localStorage.removeItem('adminUser')
                window.location.href = '/'
            } else {
                if (localStorage.getItem('user')) {
                    localStorage.removeItem('user')
                    window.location.href = '/login'
                }
                if (localStorage.getItem('adminUser')) {
                    localStorage.removeItem('adminUser')
                    window.location.href = '/admin'
                }
            }
        }
    }
)

export default api