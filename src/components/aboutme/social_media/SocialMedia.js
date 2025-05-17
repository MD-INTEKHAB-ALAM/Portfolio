import React from 'react';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect with me
      </motion.h1>

      <Container className="mt-5">
        <motion.Row
          className="g-5 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Col md={3}>
            <motion.a
              href="https://www.linkedin.com/in/md-intekhab-alam-728116229/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons d-flex justify-content-center align-items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.2, color: "#0077b5" }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillLinkedin size={50} />
            </motion.a>
          </Col>
          {/* You can add other social icons similarly */}
        </motion.Row>
      </Container>
    </div>
  );
}
