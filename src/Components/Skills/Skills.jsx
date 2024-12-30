import React from "react";
import programmingIcon from "../../assets/Icons/programmingIcons.png";
import "./Skills.css";

const Skills = () => {
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const [isHovered4, setIsHovered4] = React.useState(false);
  const [isHovered5, setIsHovered5] = React.useState(false);
  const [isHovered6, setIsHovered6] = React.useState(false);
  return (
    <div>
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
      >
        <div className="SkillsLine"></div>
        <div className="Skillsheader">SKILLS</div>
      </div>

      {/* Skills */}
      <div className="SkillsContainer">
        <div className="SkillsBoxContainer">
          {/* Box 1 */}
          <div
            style={{
              height: isHovered1 ? "120%" : "90%", // Dynamically change height
              justifyContent: isHovered1 ? "start" : "center",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            className="SkillBox"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            {!isHovered1 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  className="IconImage"
                />
                <div className="SkillsDot">.</div>
                <div className="Skilltitle">Programming Languages</div>
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

                <div className="SkillsDot">.</div>
                <div>
                  <div className="Skilltitle">Programming Languages</div>
                  <div className="Skilltitle" style={{ color: "#000" }}>
                    {"Java, JavaScript, C++, Python"}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Box 2 */}
          <div
            style={{
              height: isHovered2 ? "120%" : "90%", // Dynamically change height
              justifyContent: isHovered2 ? "start" : "center",
              gap: isHovered2 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            className="SkillBox"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {!isHovered2 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  className="IconImage"
                />
                <div className="SkillsDot">.</div>
                <div className="Skilltitle">Web Development</div>
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

                <div className="SkillsDot">.</div>
                <div>
                  <div className="Skilltitle">Web Development</div>
                  <div
                    className="Skilltitle"
                    style={{
                      color: "#000",
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
              height: isHovered3 ? "120%" : "90%", // Dynamically change height
              justifyContent: isHovered3 ? "start" : "center",
              gap: isHovered3 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            className="SkillBox"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            {!isHovered3 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  className="IconImage"
                />
                <div className="SkillsDot">.</div>
                <div className="Skilltitle">Mobile Development</div>
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

                <div className="SkillsDot">.</div>
                <div>
                  <div className="Skilltitle">Mobile Development</div>
                  <div
                    className="Skilltitle"
                    style={{
                      color: "#000",
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
      <div className="SkillsContainer">
        <div className="SkillsBoxContainer">
          {/* Box 1 */}
          <div
            style={{
              height: isHovered4 ? "120%" : "90%", // Dynamically change height
              justifyContent: isHovered4 ? "start" : "center",
              gap: isHovered4 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            className="SkillBox"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            {!isHovered4 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  className="IconImage"
                />
                <div className="SkillsDot">.</div>
                <div className="Skilltitle">DevOps & Tools</div>
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

                <div className="SkillsDot">.</div>
                <div>
                  <div className="Skilltitle">DevOps & Tools</div>
                  <div
                    className="Skilltitle"
                    style={{
                      color: "#000",
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
              height: isHovered5 ? "120%" : "90%", // Dynamically change height
              justifyContent: isHovered5 ? "start" : "center",
              gap: isHovered5 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            className="SkillBox"
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            {!isHovered5 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  className="IconImage"
                />
                <div className="SkillsDot">.</div>
                <div className="Skilltitle">Cloud & Hosting</div>
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

                <div className="SkillsDot">.</div>
                <div>
                  <div className="Skilltitle">Cloud & Hosting</div>
                  <div
                    style={{
                      color: "#000",
                    }}
                    className="Skilltitle"
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
              height: isHovered6 ? "120%" : "90%", // Dynamically change height
              justifyContent: isHovered6 ? "start" : "center",
              gap: isHovered6 ? "10px" : "20px",
              overflow: "hidden",
              transition: "height 0.3s ease", // Smooth transition for height
            }}
            className="SkillBox"
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            {!isHovered6 ? (
              <>
                <img
                  src={programmingIcon}
                  alt="Programming Icon"
                  className="IconImage"
                />
                <div className="SkillsDot">.</div>
                <div className="Skilltitle">Database Management</div>
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

                <div className="SkillsDot">.</div>
                <div>
                  <div className="Skilltitle">Database Management</div>
                  <div
                    style={{
                      color: "#000",
                    }}
                    className="Skilltitle"
                  >
                    {"MongoDB, MySQL,Redis"}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
