import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skillStyles = {
  header: {
    fontSize: '100px',
    fontWeight: 700,
  },
  title: {
    fontSize: '25px',
    marginTop: '13px',
    fontWeight: 700,
  },
  wrapper: {
    paddingLeft: '50px',
    paddingRight: '50px',
  },
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function PersonalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>

      <motion.h1
        className="mt-4 text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Personal Skills
      </motion.h1>

      <div className="mt-4">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="g-5 text-center">
              {/* Communication */}
              <Col md={4}>
                <motion.div variants={itemVariants}>
                  <h1 style={{ ...skillStyles.header, color: '#fe3e57' }}>75%</h1>
                  <div style={skillStyles.wrapper}>
                    <ProgressBar now={75} variant="danger" animated />
                    <h2 style={{ ...skillStyles.title, color: '#fe3e57' }}>Communication Skills</h2>
                  </div>
                </motion.div>
              </Col>

              {/* Problem Solving */}
              <Col md={4}>
                <motion.div variants={itemVariants}>
                  <h1 style={{ ...skillStyles.header, color: '#ff8c2f' }}>81%</h1>
                  <div style={skillStyles.wrapper}>
                    <ProgressBar now={81} variant="warning" animated />
                    <h2 style={{ ...skillStyles.title, color: '#ff8c2f' }}>Problem Solving</h2>
                  </div>
                </motion.div>
              </Col>

              {/* Creativity */}
              <Col md={4}>
                <motion.div variants={itemVariants}>
                  <h1 style={{ ...skillStyles.header, color: '#39c4ff' }}>79%</h1>
                  <div style={skillStyles.wrapper}>
                    <ProgressBar now={79} variant="info" animated />
                    <h2 style={{ ...skillStyles.title, color: '#39c4ff' }}>Creativity</h2>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
