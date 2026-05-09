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
import ContactQuery from './Admin/pages/contactQuery'
import NewsManagement from './Admin/pages/NewsManagement';
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
        <Route path="/admission" element={<Admission />} />
         <Route path="/achievements" element={<Achievements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/contact" element={<ContactQuery />} />
        <Route path="/admin/news" element={<NewsManagement />} />
       
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
