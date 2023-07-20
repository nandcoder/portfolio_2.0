import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
          <h5>Copyright © {year} NRJ</h5>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/nandcoder"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:nandr.jsr@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <HiMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nand-raj/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/nand.nrj/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            
          </ul>
          <p>Designed and Developed by <a href="https://github.com/soumyajit4419/Portfolio">Soumyajit</a></p>

      {/*<Row>
         <Col md="4" className="footer-copywright">
        </Col> */}
        {/* <Col md="4" className="footer-copywright">
        </Col> 
        <Col md="4" className="footer-body">
        </Col>
      </Row>*/}
    </Container>
  );
}

export default Footer;
