import React, { useRef } from "react";
import "../App.css";
import Logo from "../assets/Images/logo.jpg";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const HomePage = () => {
  const Home = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const sections = [
    { label: "Home", ref: Home },
    { label: "About", ref: AboutRef },
    { label: "Skills", ref: SkillsRef },
    { label: "Projects", ref: ProjectsRef },
    { label: "Contact", ref: ContactRef },
  ];

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        paddingLeft: "6vw",
        paddingRight: "6vw",
      }}
    >
      {/* Header */}
      <div className="headerContainer">
        <div style={{ marginLeft: "1vw" }}>
          <img src={Logo} className="LogoImage" alt="Logo" />
        </div>
        <div className="LinksContainer">
          {sections.map((item, index) => (
            <div
              key={index}
              className="Links"
              onMouseEnter={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none";
              }}
              onClick={() => scrollToSection(item.ref)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div ref={Home}>
        <Hero />
      </div>
      <div ref={AboutRef}>
        <About />
      </div>
      <div ref={SkillsRef}>
        <Skills />
      </div>
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
