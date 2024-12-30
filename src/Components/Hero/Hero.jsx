import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import "../../cursor-shapes-effect.css";

const Hero = () => {
  const cursorRef = useRef(null); // Initializes cursorRef as null
  const shapesRef = useRef([]); // No type annotations here
  useEffect(() => {
    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      // Set cursor position
      gsap.set(cursorRef.current, { x: mouseX, y: mouseY });

      // Move the shapes based on cursor
      gsap.to(shapesRef.current, {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    };

    // Mousemove event listener
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="heroContainer">
      <div style={{ textAlign: "center" }}>
        <div className="container">
          <div className="shapes">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                ref={(el) => (shapesRef.current[index - 1] = el)}
                className={`shape shape-${index}`}
              />
            ))}
          </div>
          <div
            className="content"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Jazmin",
                color: "#84888E",
                fontSize: "2vw",
              }}
            >
              Web Architect & Mobile Craftsman
            </div>

            <div
              style={{
                fontFamily: "Jazmin",
                color: "#000",
                fontSize: "8vw",
              }}
            >
              Deepak Yadav
            </div>
          </div>

          <div ref={cursorRef} className="cursor" />
        </div>
      </div>
      <div className="heroslogan">
        <div className="heroSlogan1">Simplify. Humanize. Innovate.</div>
        <div
          className="heroSlogan2"
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          More About me →
        </div>
      </div>
    </div>
  );
};

export default Hero;
