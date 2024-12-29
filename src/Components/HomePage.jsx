import React, { useEffect, useRef } from "react";
import "../App.css";
import "../cursor-shapes-effect.css";
import programmingIcon from "../assets/Icons/programmingIcons.png";
import { gsap } from "gsap";
import Attendity1 from "../assets/ProjectImages/Attendity1.jpg";
import Attendity2 from "../assets/ProjectImages/Attendity2.jpg";
import Logo from "../assets/Images/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import Hero from "./Hero/Hero";

const HomePage = () => {
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const [isHovered4, setIsHovered4] = React.useState(false);
  const [isHovered5, setIsHovered5] = React.useState(false);
  const [isHovered6, setIsHovered6] = React.useState(false);

  const [background, setBackground] = React.useState(false);
  const [design, setDesign] = React.useState(false);
  const [Things, setThings] = React.useState(false);

  const cursorRef = useRef(null); // Initializes cursorRef as null
  const shapesRef = useRef([]); // No type annotations here

  const Home = useRef(null);
  const Skills = useRef(null);
  const About = useRef(null);
  const Crafts = useRef(null);
  const Contact = useRef(null);

  const data = [
    { label: "Home", ref: Home },
    { label: "About", ref: About },
    { label: "Skills", ref: Skills },
    { label: "Crafts", ref: Crafts },
    { label: "Contact", ref: Contact },
  ];
  const scrollToSection = (sectionRef, label) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the section for other labels
  };

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

  const backgroundStyle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" }, // Initial state
    to: {
      opacity: background ? 1 : 0, // Target state
      transform: background ? "translateY(0)" : "translateY(-20px)",
    },
    config: { tension: 200, friction: 20 }, // Smooth animation config
    reverse: !background, // Automatically reverse when closing
  });

  const designStyle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: {
      opacity: design ? 1 : 0,
      transform: design ? "translateY(0)" : "translateY(-20px)",
    },
    config: { tension: 200, friction: 20 },
    reverse: !design,
  });

  const thingsStyle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: {
      opacity: Things ? 1 : 0,
      transform: Things ? "translateY(0)" : "translateY(-20px)",
    },
    config: { tension: 200, friction: 20 },
    reverse: !Things,
  });

  return (
    <div
      style={{
        backgroundColor: "#fff",
        paddingLeft: "6vw",
        paddingRight: "6vw",
      }}
    >
      {/* header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "10vh",
        }}
      >
        <div style={{ marginLeft: "1vw" }}>
          <img
            src={Logo}
            style={{ width: "3vw", height: "3vw", borderRadius: "50%" }}
          />
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              gap: "2vw",
              paddingRight: "3vw",
            }}
          >
            {data.map((item) => (
              <li
                style={{
                  color: "#84888E",
                  fontFamily: "Jazmin",
                  fontSize: "1vw",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = "none";
                }}
                onClick={() => scrollToSection(item.ref, item.label)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* hero */}
      <Hero />
      {/* About Me  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "15vh",
          flexDirection: "column",
          gap: "5px",
        }}
        ref={Skills}
      >
        <div
          style={{ backgroundColor: "#000", width: "2vw", height: "2px" }}
        ></div>
        <div
          style={{
            fontFamily: "Jazmin",
            fontSize: "1.5vw",
          }}
        >
          ABOUT ME
        </div>
      </div>

      {/* About */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          minHeight: background && design ? "160vh" : "100vh",
          flexDirection: "column",
          gap: "5px",
          paddingTop: design ? "20px" : "0px",
          paddingBottom: design ? "20px" : "0px",
        }}
        ref={About}
      >
        <div
          style={{
            fontFamily: "JazminSemiBold",
            fontSize: "2vw",
            textAlign: "left",
            width: "60%",
          }}
        >
          Deepak Yadav
        </div>
        <div
          style={{
            fontFamily: "Jazmin",
            textAlign: "justify",
            width: "60%",
            color: "#84888E",
            fontSize: "1vw",
          }}
        >
          Hi, I'm Deepak Yadav, a third-year BE IT student at Thakur College of
          Engineering & Technology (TCET). I'm passionate about technology and
          development, and I’m honing my skills in various areas, as you’ve
          likely seen in my work so far.
        </div>

        <div
          style={{
            width: "60%",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "JazminSemiBold",
              fontSize: "1.5vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Background</div>
            <div
              style={{
                color: "#84888e",
                cursor: "pointer",
                fontSize: "3vw",
              }}
              onClick={() => setBackground(!background)}
            >
              {background ? "-" : "+"}
            </div>
          </div>
          <animated.div style={{ ...backgroundStyle }}>
            <div
              style={{
                fontFamily: "Jazmin",
                textAlign: "justify",
                color: "#84888E",
                marginTop: "10px",
                display: background ? "block" : "none",
              }}
            >
              Ever since I can remember, I've been fascinated by how technology
              can shape the way we live and communicate. This curiosity led me
              to pursue a degree in Information Technology, where I’ve been
              exploring the world of software development, user experience, and
              how technology can create impactful, seamless experiences. My
              journey so far has been driven by a desire to understand both the
              technical and human side of innovation.
            </div>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#F0F0F0",
                marginTop: "1vw",
              }}
            ></div>
          </animated.div>
        </div>

        <div
          style={{
            width: "60%",
            marginTop: "1.5vw",
          }}
        >
          <div
            style={{
              fontFamily: "JazminSemiBold",
              fontSize: "1.5vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Design Philosophy</div>
            <div
              style={{
                color: "#84888e",
                cursor: "pointer",
                fontSize: "3vw",
              }}
              onClick={() => setDesign(!design)}
            >
              +
            </div>
          </div>

          <animated.div style={{ ...designStyle }}>
            <div
              style={{
                fontFamily: "Jazmin",
                textAlign: "justify",
                color: "#84888E",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                display: design ? "block" : "none",
              }}
            >
              <div>
                As a student of Information Technology, my design philosophy
                revolves around simplicity, functionality, and user-centric
                solutions. My journey so far has taught me that technology
                should never feel intimidating or complicated. I believe in
                designing experiences that are intuitive and accessible,
                allowing users to interact with products effortlessly, without
                unnecessary barriers or confusion.
              </div>
              <div>
                I’m particularly drawn to the balance between form and
                function—where design doesn’t just look good but works well.
                It’s not only about creating interfaces that are visually
                appealing but about ensuring that every interaction feels fluid
                and purposeful. Every button click, every scroll, and every
                animation should feel intentional, contributing to the overall
                experience.
              </div>
              <div>
                What excites me most about design is the ability to solve
                real-world problems through technology. I enjoy taking complex
                challenges and breaking them down into elegant, simple solutions
                that users can connect with on a personal level. To me, good
                design doesn’t just serve a functional purpose—it enhances the
                experience, making it more enjoyable and seamless.
              </div>
              <div>
                At the core of my work is a commitment to understanding the
                user’s needs. I aim to create designs that resonate with people,
                ensuring that each interaction feels personal, engaging, and
                most importantly, human.
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#F0F0F0",
                marginTop: "1vw",
              }}
            ></div>
          </animated.div>
        </div>

        <div
          style={{
            width: "60%",
            marginTop: "1.5vw",
          }}
        >
          <div
            style={{
              fontFamily: "JazminSemiBold",
              fontSize: "1.5vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Things I Love</div>
            <div
              style={{
                color: "#84888e",
                cursor: "pointer",
                fontSize: "3vw",
              }}
              onClick={() => setThings(!Things)}
            >
              +
            </div>
          </div>
          <animated.div style={{ ...thingsStyle }}>
            <div
              style={{
                fontFamily: "Jazmin",
                color: "#84888E",
                marginTop: "1vw",
                textAlign: "justify",
                display: Things ? "block" : "none",
              }}
            >
              I find inspiration in the world around me. My love for traveling
              allows me to experience different cultures, which often influences
              my design choices and creative process. When I'm not working on a
              project, you'll likely find me drawing, listening to music, or
              exploring new places. Music, in particular, plays a big role in
              fueling my creativity and helping me focus. Whether it's capturing
              the essence of a city or expressing myself through art, I enjoy
              finding ways to bring those experiences into my work.
            </div>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#F0F0F0",
                marginTop: "1vw",
              }}
            ></div>
          </animated.div>
        </div>
      </div>

      {/* Skills header */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "15vh",
          flexDirection: "column",
          gap: "5px",
        }}
        ref={Skills}
      >
        <div
          style={{ backgroundColor: "#000", width: "30px", height: "2px" }}
        ></div>
        <div
          style={{
            fontFamily: "Jazmin",
            fontSize: "24px",
          }}
        >
          SKILLS
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "55%",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center content horizontally
            gap: "20px",
            padding: "20px",
          }}
        >
          {/* Box 1 */}
          <div
            style={{
              width: "35%",
              height: isHovered1 ? "120%" : "90%", // Dynamically change height
              backgroundColor: "#f0f0f0",
              flexDirection: "column",
              display: "flex",
              justifyContent: isHovered1 ? "start" : "center",
              alignItems: "center",
              // transformOrigin: "top", // Ensures the top stays fixed
              top: "20px", // Anchor the top
              gap: isHovered1 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            {!isHovered1 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <div style={{ fontSize: "50px" }}>.</div>
                <div
                  style={{
                    fontFamily: "Jazmin",
                    color: "#84888E",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Programming Languages
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "65%",
                    backgroundColor: "#fff",
                    width: "90%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    src="https://wallpaper.dog/large/525965.jpg"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover", // Ensure the image covers the div without distortion
                    }}
                  />
                </div>

                <div style={{ fontSize: "50px" }}>.</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#84888E",
                      fontSize: "18px",
                    }}
                  >
                    Programming Languages
                  </div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {"Java, JavaScript, C++, Python"}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Box 2 */}
          <div
            style={{
              width: "35%",
              height: isHovered2 ? "120%" : "90%", // Dynamically change height
              backgroundColor: "#f0f0f0",
              flexDirection: "column",
              display: "flex",
              justifyContent: isHovered2 ? "start" : "center",
              alignItems: "center",
              // transformOrigin: "top", // Ensures the top stays fixed
              top: "20px", // Anchor the top
              gap: isHovered2 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {!isHovered2 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <div style={{ fontSize: "50px" }}>.</div>
                <div
                  style={{
                    fontFamily: "Jazmin",
                    color: "#84888E",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Web Development
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "65%",
                    backgroundColor: "#fff",
                    width: "90%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover", // Ensure the image covers the div without distortion
                    }}
                  />
                </div>

                <div style={{ fontSize: "50px" }}>.</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#84888E",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    Web Development
                  </div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {"MERN Stack"}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Box 3 */}
          <div
            style={{
              width: "35%",
              height: isHovered3 ? "120%" : "90%", // Dynamically change height
              backgroundColor: "#f0f0f0",
              flexDirection: "column",
              display: "flex",
              justifyContent: isHovered3 ? "start" : "center",
              alignItems: "center",
              // transformOrigin: "top", // Ensures the top stays fixed
              top: "20px", // Anchor the top
              gap: isHovered3 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            {!isHovered3 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <div style={{ fontSize: "50px" }}>.</div>
                <div
                  style={{
                    fontFamily: "Jazmin",
                    color: "#84888E",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Mobile Development
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "65%",
                    backgroundColor: "#fff",
                    width: "90%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    src="https://www.udacity.com/blog/wp-content/uploads/2020/12/Mobile-App-Development_Blog-scaled.jpeg"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover", // Ensure the image covers the div without distortion
                    }}
                  />
                </div>

                <div style={{ fontSize: "50px" }}>.</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#84888E",
                      fontSize: "18px",
                    }}
                  >
                    Mobile Development
                  </div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {"React Native, Expo"}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "55%",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center", // Center content horizontally
            padding: "20px",
          }}
        >
          {/* Box 1 */}
          <div
            style={{
              width: "35%",
              height: isHovered4 ? "120%" : "90%", // Dynamically change height
              backgroundColor: "#f0f0f0",
              flexDirection: "column",
              display: "flex",
              justifyContent: isHovered4 ? "start" : "center",
              alignItems: "center",
              // transformOrigin: "top", // Ensures the top stays fixed
              top: "20px", // Anchor the top
              gap: isHovered4 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            {!isHovered4 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <div style={{ fontSize: "50px" }}>.</div>
                <div
                  style={{
                    fontFamily: "Jazmin",
                    color: "#84888E",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  DevOps & Tools
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "65%",
                    backgroundColor: "#fff",
                    width: "90%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    src="https://www.talent-works.com/wp-content/uploads/2021/03/3981-TW-Blog-Why-Hire-a-DevOps-engineer_BLOG-HEADER-1920x629-v1.png"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover", // Ensure the image covers the div without distortion
                    }}
                  />
                </div>

                <div style={{ fontSize: "50px" }}>.</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#84888E",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    DevOps & Tools
                  </div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {"Git, Docker, CI/CD Pipelines"}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Box 2 */}
          <div
            style={{
              width: "35%",
              height: isHovered5 ? "120%" : "90%", // Dynamically change height
              backgroundColor: "#f0f0f0",
              flexDirection: "column",
              display: "flex",
              justifyContent: isHovered5 ? "start" : "center",
              alignItems: "center",
              // transformOrigin: "top", // Ensures the top stays fixed
              top: "20px", // Anchor the top
              gap: isHovered5 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            {!isHovered5 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <div style={{ fontSize: "50px" }}>.</div>
                <div
                  style={{
                    fontFamily: "Jazmin",
                    color: "#84888E",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Cloud & Hosting
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "65%",
                    backgroundColor: "#fff",
                    width: "90%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/656623a046f40f879846f1ca/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover", // Ensure the image covers the div without distortion
                    }}
                  />
                </div>

                <div style={{ fontSize: "50px" }}>.</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#84888E",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    Cloud & Hosting
                  </div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {"AWS, Netlify, Render,Firebase"}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Box 3 */}
          <div
            style={{
              width: "35%",
              height: isHovered6 ? "120%" : "90%", // Dynamically change height
              backgroundColor: "#f0f0f0",
              flexDirection: "column",
              display: "flex",
              justifyContent: isHovered6 ? "start" : "center",
              alignItems: "center",
              // transformOrigin: "top", // Ensures the top stays fixed
              top: "20px", // Anchor the top
              gap: isHovered6 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            {!isHovered6 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <div style={{ fontSize: "50px" }}>.</div>
                <div
                  style={{
                    fontFamily: "Jazmin",
                    color: "#84888E",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Database Management
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "65%",
                    backgroundColor: "#fff",
                    width: "90%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    src="https://assets.website-files.com/61b7127e64746d558d27873a/634fbee1644ce2215e738bf6_Blog_Complete%20Guide%20to%20Database%20Replications.png"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover", // Ensure the image covers the div without distortion
                    }}
                  />
                </div>

                <div style={{ fontSize: "50px" }}>.</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#84888E",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    Database Management
                  </div>
                  <div
                    style={{
                      fontFamily: "Jazmin",
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {"MongoDB, MySQL,Redis"}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Projects header*/}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "15vh",
          flexDirection: "column",
          gap: "5px",
        }}
        ref={Crafts}
      >
        <div
          style={{ backgroundColor: "#000", width: "30px", height: "2px" }}
        ></div>
        <div
          style={{
            fontFamily: "Jazmin",
            fontSize: "24px",
          }}
        >
          PROJECTS
        </div>
      </div>

      {/* Projects */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "100vh",
        }}
      >
        <div style={{ padding: "100px" }}>
          <div
            style={{ fontFamily: "Jazmin", fontSize: "20px", color: "#747474" }}
          >
            Attendity
          </div>
          <div style={{ fontFamily: "Jazmin", fontSize: "30px" }}>
            Geolocation based attendance tracking application
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 5fr",
              marginTop: "50px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Attendance
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Geofencing
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Face Recognition
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Work Hours
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  SOS Feature
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  React Native
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Reactjs
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  SQL
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Socket.io
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Node js
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Express js
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#000",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  elevation: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  color: "#fff",
                  fontFamily: "Jazmin",
                  width: "150px",
                  cursor: "pointer",
                  transition: " background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#82F5CB";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#fff";
                }}
              >
                View Work
              </div>
            </div>
            <div
              style={{
                marginLeft: "50px",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <img src={Attendity1} style={{ width: "30%", height: "100%" }} />
              <img src={Attendity2} style={{ width: "30%", height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "100vh",
        }}
      >
        <div style={{ padding: "100px" }}>
          <div
            style={{ fontFamily: "Jazmin", fontSize: "20px", color: "#747474" }}
          >
            Chateo
          </div>
          <div style={{ fontFamily: "Jazmin", fontSize: "30px" }}>
            Realtime Chat Application
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 2fr",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                marginLeft: "50px",
                display: "flex",
                justifyContent: "staet",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <img src={Attendity1} style={{ width: "30%", height: "100%" }} />
              <img src={Attendity2} style={{ width: "30%", height: "100%" }} />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Chat Application
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Realtime Chat
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Friend Requests
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Profile Setting
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  React Native
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Mongo DB
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Socket.io
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Node js
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Express js
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#000",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  elevation: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  color: "#fff",
                  fontFamily: "Jazmin",
                  width: "150px",
                  cursor: "pointer",
                  transition: " background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#82F5CB";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#fff";
                }}
              >
                View Work
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "100vh",
        }}
      >
        <div style={{ padding: "100px" }}>
          <div
            style={{ fontFamily: "Jazmin", fontSize: "20px", color: "#747474" }}
          >
            Spam Detector
          </div>
          <div style={{ fontFamily: "Jazmin", fontSize: "30px" }}>
            Spam Detection using Machine Learning
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 5fr",
              marginTop: "50px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Machine Learning
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Spam Detection
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Natural Language Processing
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Python
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Flask
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  React Native
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#000",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  elevation: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  color: "#fff",
                  fontFamily: "Jazmin",
                  width: "150px",
                  cursor: "pointer",
                  transition: " background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#82F5CB";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#fff";
                }}
              >
                View Work
              </div>
            </div>
            <div
              style={{
                marginLeft: "50px",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <img src={Attendity1} style={{ width: "30%", height: "100%" }} />
              <img src={Attendity2} style={{ width: "30%", height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "100vh",
        }}
      >
        <div style={{ padding: "100px" }}>
          <div
            style={{ fontFamily: "Jazmin", fontSize: "20px", color: "#747474" }}
          >
            PixForge
          </div>
          <div style={{ fontFamily: "Jazmin", fontSize: "30px" }}>
            Image Editing Application
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 2fr",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                marginLeft: "50px",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <img src={Attendity1} style={{ width: "30%", height: "100%" }} />
              <img src={Attendity2} style={{ width: "30%", height: "100%" }} />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Image Editing
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Filters & Effects
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Image Cropping & Resizing
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Image Uploading & Downloading
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  React Native
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Machine Learning
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Python
                </div>
                <div
                  style={{
                    backgroundColor: "#F7F7F7",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    elevation: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Jazmin",
                  }}
                >
                  Flask
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#000",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  elevation: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  color: "#fff",
                  fontFamily: "Jazmin",
                  width: "150px",
                  cursor: "pointer",
                  transition: " background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#82F5CB";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#fff";
                }}
              >
                View Work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact header*/}
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "2px",
          borderTopWidth: "0px",
          borderColor: "#F0F0F0",
          height: "40vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
        ref={Contact}
      >
        <div
          style={{
            borderWidth: "2px",
            borderLeftWidth: "0px",
            borderTopWidth: "0px",
            borderStyle: "solid",
            borderColor: "#f0f0f0",
            paddingTop: "50px",
            paddingLeft: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <img
            src={Logo}
            style={{ width: "50px", height: "50px", borderRadius: "25px" }}
          />
        </div>
        <div
          style={{
            borderWidth: "2px",
            borderLeftWidth: "0px",
            borderTopWidth: "0px",
            borderStyle: "solid",
            borderColor: "#f0f0f0",
            paddingTop: "50px",
            paddingLeft: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontFamily: "Jazmin", color: "#747474" }}>CRAFTS</div>
          <div style={{ fontFamily: "Jazmin", fontSize: "18px" }}>
            Attendity
          </div>
          <div style={{ fontFamily: "Jazmin", fontSize: "18px" }}>Chateo</div>
          <div style={{ fontFamily: "Jazmin", fontSize: "18px" }}>
            Spam Detection
          </div>
          <div style={{ fontFamily: "Jazmin", fontSize: "18px" }}>
            Pix Forge
          </div>
        </div>
        <div
          style={{
            borderWidth: "2px",
            borderLeftWidth: "0px",
            borderTopWidth: "0px",
            borderStyle: "solid",
            borderColor: "#f0f0f0",
            paddingTop: "50px",
            paddingLeft: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontFamily: "Jazmin", color: "#747474" }}>CONTACTS</div>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                fontFamily: "Jazmin",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              LinkedIn ↗
            </div>
          </a>

          <a
            href="https://github.com/dny5112001"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                fontFamily: "Jazmin",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Github ↗
            </div>
          </a>

          <a
            href="/path/to/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                fontFamily: "Jazmin",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Resume ↗
            </div>
          </a>

          <a
            href="mailto:dny9136833946.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                fontFamily: "Jazmin",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Email ↗
            </div>
          </a>
        </div>
        <div
          style={{
            borderWidth: "2px",
            borderLeftWidth: "0px",
            borderTopWidth: "0px",
            borderStyle: "solid",
            borderColor: "#f0f0f0",
            paddingTop: "50px",
            paddingLeft: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontFamily: "Jazmin", fontSize: "16px" }}>
            © 2025 Deepak Yadav. All Rights Reserved.
          </div>
          <div
            style={{ fontFamily: "Jazmin", color: "#747474", fontSize: "15px" }}
          >
            Made with 🩶 and Americano{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
