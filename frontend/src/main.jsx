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
import Admin from './views/admin/admin'
import ContactQuery from './views/admin/contactQuery'
import NewsManagement from './views/admin/NewsManagement';
import AdmissionInfo from './views/admin/admissionInfo';
import FacultyInfo from './views/admin/facultyInfo';
import EventManagement from './views/admin/event';
import Timetable from './views/admin/timetable';
import Achievement from './views/admin/achievement';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './main.css'
import LoginAdmin from './views/admin/LoginAdmin'
import ProtectedRoute from './components/protectedroutes'
import AdminProtectedRoute from './components/adminprotectedroutes'


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
            <Routes>
              <Route path="/contact" element={<ContactQuery />} />
              <Route path="/news" element={<NewsManagement />} />
              <Route path="/admissionInfo" element={<AdmissionInfo />} />
              <Route path="/faculty" element={<FacultyInfo />} />
              <Route path="/event" element={<EventManagement />} />
              <Route path="/timetable" element={<timetable />} />
              <Route path="/event" element={<achievement />} />
              <Route path="/dashboard" element={<Admin />} />
            </Routes>
          </AdminProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
