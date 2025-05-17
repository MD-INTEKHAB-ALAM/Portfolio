import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../../Particle'
import Typing from './Typing'
import Tilt from "react-parallax-tilt";
import AboutmeContainer from '../../components/aboutme/aboutmeContainer';
import { motion } from 'framer-motion';
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Certification from '../../components/certificate/Certification';
import Projects from '../../components/projects/Projects';
import Contactus from '../../components/contactus/Contactus';
import mdImage from '../../assets/md2.jpg';


export default function Home() {
    // Fade-in variant for the image
    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
    };

    return (
        <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={8} className="home-header">
                            <h1 style={{ paddingBottom: 15, fontSize: '175px' }} className="heading">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Md Intekhab Alam</strong>
                            </h1>

                            <div className="typing-homeclass">
                                <Typing />
                            </div>
                            <div className='sociallink-home'>
                                <ul className="homeaboutsociallinks">
                                    <li className="socialicons">
                                        <a
                                            href="https://github.com/MD-INTEKHAB-ALAM"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.linkedin.com/in/md-intekhab-alam-728116229/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4} style={{ paddingBottom: 20 }}>
                            <div className="img-home-main">
                                <Tilt>
                                    <motion.img
                                        src={mdImage}
                                        alt="pic"
                                        className="img-fluid rounded-circle"
                                        variants={fadeVariants}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </Tilt>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <AboutmeContainer />
            <Certification />
            <Projects />
            <Contactus />
        </section>
    )
}
