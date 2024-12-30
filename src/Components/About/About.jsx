import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./About.css";
const About = () => {
  const [background, setBackground] = React.useState(false);
  const [design, setDesign] = React.useState(false);
  const [Things, setThings] = React.useState(false);
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
    <div>
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
      >
        <div className="AboutMeLine"></div>
        <div className="AboutMeText">ABOUT ME</div>
      </div>

      {/* About */}
      <div className="AboutMe">
        <div className="AboutMeName">Deepak Yadav</div>
        <div className="AboutMeDescription">
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
          <div className="AboutMeBackground">
            <div>Background</div>
            <div
              className="AboutMeBackgroundButton"
              onClick={() => setBackground(!background)}
            >
              {background ? "-" : "+"}
            </div>
          </div>
          <animated.div style={{ ...backgroundStyle }}>
            <div
              className="AboutMeBackgroundText"
              style={{
                display: background ? "block" : "none",
                color: "#84888E",
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
          <div className="AboutMeBackground">
            <div>Design Philosophy</div>
            <div
              className="AboutMeBackgroundButton"
              onClick={() => setDesign(!design)}
            >
              {design ? "-" : "+"}
            </div>
          </div>

          <animated.div style={{ ...designStyle }}>
            <div
              style={{
                color: "#84888E",
                display: design ? "block" : "none",
              }}
              className="AboutMeBackgroundText"
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
          <div className="AboutMeBackground">
            <div>Things I Love</div>
            <div
              className="AboutMeBackgroundButton"
              onClick={() => setThings(!Things)}
            >
              {Things ? "-" : "+"}
            </div>
          </div>
          <animated.div style={{ ...thingsStyle }}>
            <div
              style={{
                color: "#84888E",
                display: Things ? "block" : "none",
              }}
              className="AboutMeBackgroundText"
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
    </div>
  );
};

export default About;
