import "./Contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-container">

      <div className="contact-grid">

        {/* Left Side */}
        <div className="left">
          <p className="contact-label">GET IN TOUCH</p>
          <h1>
            Let's make it <br />
            happen
          </h1>
          <p className="contact-sub">
            Have a project in mind? Let's talk about how we can
            bring your vision to life.
          </p>
          <button className="contact-cta-btn" onClick={() => navigate('/contact')}>
            Visit Contact Page →
          </button>
        </div>

        {/* Right Side */}
        <div className="right">

          <p className="description">
            <strong>
              Have questions? We've got the answers!
            </strong>{" "}
            Here, you'll find clear and concise information
            about our services, process, and what to expect
            when working with us.
          </p>

          <form className="form" onSubmit={(e) => { e.preventDefault(); navigate('/contact'); }}>

            <div className="input-row">
              <input type="text" placeholder="Your name*" required />
              <input type="text" placeholder="Company name" />
            </div>

            <div className="input-row">
              <input type="email" placeholder="Email*" required />
              <input type="text" placeholder="Phone" />
            </div>

            <textarea
              placeholder="A few words about your project*"
              required
            ></textarea>

            <button type="submit">
              SEND MESSAGE ↗
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
