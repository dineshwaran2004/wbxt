import React, { useState } from "react";
import "./Testimonials.css";
// Imported your exact global theme hook
import { useTheme } from "../../context/ThemeContext"; 

const TOOLS_DATA = [
  { id: "figma", name: "Figma", desc: "UI/UX Design & Collaborative Prototyping", cat: "Design", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", color: "rgba(242, 78, 30, 0.12)" },
  { id: "vscode", name: "VS Code", desc: "High-Performance Source Code & Web Editing", cat: "Development", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", color: "rgba(0, 122, 204, 0.12)" },
{ id: "semrush", name: "SEMrush", desc: "Enterprise SEO, Keywords & Market Analytics", cat: "Marketing", icon: "/images/tools/semrush.png", color: "rgba(255, 100, 45, 0.12)" },
  { id: "googleads", name: "Google Ads", desc: "Targeted Search Engine Campaigns & PPC Management", cat: "Marketing", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg", color: "rgba(66, 133, 244, 0.12)" },
  { id: "canva", name: "Canva", desc: "Fast Graphic Design, Layout & Content Creation", cat: "Design", icon: "/images/tools/canva.png", color: "rgba(0, 196, 204, 0.12)" },
  { id: "notebooklm", name: "NotebookLM", desc: "Advanced AI-Powered Context Research & Synthesis", cat: "AI", icon: "/images/tools/notebooklm.png", color: "rgba(15, 157, 88, 0.12)" },
  { id: "react", name: "React JS", desc: "Component-Based UI Architecture Layer", cat: "Development", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", color: "rgba(97, 218, 251, 0.12)" },
  { id: "node", name: "Node.js", desc: "Scalable Event-Driven Server Runtime Environment", cat: "Development", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", color: "rgba(51, 153, 51, 0.12)" },
  { id: "nextjs", name: "Next.js", desc: "Production-Ready Full-Stack React Framework", cat: "Development", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg", color: "rgba(255, 255, 255, 0.08)" },
  { id: "git", name: "Git", desc: "Distributed Source Version Control Engine", cat: "Development", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", color: "rgba(240, 80, 50, 0.12)" },
  { id: "github", name: "GitHub", desc: "Cloud Repositories & Automated Dev Workflows", cat: "Development", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", color: "rgba(255, 255, 255, 0.08)" }
];

export default function ToolsTech() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Destructure the global theme string ("light" or "dark")
  const { theme } = useTheme(); 

  const categories = ["All", "Development", "Design", "Marketing"];

  const filteredTools = activeFilter === "All" 
    ? TOOLS_DATA 
    : TOOLS_DATA.filter(tool => tool.cat === activeFilter || (activeFilter === "Design" && tool.cat === "AI"));

  return (
    /* We read the global context string directly here to switch classes dynamically */
    <section className={`classic-tech-section ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="classic-tech-container">
        
        {/* ── TOOLS GRID ── */}
        <div className="classic-grid-side">
          <div className="classic-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${activeFilter === cat ? "is-active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="classic-tools-grid">
            {filteredTools.map((tool) => (
              <div 
                key={tool.id} 
                className={`classic-tool-card ${tool.id === "nextjs" || tool.id === "github" ? "theme-invert-target" : ""}`}
                style={{ "--glow-bg": tool.color }}
              >
                <div className="classic-icon-wrapper">
                  <img src={tool.icon} alt={`${tool.name} logo`} className="classic-tool-img" />
                </div>
                <div className="classic-card-content">
                  <h4 className="classic-tool-name">{tool.name}</h4>
                  <p className="classic-tool-description">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TYPOGRAPHY HERO SIDEBAR ── */}
        <div className="classic-branding-side">
          <div className="sticky-brand-content">
            <h2 className="classic-main-title">
              TOOLS &amp;<br />
              <span className="classic-blue-highlight">TECHNOLOGIES</span>
            </h2>
            <div className="classic-accent-line"></div>
            <p className="classic-side-text">
              We leverage an industry-leading stack of enterprise tools to design, deploy, test, and scale seamless digital solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}