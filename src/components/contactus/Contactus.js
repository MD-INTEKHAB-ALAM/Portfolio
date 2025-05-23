import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert('Please fill all fields!');
      return;
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`);
  };

  // Animation variants
  const zoomLeftCascade = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <motion.h1
                className="aboutme-heading"
                variants={zoomLeftCascade}
                initial="hidden"
                animate="visible"
              >
                Contact me
              </motion.h1>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <motion.div
                    className="contacts-form"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </Col>
                <Col md={7}>
                  <motion.div
                    className="contacts-details"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <a href="mailto:intekhab8928@gmail.com" className="personal-details">
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: '#fbd9ad' }}>intekhab8928@gmail.com</p>
                    </a>
                    <a href="tel:+917697248268" className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: '#fbd9ad' }}>+91 8928354780</p>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Sant+Nagar,+Indore,+Madhya+Pradesh+452020/@22.674414,75.8729736,17z/data=!3m1!4b1!4m5!3m4!1s0x3962fcbe1ee8eb5d:0xa793cda2fbc7b9e!8m2!3d22.6732356!4d75.8744549"
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <HiOutlineLocationMarker />
                      </div>
                      <p style={{ color: '#fbd9ad' }}>Hebbal, Bengaluru, Karnataka</p>
                    </a>
                  </motion.div>

                  <motion.div
                    className="contact-map"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.228464011056!2d77.61088974529983!3d13.047946296389476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176e29b13739%3A0xe64bb86542642414!2sManayata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1747398456563!5m2!1sen!2sin"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
