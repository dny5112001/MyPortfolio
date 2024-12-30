import React from "react";
import Attendity1 from "../../assets/ProjectImages/Attendity1.jpg";
import Attendity2 from "../../assets/ProjectImages/Attendity2.jpg";
import "./Projects.css";

const ProjectSection = ({ title, subtitle, tags, imageLeft = false }) => (
  <div className="project-section">
    <div className={`project-content ${imageLeft ? "image-left" : ""}`}>
      <div className="project-info">
        <h3 className="project-subtitle">{subtitle}</h3>
        <h2 className="project-title">{title}</h2>
        <div className="project-details">
          <div className="project-tags">
            {tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <button className="view-work-btn">View Work</button>
        </div>
      </div>
      <div className="project-images">
        <img src={Attendity1} alt={`${subtitle} Screenshot 1`} />
        <img src={Attendity2} alt={`${subtitle} Screenshot 2`} />
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      className="projects-container"
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderTopWidth: "0",
        borderColor: "#f0f0f0",
      }}
    >
      <div className="projects-header">
        <div className="header-line"></div>
        <div>PROJECTS</div>
      </div>

      <ProjectSection
        subtitle="Attendity"
        title="Geolocation based attendance tracking application"
        tags={[
          "Attendance",
          "Geofencing",
          "Face Recognition",
          "Work Hours",
          "SOS Feature",
          "React Native",
          "Reactjs",
          "SQL",
          "Socket.io",
          "Node js",
          "Express js",
        ]}
      />

      <ProjectSection
        subtitle="Chateo"
        title="Realtime Chat Application"
        tags={[
          "Chat Application",
          "Realtime Chat",
          "Friend Requests",
          "Profile Setting",
          "React Native",
          "Mongo DB",
          "Socket.io",
          "Node js",
          "Express js",
        ]}
        imageLeft={true}
      />

      <ProjectSection
        subtitle="Spam Detector"
        title="Spam Detection using Machine Learning"
        tags={[
          "Machine Learning",
          "Spam Detection",
          "Natural Language Processing",
          "Python",
          "Flask",
          "React Native",
        ]}
      />

      <ProjectSection
        subtitle="PixForge"
        title="Image Editing Application"
        tags={[
          "Image Editing",
          "Filters & Effects",
          "Image Cropping & Resizing",
          "Image Uploading & Downloading",
          "React Native",
          "Machine Learning",
          "Python",
          "Flask",
        ]}
        imageLeft={true}
      />
    </div>
  );
};

export default Projects;
