import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: '90%' }}
                loop
                autoplay
              ></lottie-player>
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <p className="home-about-body">
                I fell in love with programming and I have started learning programming since then.
                <br />
                <br />
                I am fluent in classics like
                <i>
                  <b className="purple"> Java, C++, Javascript </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products with{' '}
                <b className="purple">NodeJs</b> and
                <i>
                  <b className="purple"> Modern Javascript Library and Frameworks</b>
                </i>{' '}
                like
                <i>
                  <b className="purple"> React.js</b>
                </i>
                <br />
                <br />
                I also like to build RESTful APIs in &nbsp;
                <i>
                  <b className="purple">NodeJs and ExpressJs</b>
                </i>
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
