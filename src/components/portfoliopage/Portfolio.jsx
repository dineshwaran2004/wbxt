import { useState } from "react";

import Cursor from "./Cursor";

import Hero from "./Hero";
import Expertise from "./Expertise";
import About from "./About";
import Insights from "./Insights";
import Contact from "./Contact";


import "../../styles/global.css";
import "./Cursor.css";

import "./Hero.css";
import "./Expertise.css";
import "./About.css";
import "./Insights.css";
import "./Contact.css";

import "./responsive.css";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section) => {
    const routeMap = {
      home: "/",
      about: "/about",
      contact: "/contact",
    };

    if (routeMap[section]) {
      window.location.href = routeMap[section];
      return;
    }

    const el = document.getElementById(section);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500&family=DM+Mono:wght@300;400&display=swap');

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          cursor: none !important;
        }

        button {
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar {
          width: 2px;
        }

        ::-webkit-scrollbar-thumb {
          background: #0d0d0d;
        }

        ::-webkit-scrollbar-track {
          background: #f0ede8;
        }
      `}</style>

      <Cursor />

     
      <main>
        <Hero id="home" />
        <Expertise id="expertise" />
        <About id="about" />
        <Insights id="insights" />
        <Contact id="contact" />
       
      </main>
    </>
  );
}