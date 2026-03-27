import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import roomieSpot from "../../Assets/Projects/chatify.png";
import famCare from "../../Assets/Projects/codeEditor.png";

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
              imgPath={roomieSpot}
              isBlog={false}
              title="RoomieSpot"
              description="A room and flat rental platform for students featuring property listings, location details, and landlord contact integration. Built to simplify the search for student accommodation with a clean mobile interface."
              ghLink="https://github.com/Harsh6465/RoomieSpot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={famCare}
              isBlog={false}
              title="Fam Care Center"
              description="A comprehensive Hospital Management System designed to manage patient records, doctor appointments, and hospital services via a centralized database. Streamlines hospital operations with a robust backend."
              ghLink="https://github.com/Harsh6465"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
