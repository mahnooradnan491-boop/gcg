import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import Faculty from './views/faculty'
import Gallery from './views/gallery'
import Programs from './views/programs'
import Exams from './views/exams'
import Login from './views/login'
import Register from './views/register'
import Admission from './views/admission'
import Achievements from './views/achievements'
import BatchChart from './views/BatchChart'
import ContactManagement from './views/admin/contactmanagement'
import ContactShow from './views/admin/contactshow'
import NewsManagement from './views/admin/newsmanagement'
import NewsAdd from './views/admin/newsadd'
import NewsShow from './views/admin/newsshow'
import AdmissionShow from './views/admin/admissionshow'
import AdmissionManagement from './views/admin/admissionmanagement'
import FacultyManagement from './views/admin/facultymanagement'
import FacultyAdd from './views/admin/facultyadd'
import FacultyShow from './views/admin/facultyshow'
import EventManagement from './views/admin/eventmanagement'
import EventAdd from './views/admin/eventadd'
import EventShow from './views/admin/eventshow'
import TimetableManagement from './views/admin/timetablemanagement'
import TimetableAdd from './views/admin/timetableadd'
import TimetableShow from './views/admin/timetableshow'
import AchievementManagement from './views/admin/achievementmanagement'
import AchievementAdd from './views/admin/achievementadd'
import AchievementShow from './views/admin/achievementshow'
import LoginAdmin from './views/admin/loginAdmin'
import ManageSuccessStories from './views/admin/ManageSuccessStories'
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
        <Route path="/exams" element={<Exams />} />
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <Admission />
            </ProtectedRoute>
          }
        />

        <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievements/chart/:batchId" element={<BatchChart />} />
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
                        <Route path="/admission/:id" element={<AdmissionShow />} />
                        <Route path="/contact" element={<ContactManagement />} />
                        <Route path="/contact/:id" element={<ContactShow />} />
                        <Route path="/news" element={<NewsManagement />} />
                        <Route path="/news/add" element={<NewsAdd />} />
                        <Route path="/news/:id" element={<NewsShow />} />
                        <Route path="/faculty" element={<FacultyManagement />} />
                        <Route path="/faculty/add" element={<FacultyAdd />} />
                        <Route path="/faculty/:id" element={<FacultyShow />} />
                        <Route path="/events" element={<EventManagement />} />
                        <Route path="/event/add" element={<EventAdd />} />
                        <Route path="/event/:id" element={<EventShow />} />
                        <Route path="/timetable" element={<TimetableManagement />} />
                        <Route path="/timetable/add" element={<TimetableAdd />} />
                        <Route path="/timetable/:id" element={<TimetableShow />} />
                        <Route path="/achievements" element={<AchievementManagement />} />
                        <Route path="/achievement/add" element={<AchievementAdd />} />
                        <Route path="/achievement/:id" element={<AchievementShow />} />
                        <Route path="/Success Stories" element={<ManageSuccessStories />} />
                        
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