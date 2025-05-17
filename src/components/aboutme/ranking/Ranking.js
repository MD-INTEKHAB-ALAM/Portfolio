import React from 'react';
import { FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiHackerearth, SiCodechef } from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Ranking() {
    const platforms = [
        {
            href: "https://www.naukri.com/code360/profile/e1c64d65-e5bb-4733-ab8a-beebeb8c0c94",
            icon: <FaHackerrank />,
            label: "HackerRank"
        },
       
    ];

    return (
        <div className="mt-4 text-center">
            <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                See my rank
            </motion.h1>

            <Container className="mt-5">
                <Row className="g-5 justify-content-center">
                    {platforms.map((platform, idx) => (
                        <Col key={idx} md={3}>
                            <motion.a
                                href={platform.href}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons d-block fs-1"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                                title={platform.label}
                            >
                                {platform.icon}
                            </motion.a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
