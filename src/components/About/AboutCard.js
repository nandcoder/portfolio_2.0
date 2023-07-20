import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nand Raj </span>
            from <span className="purple"> NIT Jamshedpur</span>.
            <br /> I am a <span className="purple">final year student</span> pursuing B.Tech in Electrical Engineering.
            {/* at BIT Mesra. */}
            <br />
            Additionally, I am currently employed as a teaching assistant at <span className="purple">Testbook.com</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading Stocks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love to build things that benefits the society!"{" "}
          </p>
          <footer className="blockquote-footer">Nand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
