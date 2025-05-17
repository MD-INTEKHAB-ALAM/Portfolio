import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import vs from '../../../images/Vs.png';
import pc from '../../../images/pc.png';
import git from '../../../images/git.png';
import github from '../../../images/github.png';
import cb from '../../../images/cb.png';
import pm from '../../../images/pm.png';
import chrome from '../../../images/chorme.svg';

const tools = [
  { src: vs, alt: 'VS Code' },
  { src: pc, alt: 'Postman' },
  { src: git, alt: 'Git' },
  { src: github, alt: 'GitHub', style: { filter: 'grayscale(1) invert(1)' } },
  { src: cb, alt: 'CodeBlocks' },
  { src: pm, alt: 'Project Management' },
  { src: chrome, alt: 'Chrome' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: 'spring' },
  },
};

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>

      <motion.h1
        className="mt-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        Tools I Use
      </motion.h1>

      <Container className="mt-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((tool, index) => (
              <Col key={index} xs={4} md={2} className="tech-icons">
                <motion.img
                  src={tool.src}
                  alt={tool.alt}
                  variants={itemVariants}
                  style={{
                    width: '85%',
                    height: '85%',
                    ...tool.style,
                  }}
                />
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}
