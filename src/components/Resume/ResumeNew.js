import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumePdf from "../../Assets/Harsh_Chopda_Resume.pdf";
import cvPdf from "../../Assets/Harsh_Chopda_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md="auto" className="d-flex mb-3 mb-md-0">
            <Button
              variant="primary"
              href={resumePdf}
              target="_blank"
              style={{ maxWidth: "250px", margin: "0 10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Col>
          <Col md="auto" className="d-flex">
            <Button
              variant="primary"
              href={cvPdf}
              target="_blank"
              style={{ maxWidth: "250px", margin: "0 10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document file={resumePdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md="auto" className="d-flex mb-3 mb-md-0">
            <Button
              variant="primary"
              href={resumePdf}
              target="_blank"
              style={{ maxWidth: "250px", margin: "0 10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Col>
          <Col md="auto" className="d-flex">
            <Button
              variant="primary"
              href={cvPdf}
              target="_blank"
              style={{ maxWidth: "250px", margin: "0 10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
