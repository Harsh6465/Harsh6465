import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a passionate software developer based in{" "}
            <span className="purple">Nashik, Maharashtra</span>. I specialize in
            building practical, user-friendly applications using{" "}
            <span className="purple">Java</span>,{" "}
            <span className="purple">Android Studio</span>, and the{" "}
            <span className="purple">MERN stack</span>. I thrive on solving
            real-world problems through technology and am currently focused on
            expanding my expertise in scalable web architectures.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Android Apps 📱
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harsh Chopda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
