import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import api from '../api.js'
import './home.css'

const formatDate = (dateString) => {
    if (!dateString) return { day: '00', month: '---', fullDate: '' }
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = date.toLocaleString('en-US', { month: 'long' })
    const fullDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    return { day, month, fullDate }
}

function Home() {
    const [stories, setStories] = useState([])
    const [activeTab, setActiveTab] = useState('general')
    const [news, setNews] = useState([])
    const [events, setEvents] = useState([])
    const [timetables, setTimetables] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const programsData = [
        { id: 1, title: 'BS Information Technology', category: 'Bachelors', link: 'https://pu.edu.pk/program/show/900098/Department-of-Information-Technology', img: '/computerscience.png', color: '#fd7e14' },
        { id: 2, title: 'BS Mathematics', category: 'Masters', link: 'https://pu.edu.pk/program/show/5101/BS-Mathematics-Morning-and-Self-Supporting.html', img: '/civileng.png', color: '#6f42c1' },
        { id: 3, title: 'BS Statistics', category: 'Bachelors', link: 'https://pu.edu.pk/program/show/900113/College-of-Statistical-Sciences', img: '/computerscience.png', color: '#fd7e14' }
    ]

    const filteredPrograms = programsData.filter(program => {
        const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const [storiesRes, newsRes, eventsRes, timetablesRes] = await Promise.all([
                    api.get('/success-stories'),
                    api.get('/news'),
                    api.get('/events'),
                    api.get('/timetables')
                ])
                setStories(storiesRes.data)
                setNews(newsRes.data || [])
                setEvents(eventsRes.data || [])
                setTimetables(timetablesRes.data || [])
            } catch (err) {
                console.error("Error fetching homepage system datasets:", err)
            }
        }
        fetchHomeData()
    }, [])

    const generalNotices = news.filter(item => item.category === 'General Notice')
    const examSheets = news.filter(item => item.category === 'Exam Date Sheet')
    const pureNews = news.filter(item => item.category === 'News')

    const combinedNewsEvents = [
        ...pureNews.map(n => ({ ...n, dynamicType: 'news' })),
        ...events.map(e => ({
            ...e,
            dynamicType: 'event',
            title: e.eventTitle,
            date: e.eventDate,
            description: e.eventDescription
        }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date))

    const getActiveDataset = () => {
        if (activeTab === 'general') return generalNotices
        if (activeTab === 'newsevents') return combinedNewsEvents
        if (activeTab === 'exams') return examSheets
        if (activeTab === 'timetable') return timetables.map(t => ({ ...t, title: t.className }))
        return []
    }

    useEffect(() => {
        const currentData = getActiveDataset()
        if (currentData.length > 0) {
            setSelectedItem(currentData[0])
        } else {
            setSelectedItem(null)
        }
    }, [activeTab, news, events, timetables])

    const getStoryData = (type) => {
        const defaults = {
            regular: { count: '5K+', label: 'Regular Student' },
            graduate: { count: '10K+', label: 'Graduate Student' },
            research: { count: '140+', label: 'Research Publications' }
        }
        return stories.find(s => s.type === type) || defaults[type]
    }

    return (
        <>
            <Chatbox />
            <Header />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                }}
                className="hero p-5"
            >
                <motion.p
                    variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                    className="text-success"
                >
                    The quality education is our priority
                </motion.p>
                <motion.h1
                    variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                    className="mb-5"
                >
                    Government<br />Graduate College<br />Gujranwala.
                </motion.h1>
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="mb-5"
                >
                    <Link to="/register" className="btn btn-success me-3 rounded-0 py-3 px-5">
                        Enroll Now <img src="/icons/arrowup.png" alt="arrow-icon" width="15px" />
                    </Link>
                    <Link to="/programs" className="btn btn-outline-success rounded-0 py-3 px-5">
                        Programs <img src="/icons/arrowup.png" alt="arrow-icon" className="green" width="15px" />
                    </Link>
                </motion.div>
                <motion.address
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                    <span className="me-2">
                        <img src="/icons/location.png" alt="location-icon" width="15px" />
                    </span>
                    SATELLITE TOWN, GUJRANWALA
                </motion.address>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="mt-5 px-5 mb-5"
            >
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-center mb-5"
                >
                    Our Success Stories
                </motion.h2>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="d-flex gap-3"
                >
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-light-grey p-4 flex-fill"
                    >
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">{getStoryData('regular').count}</h2>
                            <img src="/icons/student.png" alt="icon" width="25px" />
                        </div>
                        <p className="mt-4 mb-0">{getStoryData('regular').label}</p>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="p-4 flex-fill box-orange"
                    >
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">{getStoryData('graduate').count}</h2>
                            <img src="/icons/graduate.png" alt="icon" width="25px" />
                        </div>
                        <Link to="/achievements" className="mt-4 nav-link">
                            {getStoryData('graduate').label} <img src="/icons/arrowup.png" alt="arrow-icon" width="10px" />
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="p-4 flex-fill box-green"
                    >
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">{getStoryData('research').count}</h2>
                            <img src="/icons/research.png" alt="icon" width="25px" />
                        </div>
                        <Link to="/achievements" className="mt-4 nav-link">
                            {getStoryData('research').label} <img src="/icons/arrowup.png" alt="arrow-icon" width="10px" />
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="news-section"
                id='updates'
            >
                <div className="container">
                    <h3 className="text-center mb-4">Stay Updated With News & Events</h3>
                    <div className="news-tabs">
                        <button className={activeTab === 'general' ? 'active' : ''} onClick={() => setActiveTab('general')} type="button">
                            <img src="/icons/info.png" alt="icon" width="25px" /> General Notice
                        </button>
                        <button className={activeTab === 'newsevents' ? 'active' : ''} onClick={() => setActiveTab('newsevents')} type="button">
                            <img src="/icons/info.png" alt="icon" width="25px" /> News & Events
                        </button>
                        <button className={activeTab === 'exams' ? 'active' : ''} onClick={() => setActiveTab('exams')} type="button">
                            <img src="/icons/calender.png" alt="icon" width="25px" /> Exams Date Sheet
                        </button>
                        <button className={activeTab === 'timetable' ? 'active' : ''} onClick={() => setActiveTab('timetable')} type="button">
                            <img src="/icons/clock.png" alt="icon" width="25px" /> Time Table
                        </button>
                    </div>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="row mt-4 tab-pane show active"
                    >
                        {getActiveDataset().length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <p className="text-white">No notices or data assets currently published under this category.</p>
                            </div>
                        ) : (
                            <>
                                <div className="col-md-6">
                                    {getActiveDataset().map((item) => {
                                        const { day, month } = formatDate(item.date || item.eventDate)
                                        const isSelected = selectedItem?._id === item._id
                                        return (
                                            <div
                                                key={item._id}
                                                className={`notice-box ${isSelected ? 'active-border-style shadow-sm' : ''}`}
                                                onClick={() => setSelectedItem(item)}
                                                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                                            >
                                                <div className="date-box">
                                                    <div className='highlight'></div>
                                                    <span>{day}</span>
                                                    <small>{month}</small>
                                                </div>
                                                <p>{item.title || item.eventTitle}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-md-6">
                                    {selectedItem && (
                                        <div className="news-detail">
                                            <h6>{formatDate(selectedItem.date || selectedItem.eventDate).fullDate}</h6>
                                            <h4 className="mt-2 mb-3">{selectedItem.title || selectedItem.eventTitle}</h4>
                                            {(selectedItem.eventImage || selectedItem.timetableImage) && (
                                                <img
                                                    src={`http://localhost:3000/${selectedItem.eventImage || selectedItem.timetableImage}`}
                                                    alt="Attached Image"
                                                    className="img-fluid rounded mb-3 shadow-sm"
                                                    style={{ maxHeight: '280px', width: '100%', objectFit: 'cover' }}
                                                />
                                            )}
                                            {selectedItem.eventVenue && (
                                                <p className="text-secondary mb-2"><strong>Venue location:</strong> {selectedItem.eventVenue}</p>
                                            )}
                                            <p className="lh-lg text-secondary">{selectedItem.description || selectedItem.eventDescription}</p>
                                            <p className="mt-4 pt-2 border-top">
                                                Regards <br />
                                                <strong>{selectedItem.postedBy || selectedItem.organizer || "College Administration"}</strong>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            </motion.section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h3 className="mb-4">Search for a program</h3>
                    <div className="d-flex mb-4">
                        <input
                            type="text"
                            placeholder="Search for a course..."
                            className="form-control rounded-0"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className={`btn rounded-0 ${selectedCategory === 'Bachelors' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => setSelectedCategory('Bachelors')}>Bachelor</button>
                        <button className={`btn rounded-0 ${selectedCategory === 'Masters' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => setSelectedCategory('Masters')}>Masters</button>
                        <button className={`btn rounded-0 ${selectedCategory === 'Diploma' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => setSelectedCategory('Diploma')}>Diploma</button>
                        <button className="btn btn-success rounded-0 px-5 text-nowrap" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>View All</button>
                    </div>
                    <div className="row mt-5">
                        {filteredPrograms.length === 0 ? (
                            <div className="col-12 text-center py-4">
                                <p className="text-muted">No programs found matching your criteria.</p>
                            </div>
                        ) : (
                            filteredPrograms.map((program) => (
                                <motion.div
                                    key={program.id}
                                    className="col-md-4 mb-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="card h-100">
                                        <img src={program.img} className="card-img-top" alt={program.title} />
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: program.color }}>
                                                <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: program.color }}></span>
                                                {program.category}
                                            </div>
                                            <h6>
                                                <a href={program.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark d-block">
                                                    {program.title}
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className="research-section">
                <h2 className="research-title">Research & Publications</h2>
                <div className="research-container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="research-left"
                    >
                        <p>
                            Our college values the role of University of the Punjab’s Office of
                            Research, Innovation & Commercialization (ORIC). Established in March
                            2010, ORIC is entrusted with the management of all financed
                            research-related activities conducted by academic and research units
                            within the institution.
                        </p>
                        <div className="info-circle">i</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="research-right">
                            <h3>Free Online Research Resources</h3>
                            <div className="research-links">
                                <Link to="/research" className="nav-link">View <img src="/icons/arrowup.png" alt="arrow-icon" width="15px" /></Link>
                            </div>
                        </div>
                        <div className="text-end">
                            <Link to="http://pu.edu.pk/page/show/hecdatabase.htm" className="mt-4 d-block">Online Databases</Link>
                            <Link to="https://www.pulibrary.edu.pk/" className="mt-2 d-block">PU Library</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home