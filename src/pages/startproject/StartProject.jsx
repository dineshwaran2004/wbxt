import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartProject.css";

const PROJECT_TYPES = [
  "Business Website", "Personal Portfolio", "E-Commerce Store",
  "Landing Page", "Web Application", "Mobile App", "Brand Identity",
  "SEO Optimization", "Website Redesign", "Other"
];
const BUDGETS = [
  "Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000", "₹5,00,000+"
];

export default function StartProject() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    projectType: "", budget: "", deadline: "", details: ""
  });
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const select = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="sp-page">
      <div className="sp-header">
        <div className="sp-breadcrumb">HOME / <span>START PROJECT</span></div>
        <h1 className="sp-title">Start Your<br /><span>Project</span></h1>
        <p className="sp-subtitle">Tell us about your vision. We'll turn it into reality.</p>
      </div>

      {sent ? (
        <div className="sp-success">
          <div className="sp-success-icon">✓</div>
          <h2>Request Received!</h2>
          <p>Thank you! We'll get back to you within 24 hours. Redirecting…</p>
        </div>
      ) : (
        <form className="sp-form" onSubmit={submit}>

          {/* Step indicators */}
          <div className="sp-steps">
            {[1,2,3].map(s => (
              <div key={s} className={`sp-step ${step >= s ? "active" : ""} ${step === s ? "current" : ""}`}>
                <div className="sp-step-num">{s}</div>
                <span className="sp-step-label">{s === 1 ? "About You" : s === 2 ? "Your Project" : "Details"}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="sp-section">
              <h3 className="sp-section-title">Tell us about yourself</h3>
              <div className="sp-grid-2">
                <div className="sp-field">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
                </div>
                <div className="sp-field">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@company.com" required />
                </div>
                <div className="sp-field">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 00000 00000" />
                </div>
                <div className="sp-field">
                  <label>Company / Brand</label>
                  <input name="company" value={form.company} onChange={handle} placeholder="Your Company Name" />
                </div>
              </div>
              <button type="button" className="sp-next" onClick={() => setStep(2)}
                disabled={!form.name || !form.email}>
                Next Step →
              </button>
            </div>
          )}

          {/* Step 2: Project Type & Budget */}
          {step === 2 && (
            <div className="sp-section">
              <h3 className="sp-section-title">About your project</h3>

              <div className="sp-field">
                <label>Project Type *</label>
                <div className="sp-chips">
                  {PROJECT_TYPES.map(pt => (
                    <button key={pt} type="button"
                      className={`sp-chip ${form.projectType === pt ? "selected" : ""}`}
                      onClick={() => select("projectType", pt)}>
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sp-field" style={{ marginTop: "32px" }}>
                <label>Budget Range</label>
                <div className="sp-chips">
                  {BUDGETS.map(b => (
                    <button key={b} type="button"
                      className={`sp-chip ${form.budget === b ? "selected" : ""}`}
                      onClick={() => select("budget", b)}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sp-field sp-deadline" style={{ marginTop: "32px" }}>
                <label>Project Deadline</label>
                <input type="date" name="deadline" value={form.deadline} onChange={handle} />
              </div>

              <div className="sp-btn-row">
                <button type="button" className="sp-back" onClick={() => setStep(1)}>← Back</button>
                <button type="button" className="sp-next" onClick={() => setStep(3)}
                  disabled={!form.projectType}>
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Project Details */}
          {step === 3 && (
            <div className="sp-section">
              <h3 className="sp-section-title">Describe your vision</h3>
              <div className="sp-field">
                <label>Project Details *</label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handle}
                  placeholder="Tell us about your project goals, target audience, features you need, any specific design preferences, references you love, or anything else that will help us understand your vision…"
                  rows={8}
                  required
                />
              </div>

              <div className="sp-summary">
                <h4>Summary</h4>
                <div className="sp-summary-grid">
                  {form.name && <span><b>Name:</b> {form.name}</span>}
                  {form.email && <span><b>Email:</b> {form.email}</span>}
                  {form.projectType && <span><b>Project:</b> {form.projectType}</span>}
                  {form.budget && <span><b>Budget:</b> {form.budget}</span>}
                  {form.deadline && <span><b>Deadline:</b> {form.deadline}</span>}
                </div>
              </div>

              <div className="sp-btn-row">
                <button type="button" className="sp-back" onClick={() => setStep(2)}>← Back</button>
                <button type="submit" className="sp-submit" disabled={!form.details}>
                  Submit Request ↗
                </button>
              </div>
            </div>
          )}

        </form>
      )}
    </div>
  );
}
