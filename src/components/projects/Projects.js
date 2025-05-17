import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import c from '../../images/c.png';
import ec from '../../images/ecommerce.gif';
import ba from '../../images/book-animation.gif';
import wa from '../../images/weather-app-animation.gif';
import ci from '../../images/onboarding.gif';
import { FaPlay, FaCode } from 'react-icons/fa';

export default function Projects() {
  // Animation variants for the heading (zoom left cascade effect)
  const headingVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  // Animation variants for the project cards (fade up)
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <motion.h1
                className='aboutme-heading'
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                Projects
              </motion.h1>
            </Col>

            <Col md={12} className="mt-3">
              <Row className='g-4'>
                {[{
                  title: "Shopper",
                  img: ec,
                  alt: c,
                  demoUrl: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/Ecommerce_Website",
                  codeUrl: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/Ecommerce_Website",
                  desc: "Developed a high-performance E-commerce website using React with dynamic routing and efficient state management through Context API.Improved load times by 40% using lazy loading and code-splitting, resulting in a faster, more responsive user experience.",
                  lang: "HTML, CSS, JS, REACT",
                  langColor: "#b061df"
                }, {
                  title: "Inventory Management System",
                  img: ba,
                  alt: c,
                  demoUrl: "https://github.com/MD-INTEKHAB-ALAM/Inventory-Management",
                  codeUrl: "https://github.com/MD-INTEKHAB-ALAM/Inventory-Management",
                  desc: "Built an Inventory Management System using Express.js following the MVC architecture to handle product operations efficiently.Enhanced the user interface with EJS templating and a responsive front end using HTML, CSS, and JavaScript for seamless inventory control.",
                  lang: "NodeJs, ExpressJs, EJS",
                  langColor: "#b061df"
                }, {
                  title: "Wander Play",
                  img: wa,
                  alt: c,
                  demoUrl: "https://github.com/MD-INTEKHAB-ALAM/WanderPlay",
                  codeUrl: "https://github.com/MD-INTEKHAB-ALAM/WanderPlay",
                  desc: "WanderPlay is a fun and interactive website featuring three games—Quiz, Emoji Guessing, and Rock-Paper-Scissors—built using HTML, CSS, and JavaScript.Designed to provide an engaging user experience with responsive design and smooth game interactions.",
                  lang: "HTML, CSS, JS",
                  langColor: "#b061df"
                }, {
                  title: "BlogApp",
                  img: "https://stackideas.com/images/apps/2429/logo.png",
                  alt: c,
                  demoUrl: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/BlogAppUsingFirebase",
                  codeUrl: "https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/BlogAppUsingFirebase",
                  desc: "Developed a dynamic blog application using React.js and Firebase Firestore, allowing real-time content updates and seamless user interaction.Implemented React Hooks for efficient state management and built a responsive UI for an optimized experience across all devices.",
                  lang: "HTML, CSS, JS, REACT",
                  langColor: "#b061df"
                }].map((project, idx) => (
                  <Col md={3} key={idx}>
                    <motion.div
                      className='singleProject'
                      style={{ backgroundColor: 'rgb(142 70 186 / 31%)', border: '1px solid' }}
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      <div className='projectContent'>
                        <h2 style={{ color: '#fbd9ad' }}>
                          {project.title}
                        </h2>
                        <img src={project.img} alt={project.alt} />
                        <div className='project--showcaseBtn'>
                          <a
                            href={project.demoUrl}
                            target='_blank'
                            rel='noreferrer'
                            className={'iconBtn'}
                            aria-labelledby={`demo-${idx}`}
                          >
                            <FaPlay
                              id={`demo-${idx}`}
                              className={'icon'}
                              aria-label='Demo'
                            />
                          </a>
                          <a
                            href={project.codeUrl}
                            target='_blank'
                            rel='noreferrer'
                            className={'iconBtn'}
                            aria-labelledby={`code-${idx}`}
                          >
                            <FaCode
                              id={`code-${idx}`}
                              className={'icon'}
                              aria-label='Code'
                            />
                          </a>
                        </div>
                      </div>
                      <p
                        className='project--desc'
                        style={{
                          background: '#fbd9ad',
                          color: 'rgb(147 71 192)',
                          fontWeight: 600
                        }}
                      >
                        {project.desc}
                      </p>
                      <div
                        className='project--lang'
                        style={{
                          background: '#fbd9ad',
                          color: project.langColor,
                          fontWeight: 600
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
    </div>
  );
}
