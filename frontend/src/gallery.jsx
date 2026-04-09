import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      {/* HERO SECTION */}
      <div className="hero-flex">
        <div className="hero-text">
          <p className="hero-top">Contributions that leads to better environment</p>
          <h1 className="hero-h1">Discover The Life  At GCG. </h1>
         
        </div>
        <div className="hero-img-box">
          
          <img src="/gallerybg.png" alt="Students" className="hero-main-img" />
        </div>
      </div>

      {/* GREEN STRIP */}
      <div className="recent-banner">
        <h2>Pictures of Recent Events</h2>
      </div>

      <div className="main-content">
        <p className="label">GALLERY</p>
        <h2 className="main-title">Our Visual Stories</h2>

        {/* VISUAL STORIES BOX */}
        <div className="stories-container">
          <div className="stories-left">
            <img src="/eventimg.png" alt="Event" className="story-img" />
          </div>
          <div className="stories-right">
            <div className="story-list-item">
              <div className="date-tag"><span className="day">20</span><span className="mon">MARCH</span></div>
              <p>Plant For Pakistan 2025</p>
            </div>
            
            <div className="story-list-item highlighted">
              <div className="date-tag"><span className="day">10</span><span className="mon">AUGUST</span></div>
              <p>Tree Plantation by Prof. Dr. Nazeer Ahmad</p>
              <div className="green-accent"></div>
            </div>

            <div className="story-list-item last">
              <div className="date-tag"><span className="day">03</span><span className="mon">DECEMBER</span></div>
              <p>Retirement program staff</p>
            </div>
          </div>
        </div>

        {/* UPCOMING EVENTS */}
        <div className="upcoming-block">
          <h2 className="upcoming-title">Upcoming Events</h2>
          
          <div className="event-row">
            <span className="event-txt">Retirement program teaching and no teaching staff</span>
            <span className="event-date">
               <img src="/calender.png" alt="icon" className="small-icon" /> 10 August, 2026
            </span>
          </div>

          <div className="event-row">
            <span className="event-txt">Plant For Pakistan 2025</span>
            <span className="event-date">
               <img src="/calender.png" alt="icon" className="small-icon" /> 10 August, 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;