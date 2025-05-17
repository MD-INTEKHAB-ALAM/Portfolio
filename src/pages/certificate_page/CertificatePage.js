import React, { useState, useEffect } from 'react';
import Particle from '../../Particle';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ProjectPage() {
  const [data, updatedata] = useState([]);
  const [loading, updateloading] = useState(true);

  async function getData() {
    axios.get("https://guru-portfolio-18.herokuapp.com/certificate/")
      .then(result => {
        updatedata(result.data);
        updateloading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // Variants for heading animation (zoom left cascade effect)
  const headingVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } }
  };

  // Variants for certificate card fade-in from bottom
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
  };

  return (
    <section className="home-section">
      <Container fluid id="home" >
        <Particle />
        <Container className="home-content">
          <div className="d-flex justify-content-center" style={{ backgroundColor: '#fbd9ad', width: '100%' }}>
            <motion.h1
              style={{ color: 'rgb(134 61 176)' }}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Certificates
            </motion.h1>
          </div>

          <div>
            {loading ? (
              <Container className="home-content d-flex justify-content-center align-items-center comingsoonclass">
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_rwhs2cdz.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '30%', height: '100%' }}
                  loop
                  autoplay
                />
              </Container>
            ) : (
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className='g-5'>
                        {data.map((d, i) => (
                          <Col md={4} key={i}>
                            <motion.div
                              className="cert-card"
                              variants={fadeUpVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.3 }}
                            >
                              <div className="content">
                                <a
                                  href={d.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div className="cert-header" style={{ backgroundColor: 'white' }}>
                                    <img
                                      className="logo_img"
                                      src={d.logo}
                                      alt="certificate logo"
                                    />
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
                                  {d.certificate_name}
                                </h2>
                                <h3 className="cert-body-subtitle" style={{ color: '#eb90ff', marginBottom: 0 }}>
                                  {d.organization}
                                </h3>
                              </div>
                            </motion.div>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            )}
          </div>
        </Container>
      </Container>
    </section>
  );
}
