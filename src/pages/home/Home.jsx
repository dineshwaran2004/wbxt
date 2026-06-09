import About from "../about/About";
import Journey from "../journey/Journey";
import Testimonials from "./Testimonials";
import Marquee from "../home/Marquee";
import Services from "./Services";
import "./Home.css";
import ScrollVelocity from "../../components/ScrollVelocity";
import Contact from "../contact/Contact";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for new projects
          </div>

          <h1>
            We Build Modern <br />
            Websites That <br />
            <span>Drive Results</span>
          </h1>

          <p>
            Webxtant is a creative digital agency delivering
            high-performance web solutions that help your
            business grow, engage, and stand out in the
            digital world.
          </p>

      
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/start-project")}>Start a Project →</button>
            <button className="secondary-btn" onClick={() => navigate("/portfolio")}>View Our Work ↗</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="bg-circle"></div>

          <img
            src="/images/laptop.png"
            alt="Laptop"
            className="laptop-img"
          />

          <img
            src="/images/phone.png"
            alt="Phone"
            className="phone-img"
          />

          <div className="floating-icon rocket">
            <img src="/images/rocket.png" alt="" />
          </div>

          <div className="floating-icon code">
            <img src="/images/code.png" alt="" />
          </div>

          <div className="floating-icon brush">
            <img src="/images/brush.png" alt="" />
          </div>
        </div>
      </section>

      <Marquee />

      <About />

      <ScrollVelocity
        texts={["WEBXTANT • WEBXTANT • WEBXTANT • "]}
        velocity={100}
      />

      <Journey />

      <Services />

      <Contact />

   

      <Marquee />
      <Testimonials />
    </>
  );
}

export default Home;
