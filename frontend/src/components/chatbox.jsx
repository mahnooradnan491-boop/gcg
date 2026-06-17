import { useState, useEffect, useRef } from 'react'
import './chatbox.css'

function Chatbox() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 'welcome', sender: 'bot', text: "Hello! How can I help you today? Select a question below." }
    ])

    const chatEndRef = useRef(null)

    const faqData = [
        {
            id: 1,
            question: "What are the college timings?",
            answer: "Our college operates from 9:00 AM to 4:00 PM, Monday through Friday."
        },
        {
            id: 2,
            question: "How can I contact the admissions office?",
            answer: "You can reach admissions at admissions@college.edu or call (555) 123-4567."
        },
        {
            id: 3,
            question: "Where can I find the academic calendar?",
            answer: "The academic calendar is available under the 'Academics' tab on our main website menu."
        },
        {
            id: 4,
            question: "Are there any scholarship options?",
            answer: "Yes! We offer merit-based and need-based scholarships. Applications open every semester."
        }
    ]

    const handleQuestionClick = (faq) => {
        const userMsgId = `user-${Date.now()}`
        const botMsgId = `bot-${Date.now()}`

        setMessages((prevMessages) => [
            ...prevMessages,
            { id: userMsgId, sender: 'user', text: faq.question },
            { id: botMsgId, sender: 'bot', text: faq.answer }
        ])
    }

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isOpen])

    return (
        <div className="chatbox-wrapper">
            {isOpen ? (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>College Assistant</h3>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>x</button>
                    </div>

                    <div className="chat-body">
                        <div className="chat-logs">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message-bubble ${msg.sender}-bubble`}>
                                    <p>{msg.text}</p>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        <hr className="chat-divider" />

                        <div className="questions-list">
                            <p className="suggested-heading">Suggested Questions:</p>
                            {faqData.map((item) => (
                                <button
                                    key={item.id}
                                    className="faq-question-btn"
                                    onClick={() => handleQuestionClick(item)}
                                >
                                    {item.question}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="chatbox-icon-btn" onClick={() => setIsOpen(true)}>
                    <img src="/icons/bot.png" alt="chatbot-icon" width="40" height="40" />
                </div>
            )}
        </div>
    )
}

export default Chatbox