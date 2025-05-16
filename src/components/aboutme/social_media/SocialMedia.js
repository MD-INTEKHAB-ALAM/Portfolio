import React from 'react'
import {
    AiOutlineInstagram,
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillLinkedin
} from "react-icons/ai";
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

export default function SocialMedia() {
    return (
        <div className="mt-4">
            <Zoom left cascade>
            <h1>Connect with me</h1>
            </Zoom>
            <Container className="mt-5">
                <Row className="g-5">
                    <Col md={3}>
                        <a
                            href="https://www.linkedin.com/in/gurpreetsingh18601"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons d-flex justify-content-center align-items-center"
                        >
                            <Zoom cascade>
                            <AiFillLinkedin />
                            </Zoom>
                        </a>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
