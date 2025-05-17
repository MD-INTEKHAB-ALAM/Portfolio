import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';

export default function Certification() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <motion.h1
                className='aboutme-heading'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Certification
              </motion.h1>
            </Col>
            <Col md={12} className="mt-3">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Row className='g-5'>
                  {[
                    {
                      href: "https://drive.google.com/file/d/1hxxM217q3ZwRcYeonuEipNq2FmLwzE9W/view?usp=sharing",
                      title: "Dsa with Java",
                      subtitle: "-Coding Ninjas",
                      imgSrc: "https://miro.medium.com/v2/resize:fit:1400/1*ewtU3saCHetgATr9P1GPHg.jpeg",
                      alt: "DSA Java"
                    },
                    {
                      href: "https://drive.google.com/file/d/11UBqx5VI_sf8WfGwdtyvEm4MjOTRBpTH/view?usp=sharing",
                      title: "FrontEnd Development",
                      subtitle: "-Coding Ninjas",
                      imgSrc: "https://miro.medium.com/v2/resize:fit:1400/1*ewtU3saCHetgATr9P1GPHg.jpeg",
                      alt: "Frontend Dev"
                    },
                    {
                      href: "https://drive.google.com/file/d/1Hwo9pKr0UiwCJMJkX2QabaYKWiVWt4ti/view?usp=sharing",
                      title: "Dsa with C++",
                      subtitle: "-Coding Ninjas",
                      imgSrc: "https://miro.medium.com/v2/resize:fit:1400/1*ewtU3saCHetgATr9P1GPHg.jpeg",
                      alt: "DSA C++"
                    }
                  ].map(({ href, title, subtitle, imgSrc, alt }, idx) => (
                    <Col md={4} key={idx}>
                      <motion.div
                        className="cert-card"
                        variants={cardVariants}
                      >
                        <div className="content">
                          <a href={href} target="_blank" rel="noopener noreferrer">
                            <div className="content-overlay"></div>
                            <div className="cert-header" style={{ backgroundColor: 'white' }}>
                              <img className="logo_img" src={imgSrc} alt={alt} />
                            </div>
                            <div className="content-details fadeIn-top">
                              <h3 className="content-title" style={{ color: 'black' }}>
                                Certificate
                              </h3>
                            </div>
                          </a>
                        </div>
                        <div className="cert-body">
                          <h2 className="cert-body-title" style={{ fontWeight: 700, color: '#fbd9ad' }}>
                            {title}
                          </h2>
                          <h3 className="cert-body-subtitle" style={{ color: '#eb90ff', marginBottom: '0px' }}>
                            {subtitle}
                          </h3>
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
