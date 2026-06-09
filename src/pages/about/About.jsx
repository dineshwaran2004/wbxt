import "./About.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Marquee from "../home/Marquee";

import ShapeGrid from "../../components/ShapeGrid";
import ScrollVelocity from "../../components/ScrollVelocity";

import {
  Target, Eye, Lightbulb, TrendingUp,
  Rocket, Code2, Shield, Zap
} from "lucide-react";;

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-page">

      {/* HERO */}
      <div className="about-hero">

        <div className="about-left hidden left">
          <p className="section-tag">ABOUT US</p>
          <h1>We Are <span>WEBXTANT</span></h1>
          <p className="about-text">
            WEBXTANT is a creative digital agency focused on building
            modern, fast, and user-friendly websites. We help businesses
            grow online with powerful digital solutions, stunning designs,
            and experiences that truly convert visitors into customers.
          </p>
          <p className="about-text">
            From startups to established brands, we craft custom websites
            that reflect your identity, perform at the highest level, and
            deliver measurable results — on time, every time.
          </p>

          <div className="about-features">
            <div className="feature-box">
              <Rocket size={28} />
              <div>
                <h4>Modern Design</h4>
                <p>Clean, professional, and beautiful UI that stands out</p>
              </div>
            </div>
            <div className="feature-box">
              <Code2 size={28} />
              <div>
                <h4>Latest Technology</h4>
                <p>React, Node.js, and the best modern frameworks</p>
              </div>
            </div>
            <div className="feature-box">
              <Shield size={28} />
              <div>
                <h4>Secure & Reliable</h4>
                <p>Every site we build is secured and optimised</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right hidden right">
          <img src="/images/about.png" alt="About Webxtant" />
        </div>

      </div>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="mission-grid-bg">
          <ShapeGrid
            borderColor="rgba(127,92,255,0.15)"
            direction="diagonal"
            speed={0.4}
            squareSize={40}
          />
        </div>

        <div className="mission-container hidden up">

          <div className="mission-box">
            <Target />
            <p className="mission-label">OUR PURPOSE</p>
            <h2>Our <span>Mission</span></h2>
            <div className="mission-line"></div>
            <p>
              To help businesses grow digitally by building fast, modern,
              user-friendly, and high-performing websites that create real,
              measurable impact in the digital world.
            </p>
            <div className="dot-grid">
              {[...Array(25)].map((_, i) => <span key={i}></span>)}
            </div>
            <img className="wave-bg" src="/images/wave.png" alt="" />
          </div>

          <div className="mission-box">
            <Eye />
            <p className="mission-label">OUR FUTURE</p>
            <h2>Our <span>Vision</span></h2>
            <div className="mission-line"></div>
            <p>
              To become one of the leading creative web agencies in India,
              known for innovation, quality, and delivering exceptional
              digital experiences that push boundaries.
            </p>
            <img className="mountain-bg" src="/images/mountain.png" alt="" />
          </div>

          {/* FEATURE CARDS */}
          <div className="device-icons">
            <div className="device-item">
              <Target />
              <h3>MOBILE FIRST</h3>
              <div className="mini-line"></div>
              <p>Responsive designs that look pixel-perfect on every device — phone, tablet, and desktop.</p>
              <span>01</span>
            </div>
            <div className="device-item">
              <Lightbulb />
              <h3>MODERN DESIGN</h3>
              <div className="mini-line"></div>
              <p>Clean, modern, and user-focused interfaces with a premium feel and stunning animations.</p>
              <span>02</span>
            </div>
            <div className="device-item">
              <Zap />
              <h3>FAST PERFORMANCE</h3>
              <div className="mini-line"></div>
              <p>Optimized for Core Web Vitals, lightning-fast load times, and smooth user experiences.</p>
              <span>03</span>
            </div>
            <div className="device-item">
              <TrendingUp />
              <h3>SEO READY</h3>
              <div className="mini-line"></div>
              <p>Built with SEO best practices and structured data so your business ranks higher on Google.</p>
              <span>04</span>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <div className="why-section">
  <div className="why-inner">

    <div className="why-left">
      <p className="section-tag">WHY WEBXTANT</p>

      <h2>
        The Agency That
        <br />
        <span>Delivers More</span>
      </h2>

      <p className="why-sub">
        We combine creative design, smart strategy,
        and modern technology to build websites
        that drive real results.
      </p>

      <button className="why-btn" onClick={() => navigate("/start-project")}>
        Let's Build Together →
      </button>
    </div>

    <div className="why-grid">

      {[
        {
          icon:"🚀",
          title:"Fast Turnaround",
          desc:"Projects delivered quickly without compromising quality."
        },
        {
          icon:"💬",
          title:"Clear Communication",
          desc:"Transparent updates at every stage."
        },
        {
          icon:"🎯",
          title:"Results Focused",
          desc:"Designed for growth, leads & conversions."
        },
        {
          icon:"⚙️",
          title:"Post-Launch Support",
          desc:"Continuous optimization & support."
        },
      ].map((item,i)=>(

        <div className="why-card" key={i}>

          <div className="glow"></div>

          <span className="why-icon">
            {item.icon}
          </span>

          <h4>{item.title}</h4>

          <p>{item.desc}</p>

          <span className="card-number">
            0{i+1}
          </span>

        </div>
      ))}
    </div>

  </div>
</div>

<Marquee />
      {/* FOUNDER */}
<div className="founder-section">
  <div className="founder-img-cross hidden left">

    {/* SECTION TAG STYLE TITLE ABOVE IMAGES */}
    <p className="section-tag founder-section-tag">OUR FOUNDER</p>

    {/* TWO SAME SIZE IMAGES */}
    <div className="founder-imgs-row">
      <div className="founder-img-main">
        <img src="/images/about.png" alt="Founder" />
        <div className="founder-img-shine"></div>
      </div>
      <div className="founder-img-secondary">
        <img src="/images/about.png" alt="Founder at work" />
        <div className="founder-img-shine"></div>
      </div>

      {/* 3D FLOATING ELEMENTS */}
      <div className="founder-3d-badge">
        <div className="badge-inner">
          <span className="badge-num">3+</span>
          <span className="badge-text">Years</span>
        </div>
      </div>
      <div className="founder-3d-ring"></div>
      <div className="founder-3d-dot"></div>
      <div className="founder-3d-dot dot2"></div>
    </div>

  </div>
</div>
    </section>
  );
}

export default About;
