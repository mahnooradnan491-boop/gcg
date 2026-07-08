import React, { useState, useEffect } from 'react'
import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import api from '../api.js'
import './gallery.css'

function Gallery() {
  const [events, setEvents] = useState([])
  const [activeRecentIndex, setActiveRecentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('/events')
        setEvents(res.data || [])
      } catch (err) {
        console.error("Error fetching dynamic events:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  const parseEventDate = (dateString) => {
    if (!dateString) return { day: '00', month: '---', fullDate: '' }
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase()
    const fullDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    return { day, month, fullDate }
  }

  const now = new Date()

  const recentEvents = events
    .filter(event => new Date(event.eventDate) <= now)
    .sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate))

  const upcomingEvents = events
    .filter(event => new Date(event.eventDate) > now)
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))

  const selectedRecentEvent = recentEvents[activeRecentIndex]

  return (
    <>
      <Chatbox />
      <Header />
      <div className="gallery-wrapper">

        <div className="hero-flex">
          <div className="hero-text">
            <p className="hero-top">Contributions that leads to better environment</p>
            <h1 className="hero-h1">Discover The Life At GCG.</h1>
          </div>
        </div>

        <div className="recent-banner">
          <h2>Pictures of Recent Events</h2>
        </div>

        <div className="main-content bg-white">
          <p className="label">GALLERY</p>
          <h2 className="main-title">Our Visual Stories</h2>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading system records...</span>
              </div>
            </div>
          ) : (
            <>
              {recentEvents.length > 0 ? (
                <div className="stories-container">

                  <div className="stories-left">
                    <img
                      src={selectedRecentEvent?.eventImage ? `/uploads/${selectedRecentEvent.eventImage}` : '/eventimg.png'}
                      alt={selectedRecentEvent?.eventTitle || "Event"}
                      className="story-img image-fade-in"
                    />
                  </div>

                  <div className="stories-right">
                    {recentEvents.slice(0, 4).map((event, idx) => {
                      const { day, month } = parseEventDate(event.eventDate)
                      const isHighlighted = activeRecentIndex === idx

                      return (
                        <div
                          key={event._id}
                          className={`story-list-item ${isHighlighted ? 'highlighted' : ''} ${idx === recentEvents.length - 1 ? 'last' : ''}`}
                          onClick={() => setActiveRecentIndex(idx)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="date-tag">
                            <span className="day">{day}</span>
                            <span className="mon">{month}</span>
                          </div>
                          <p>{event.eventTitle}</p>
                          {isHighlighted && <div className="green-accent"></div>}
                        </div>
                      )
                    })}
                  </div>

                </div>
              ) : (
                <p className="text-center text-muted py-4">No recent event visual logs found.</p>
              )}

              <div className="upcoming-block mt-5">
                <h2 className="upcoming-title">Upcoming Events</h2>

                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => {
                    const { fullDate } = parseEventDate(event.eventDate)
                    return (
                      <div className="event-row" key={event._id}>
                        <span className="event-txt">{event.eventTitle}</span>
                        <span className="event-date">
                          <img src="/icons/calender.png" alt="calendar icon" className="small-icon" /> {fullDate}
                        </span>
                      </div>
                    )
                  })
                ) : (
                  <p className="text-muted ps-2 py-2">No future events scheduled at the moment.</p>
                )}
              </div>

              {events.length > 0 && (
                <div className="container my-5 pt-4">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                      <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                        <img
                          src={events[0].eventImage ? `/uploads/${events[0].eventImage}` : '/src/assets/culture.png'}
                          className="img-fluid w-100"
                          alt={events[0].eventTitle}
                          style={{ objectFit: 'cover', maxHeight: '500px' }}
                        />
                        <div className="card-body text-center bg-white p-4">
                          <h5 className="fw-bold text-success mb-2">{events[0].eventTitle}</h5>
                          <p className="text-muted small mb-0">{events[0].eventVenue || "Government Graduate College, Gujranwala"}</p>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              )}


              <div className="container my-5 pb-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 text-center">
                    <p className="label text-uppercase text-success fw-bold" style={{ letterSpacing: '2px', fontSize: '14px' }}>Collage Life Video</p>
                    <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '38px' }}>Watch Our Collage Highlights</h2>
                    
                    <div className="shadow rounded-4 overflow-hidden bg-dark position-relative" style={{ aspectRatio: '16/9' }}>
                      <video 
                        controls 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      >
                        <source src="/public/clg.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="container my-5 pb-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 text-center">
                    <p className="label text-uppercase text-success fw-bold" style={{ letterSpacing: '2px', fontSize: '14px' }}>Collage Life Video</p>
                    <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '38px' }}>Watch Our Culture Festival</h2>
                    
                    <div className="shadow rounded-4 overflow-hidden bg-dark position-relative" style={{ aspectRatio: '16/9' }}>
                      <video 
                        controls 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      >
                        <source src="/public/cultr.mp4" type="video/mp4" />
                        Aapka browser video tag support nahi karta.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery