import "./contact.css"

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-hero">
        <p>Having a questions ?</p>
       <b> <h2>Contact us or <br/> Make a Visit</h2></b>
      </div>


      <div className="contact-form-box">

        <h2>We Love to hear you</h2>

        <div className="form-row">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
        </div>

        <div className="form-row">
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Phone (Optional)"/>
        </div>

        <input type="text" placeholder="Subject" className="full"/>

        <textarea placeholder="Message"></textarea>

      </div>


      {/* Contact Info + Map */}

      <div className="contact-info">

        <div className="info-left">

          <p>📧 abc@gmail.com</p>
          <p>📞 +92 300 1234567</p>

        </div>

        <div className="map">

          <iframe
            src="https://maps.google.com/maps?q=gujranwala&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>

        </div>

      </div>



    </div>
  )
}

export default Contact