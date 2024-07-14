import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FinTracker"
              description="An app is made for splitting bills among users. The app uses Firebase Auth for authentication and Firestore database for storing data. Hence, provides better privacy and security."
              ghLink="https://github.com/nandcoder/fintracker"
              demoLink="https://fintracker-nrj.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="File-System CRUD API"
              description="An API platform containing multiple routes for CRUD operations made using NodeJS and ExpressJS."
              ghLink="https://github.com/nandcoder/fs-crud"
              demoLink="https://fs-crud-nrj.cyclic.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/nandcoder/Face_And_Emotion_Detection"
              demoLink="https://tutor-nrj.netlify.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Tutor AI"
              description="It uses faceapi.js models for facial recognition and recognizing the facial expressions of detected faces. It takes video using webcam and the recognition is applied to it."
              ghLink="https://github.com/nandcoder/Tutor"
              demoLink="https://tutor-nrj.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quiz App"
              description="A quiz app made using ReactJS, it calls an API for question data and on show results on completion."
              ghLink="https://github.com/nandcoder/react-quiz"
              demoLink="https://quiz-nrj.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
