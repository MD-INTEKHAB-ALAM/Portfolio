import React from 'react';
import Particle from '../../Particle';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import c from '../../images/c.png';
import ec from '../../images/ecommerce.gif';
import ba from '../../images/book-animation.gif';
import wa from '../../images/weather-app-animation.gif';
import { FaPlay, FaCode } from 'react-icons/fa';

export default function ProjectPage() {
  // Animation variants
  const zoomVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Project data to map over for easier management
  const projects = [
    {
      title: "Shopper",
      img: ec,
      desc: "Developed a high-performance E-commerce website using React with dynamic routing and efficient state management through Context API.Improved load times by 40% using lazy loading and code-splitting, resulting in a faster, more responsive user experience.",
      lang: "HTML, CSS, JS, REACT",
      demoLink: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/Ecommerce_Website",
      codeLink: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/Ecommerce_Website",
      bgColor: 'rgb(142 70 186 / 31%)',
      borderColor: '1px solid',
      titleColor: '#fbd9ad',
      descColor: 'rgb(147 71 192)',
      langColor: '#b061df',
    },
    {
      title: "Inventory Management System",
      img: ba,
      desc: "Built an Inventory Management System using Express.js following the MVC architecture to handle product operations efficiently.Enhanced the user interface with EJS templating and a responsive front end using HTML, CSS, and JavaScript for seamless inventory control.",
      lang: "NodeJs, ExpressJs, EJS",
      demoLink: "https://github.com/MD-INTEKHAB-ALAM/Inventory-Management",
      codeLink: "https://github.com/MD-INTEKHAB-ALAM/Inventory-Management",
      bgColor: 'rgb(142 70 186 / 31%)',
      borderColor: '1px solid',
      titleColor: '#fbd9ad',
      descColor: '#b061df',
      langColor: '#b061df',
    },
    {
      title: "Wander Play",
      img: wa,
      desc: "WanderPlay is a fun and interactive website featuring three games—Quiz, Emoji Guessing, and Rock-Paper-Scissors—built using HTML, CSS, and JavaScript.Designed to provide an engaging user experience with responsive design and smooth game interactions.",
      lang: "HTML, CSS, JS",
      demoLink: "https://github.com/MD-INTEKHAB-ALAM/WanderPlay",
      codeLink: "https://github.com/MD-INTEKHAB-ALAM/WanderPlay",
      bgColor: 'rgb(142 70 186 / 31%)',
      borderColor: '1px solid',
      titleColor: '#fbd9ad',
      descColor: '#b061df',
      langColor: '#b061df',
    },
    {
      title: "BlogApp",
      img: "https://stackideas.com/images/apps/2429/logo.png",
      desc: "Developed a dynamic blog application using React.js and Firebase Firestore, allowing real-time content updates and seamless user interaction.Implemented React Hooks for efficient state management and built a responsive UI for an optimized experience across all devices.",
      lang: "HTML, CSS, JS, REACT",
      demoLink: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/BlogAppUsingFirebase",
      codeLink: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/BlogAppUsingFirebase",
      bgColor: 'rgb(142 70 186 / 31%)',
      borderColor: '1px solid',
      titleColor: '#fbd9ad',
      descColor: '#b061df',
      langColor: '#b061df',
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />

        <Container className="home-content">
          <div className="d-flex justify-content-center" style={{ backgroundColor: '#fbd9ad' }}>
            <motion.h1
              style={{ color: 'rgb(134 61 176)' }}
              initial="hidden"
              animate="visible"
              variants={zoomVariant}
            >
              PROJECTS
            </motion.h1>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="certificate-description d-flex justify-content-start">
                  <motion.h1
                    className='aboutme-heading'
                    initial="hidden"
                    animate="visible"
                    variants={zoomVariant}
                  >
                    Projects
                  </motion.h1>
                </Col>

                <Col md={12} className="mt-3">
                  <Row className='g-4'>
                    {projects.map((project, i) => (
                      <Col md={3} key={i}>
                        <motion.div
                          className='singleProject'
                          style={{
                            backgroundColor: project.bgColor,
                            border: project.borderColor,
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeUpVariant}
                        >
                          <div className='projectContent'>
                            <h2 style={{ color: project.titleColor }}>{project.title}</h2>
                            <img src={project.img} alt={c} />
                            <div className='project--showcaseBtn'>
                              <a
                                href={project.demoLink}
                                target='_blank'
                                rel='noreferrer'
                                className='iconBtn'
                                aria-label='Demo'
                              >
                                <FaPlay className='icon' />
                              </a>
                              <a
                                href={project.codeLink}
                                target='_blank'
                                rel='noreferrer'
                                className='iconBtn'
                                aria-label='Code'
                              >
                                <FaCode className='icon' />
                              </a>
                            </div>
                          </div>
                          <p
                            className='project--desc'
                            style={{
                              background: '#fbd9ad',
                              color: project.descColor,
                              fontWeight: 600,
                            }}
                          >
                            {project.desc}
                          </p>
                          <div
                            className='project--lang'
                            style={{
                              background: '#fbd9ad',
                              color: project.langColor,
                              fontWeight: 600,
                            }}
                          >
                            {project.lang}
                          </div>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
