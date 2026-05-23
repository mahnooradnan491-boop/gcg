import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import Faculty from './views/faculty'
import Gallery from './views/gallery'
import Programs from './views/programs'
import Login from './views/login'
import Register from './views/register'
import Admission from './views/admission'
import ContactManagement from './views/admin/contactmanagement'
import ContactShow from './views/admin/contactshow'
import NewsManagement from './views/admin/newsmanagement'
import NewsAdd from './views/admin/newsadd'
import AdmissionShow from './views/admin/admissionshow'
import AdmissionManagement from './views/admin/admissionmanagement'
import FacultyManagement from './views/admin/facultymanagement'
import FacultyAdd from './views/admin/facultyadd'
import EventManagement from './views/admin/eventmanagement'
import EventAdd from './views/admin/eventadd'
import TimetableManagement from './views/admin/timetablemanagement'
import TimetableAdd from './views/admin/timetableadd'
import AchievementManagement from './views/admin/achievementmanagement'
import AchievementAdd from './views/admin/achievementadd'
import LoginAdmin from './views/admin/loginAdmin'
import ProtectedRoute from './components/protectedroutes'
import AdminProtectedRoute from './components/adminprotectedroutes'
import AdminHeader from './components/adminheader'
import AdminSidebar from './components/adminsidebar'
import AdminInfo from './components/admininfo'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/programs" element={<Programs />} />
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <Admission />
            </ProtectedRoute>
          }
        />

        <Route path="/achievements" element={<AchievementAdd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route
          path="/admin/*"
          element={
            <AdminProtectedRoute>
              <div
                className="container-fluid p-0"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className="row g-0">
                  <AdminSidebar />
                  <div className="col py-4 px-5">
                    <div className="container-fluid">
                      <AdminHeader />
                      <AdminInfo />

                      <Routes>
                        <Route path="/admission" element={<AdmissionManagement />} />
                        <Route path="/admission/show" element={<AdmissionShow />} />
                        <Route path="/contact" element={<ContactManagement />} />
                        <Route path="/contact/show" element={<ContactShow />} />
                        <Route path="/news" element={<NewsManagement />} />
                        <Route path="/news/add" element={<NewsAdd />} />
                        <Route path="/faculty" element={<FacultyManagement />} />
                        <Route path="/faculty/add" element={<FacultyAdd />} />
                        <Route path="/events" element={<EventManagement />} />
                        <Route path="/event/add" element={<EventAdd />} />
                        <Route path="/timetable" element={<TimetableManagement />} />
                        <Route path="/timetable/add" element={<TimetableAdd />} />
                        <Route path="/achievement" element={<AchievementManagement />} />
                        <Route path="/achievement/add" element={<AchievementAdd />} />
                      </Routes>

                    </div>
                  </div>
                </div>
              </div>
            </AdminProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)