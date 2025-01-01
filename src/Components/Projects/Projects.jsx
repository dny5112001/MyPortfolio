import React from "react";
import Attendity1 from "../../assets/ProjectImages/Attendity1.jpg";
import Attendity2 from "../../assets/ProjectImages/Attendity2.jpg";
import Spam1 from "../../assets/ProjectImages/Spam1.jpg";
import Spam2 from "../../assets/ProjectImages/spam2.jpg";
import Chateo1 from "../../assets/ProjectImages/Chateo1.jpeg";
import Chateo2 from "../../assets/ProjectImages/Chateo2.jpeg";
import Chateo3 from "../../assets/ProjectImages/Chateo3.jpeg";
import Chateo4 from "../../assets/ProjectImages/chateo4.jpeg";
import Chateo5 from "../../assets/ProjectImages/Chateo5.jpeg";
import "./Projects.css";

const ProjectSection = ({
  title,
  subtitle,
  tags,
  images,
  imageLeft = false,
}) => (
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
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${subtitle} Screenshot ${index + 1}`}
          />
        ))}
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
        images={[Attendity1, Attendity2]}
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
        images={[Chateo1, Chateo2]}
      />

      <ProjectSection
        subtitle="Spam Shield"
        title="Spam Detection using Machine Learning"
        tags={[
          "Machine Learning",
          "Spam Detection",
          "ML Model Training",
          "Natural Language Processing",
          "Python",
          "Flask",
          "React Native",
        ]}
        images={[Spam1, Spam2]}
      />

      {/* <ProjectSection
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
        images={[Attendity1, Attendity2]}
      /> */}
    </div>
  );
};

export default Projects;
