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

const skills = [
  { name: 'C', percent: 85, color: '#fe3e57' },
  { name: 'C++', percent: 85, color: '#54faae' },
  { name: 'Java', percent: 90, color: '#39c4ff' },
  { name: 'JavaScript', percent: 81, color: '#f1f965' },
  { name: 'React JS', percent: 86, color: '#41f2ff' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>

      <motion.h1
        className="mt-4 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Technical Skills
      </motion.h1>

      <Container className="mt-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-5 text-center">
            {skills.map((skill, index) => (
              <Col md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <h1 style={{ ...skillStyles.header, color: skill.color }}>
                    {skill.percent}%
                  </h1>
                  <div style={skillStyles.wrapper}>
                    <ProgressBar
                      now={skill.percent}
                      animated
                      style={{ height: '10px' }}
                      variant="info"
                    />
                    <h2 style={{ ...skillStyles.title, color: skill.color }}>
                      {skill.name}
                    </h2>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}
