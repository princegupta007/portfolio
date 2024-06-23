import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Prince Gupta </span>
                 , an experienced <span className="yellow"> Full Stack Developer.</span>
                <br />
                <br />
                I hold a Master of Computer Applications (MCA) from JECRC University.<br />
                <br />
                  I'm pretty good with frontend stuff like
                  <b className="yellow"> React, Vite, HTML5, CSS3, JavaScript, Bootstrap, and Material UI </b>
                  , i also know some backend stuff like  
                  <b className="yellow"> Django and Python</b> and i'm good with
                  <b className="yellow"> SQL database</b> Plus, i'm handy with 
                  <b className="yellow"> git</b> for version control.

                  <br />
                  <br />Right now, I'm working in Sehaj Synergy Technologies Private Limited (SSTPL). where I develop 
                  <b className="yellow"> user-friendly and responsive interfaces, implement secure routes and API connections</b>
                  , and collaborate with backend developers for seamless integration. I have led the development of diverse projects, including streetlight management systems, banking solutions, and tracking systems. My work emphasizes
                  <b className="yellow"> creating secure, efficient web applications </b>
                  with a focus on 
                  <b className="yellow"> user experience and data integrity</b>.

                   
                  <br />
                  <br />
                  I'm passionate about leveraging my skills to drive 
                  <b className="yellow"> business success and enhance user experiences</b>. 
                 
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Let's connect and explore opportunities to <span className="yellow">collaborate!</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/princegupta007"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/princegupta7/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaInstagram />
                    </a>
                  </li> */}
                  {/* <li className="social-icons">
                    <a
                      href="https://leetcode.com/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li> */}
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About