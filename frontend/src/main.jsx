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

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/contact" element={<ContactQuery />} />
        <Route path="/admin/news" element={<NewsManagement />} />
        <Route path="/admin/admissionInfo" element={<AdmissionInfo />} />
        <Route path="/admin/faculty" element={<FacultyInfo />} />
        <Route path="/admin/event" element={<EventManagement />} />
        <Route path="/admin/timetable" element={<timetable />} />
        <Route path="/admin/event" element={<achievement />} />
        <Route path="/admin/loginAdmin" element={<LoginAdmin />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
)
