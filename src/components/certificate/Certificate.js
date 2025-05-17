import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import python from '../../images/python1.jpg';
import html from '../../images/html.png';
import html1 from '../../images/HTML1.jpg';
import css from '../../images/CSS.jpg';
import js from '../../images/Javascript.jpg';
import c from '../../images/c.png';
import c1 from '../../images/c++.png';
import python2 from '../../images/python2.png';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const images = [
  python2,
  c,
  c1,
  python,
  js,
  html,
  css,
  html1,
];

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-5">
            {images.map((src, idx) => (
              <Col md={4} key={idx}>
                <motion.img
                  src={src}
                  alt={`certificate-${idx}`}
                  style={{ width: '100%', height: '100%' }}
                  variants={itemVariants}
                />
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}
