import Hero from "./Hero";
import Marquee from "./Marquee";
import Process from "./Process";
import ServiceSection from "./ServiceSection";
import StatsBar from "./StatsBar";
import Contact from "./Contact";
import FooterStrip from "./FooterStrip";
import "./ServicesPage.css";

const IMGS = {
  dev:  "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=900&q=80",
  uiux: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
  seo:  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80",
};

function ServicesPage() {
  return (
    <div className="services-page">
      <Hero />
      <Marquee />

      <div id="wx-services">
        <ServiceSection
          num="01"
          title={"Website\nDevelopment"}
          tags={[
            ["Business Portfolio", "Personal Portfolio", "E-Commerce"],
            ["Site Maintenance", "Website Rebuild"],
          ]}
          desc="We build high-performance websites and digital experiences that are fast, scalable, and designed to grow your business — from portfolio sites to full e-commerce platforms."
          imgSrc={IMGS.dev}
        />

        <ServiceSection
          num="02"
          title={"UI / UX\nDesign"}
          tags={[
            ["Website Design"],
            ["Website Redesign"],
          ]}
          desc="From wireframes to pixel-perfect interfaces, we craft seamless user experiences that look stunning and convert visitors into loyal customers."
          imgSrc={IMGS.uiux}
          reverse
        />

        <ServiceSection
          num="03"
          title={"SEO\nOptimization"}
          tags={[
            ["On-Page SEO", "Technical SEO"],
            ["Content Strategy", "Analytics"],
          ]}
          desc="Get found. We develop and execute tailored SEO strategies — from technical audits to content optimisation — that drive organic traffic and sustainable growth."
          imgSrc={IMGS.seo}
        />
      </div>

      <StatsBar />
      <Process />
      <Contact />
      <FooterStrip />
    </div>
  );
}

export default ServicesPage;
