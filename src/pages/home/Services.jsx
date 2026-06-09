import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight, Code2, ShoppingCart,
  Palette, Rocket, Search, Brush, Wrench, AppWindow
} from 'lucide-react';
import './services.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80 }
  }
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-wrapper">

      <div className="services-top">
        <span className="services-label">OUR SERVICES</span>
        <h2 className="services-heading">Everything You Need</h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="services-grid"
      >

        {/* ── ROW 1 ── */}
        <motion.div variants={itemVariants} className="services-card card-heading">
          <span className="services-tag">Full-Service Digital Agency</span>
          <h1 className="services-card-title">What We Build</h1>
          <p className="services-card-sub">
            Powerful digital solutions crafted for growth, performance, and impact.
          </p>
        </motion.div>

        {/* Card image → Portfolio */}
        <motion.div
          variants={itemVariants}
          className="services-card card-image"
          onClick={() => navigate('/portfolio')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            alt="Web Development"
            className="card-img"
          />
          <div className="card-img-arrow">
            <ArrowUpRight size={16} color="#09090b" />
          </div>
        </motion.div>

        {/* ── ROW 2 ── */}
        <motion.div variants={itemVariants} className="services-card card-icon bg-light has-img">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80"
            alt="Website Development"
            className="card-img"
          />
          <div className="card-img-overlay" />
          <div className="svc-content svc-content-z">
            <div className="services-icon-wrap services-icon-light icon-hover">
              <Code2 size={22} />
            </div>
            <div>
              <h3 className="services-card-name dark-text hover-white">
                Website Development
              </h3>
              <p className="services-card-desc muted-text hover-dim">
                Fast, modern, scalable websites built with the latest tech.
              </p>
            </div>
            <div
              className="services-arrow services-arrow-light arrow-hover"
              onClick={() => navigate('/portfolio')}
              style={{ cursor: 'pointer' }}
              title="View Our Work"
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="services-card card-icon bg-dark">
          <div className="svc-content">
            <div className="services-icon-wrap services-icon-dark">
              <ShoppingCart size={22} />
            </div>
            <div>
              <h3 className="services-card-name light-text">E-commerce Websites</h3>
              <p className="services-card-desc dim-text">
                Online stores that convert visitors into customers.
              </p>
            </div>
            <div
              className="services-arrow services-arrow-dark"
              onClick={() => navigate('/services')}
              style={{ cursor: 'pointer' }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        {/* Tall card image → Portfolio */}
        <motion.div
          variants={itemVariants}
          className="services-card card-image card-image-tall"
          onClick={() => navigate('/portfolio')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
            alt="Design"
            className="card-img"
          />
          <div className="card-img-arrow">
            <ArrowUpRight size={16} color="#09090b" />
          </div>
        </motion.div>

        {/* ── ROW 3 ── */}
        <motion.div variants={itemVariants} className="services-card card-icon card-wide bg-light has-img">
          <img
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80"
            alt="UI/UX Design"
            className="card-img"
          />
          <div className="card-img-overlay" />
          <div className="svc-content svc-content-z">
            <div className="services-icon-wrap services-icon-light icon-hover">
              <Palette size={22} />
            </div>
            <div>
              <h3 className="services-card-name dark-text hover-white">UI/UX Design</h3>
              <p className="services-card-desc muted-text hover-dim">
                Intuitive, beautiful interfaces users love to interact with.
              </p>
            </div>
            <div
              className="services-arrow services-arrow-light arrow-hover"
              onClick={() => navigate('/services')}
              style={{ cursor: 'pointer' }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        {/* ── ROW 4 ── */}
        <motion.div variants={itemVariants} className="services-card card-icon bg-light has-img">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80"
            alt="Landing Pages"
            className="card-img"
          />
          <div className="card-img-overlay" />
          <div className="svc-content svc-content-z">
            <div className="services-icon-wrap services-icon-light icon-hover">
              <Rocket size={22} />
            </div>
            <div>
              <h3 className="services-card-name dark-text hover-white">Landing Pages</h3>
              <p className="services-card-desc muted-text hover-dim">
                High-converting pages built to capture leads and drive results.
              </p>
            </div>
            <div
              className="services-arrow services-arrow-light arrow-hover"
              onClick={() => navigate('/portfolio')}
              style={{ cursor: 'pointer' }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="services-card card-icon bg-dark has-img">
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80"
            alt="SEO Optimization"
            className="card-img"
          />
          <div className="card-img-overlay card-img-overlay-dark" />
          <div className="svc-content svc-content-z">
            <div className="services-icon-wrap services-icon-dark icon-hover-dark">
              <Search size={22} />
            </div>
            <div>
              <h3 className="services-card-name light-text">SEO Optimization</h3>
              <p className="services-card-desc dim-text">
                Rank higher, get discovered, and grow organic traffic.
              </p>
            </div>
            <div
              className="services-arrow services-arrow-dark arrow-hover"
              onClick={() => navigate('/services')}
              style={{ cursor: 'pointer' }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="services-card card-icon bg-light has-img"
          onClick={() => navigate('/about')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?auto=format&fit=crop&w=600&q=80"
            alt="Branding"
            className="card-img"
          />
          <div className="card-img-overlay" />
          <div className="svc-content svc-content-z">
            <div className="services-icon-wrap services-icon-light icon-hover">
              <Brush size={22} />
            </div>
            <div>
              <h3 className="services-card-name dark-text hover-white">Branding</h3>
              <p className="services-card-desc muted-text hover-dim">
                Memorable brand identities that communicate your values.
              </p>
            </div>
            <div className="services-arrow services-arrow-light arrow-hover">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="services-card card-icon bg-light has-img">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            alt="Maintenance"
            className="card-img"
          />
          <div className="card-img-overlay" />
          <div className="svc-content svc-content-z">
            <div className="services-icon-wrap services-icon-light icon-hover">
              <Wrench size={22} />
            </div>
            <div>
              <h3 className="services-card-name dark-text hover-white">
                Maintenance & Support
              </h3>
              <p className="services-card-desc muted-text hover-dim">
                Ongoing care to keep your website fast, secure, and updated.
              </p>
            </div>
            <div
              className="services-arrow services-arrow-light arrow-hover"
              onClick={(e) => { e.stopPropagation(); navigate('/services'); }}
              style={{ cursor: 'pointer' }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>

        {/* ── ROW 5 CTA ── */}
        <motion.div variants={itemVariants} className="services-card card-cta">
          <div className="services-cta-inner">
            <div>
              <div className="services-icon-wrap services-icon-purple">
                <AppWindow size={22} />
              </div>
              <h3 className="services-cta-title">Custom Web Application</h3>
              <p className="services-cta-desc">
                Got a unique idea? We build fully custom web apps tailored
                to your business needs.
              </p>
            </div>
            <button
              className="services-cta-btn"
              onClick={() => navigate('/start-project')}
            >
              Start a Project <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}