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
import Achievements from './views/achievements'
import ContactQuery from './views/admin/contactQuery'
import NewsManagement from './views/admin/NewsManagement'
import AdmissionShow from './views/admin/admissionshow'
import FacultyInfo from './views/admin/facultyInfo'
import EventManagement from './views/admin/event'
import Timetable from './views/admin/timetable'
import Achievement from './views/admin/achievement'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './main.css'
import LoginAdmin from './views/admin/LoginAdmin'
import ProtectedRoute from './components/protectedroutes'
import AdminProtectedRoute from './components/adminprotectedroutes'
import AdminHeader from './components/adminheader'
import AdminSidebar from './components/adminsidebar'
import AdminInfo from './components/admininfo'
import TimetableManagement from './views/admin/timetable'
import AchievementManagement from './views/admin/achievement'


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
        <Route path="/admission" element={
          <ProtectedRoute>
            <Admission />
          </ProtectedRoute>
        } />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path='/admin/*' element={
          <AdminProtectedRoute>
            <div className="container-fluid p-0" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="row g-0">
                <AdminSidebar />
                <div className="col py-4 px-5">
                  <div className="container-fluid">
                    <AdminHeader />
                    <AdminInfo />
                    <Routes>
                      <Route path="/admission" element={<AdmissionManagement />} />
                      <Route path="/admission/show" element={<AdmissionShow />} />
                      <Route path="/contact" element={<ContactManagment />} />
                      <Route path="/contact/show" element={<ContactShow />} />
                      <Route path="/news" element={<NewsManagement />} />
                      <Route path="/news/add" element={<NewsAdd />} />
                      <Route path="/faculty" element={<FacultyManagement />} />
                      <Route path="/faculty/add" element={<FacultyAdd />} />
                      <Route path="/event" element={<EventManagement />} />
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
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
