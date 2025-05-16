import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import c from '../../images/c.png'
import ec from '../../images/ecommerce.gif'
import ba from '../../images/book-animation.gif'
import wa from '../../images/weather-app-animation.gif'
import ci from '../../images/onboarding.gif'
import { FaPlay, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
    return (
        <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="certificate-description d-flex justify-content-start">
                            <Zoom left cascade>
                                <h1 className='aboutme-heading'>
                                    Projects
                                </h1>
                            </Zoom>
                        </Col>
                        <Col md={12} className="mt-3">
                            <Row className='g-4'>
                                <Col md={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    Shopper
                                                </h2>
                                                <img src={ec} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/Ecommerce_Website'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/Ecommerce_Website'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: 'rgb(147 71 192)',
                                                    fontWeight:600
                                                }}
                                            >
                                                Developed a high-performance E-commerce website using React with dynamic routing and efficient state management through Context API.Improved load times by 40% using lazy loading and code-splitting, resulting in a faster, more responsive user experience.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                HTML, CSS, JS, REACT
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col md={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    Inventory Management System
                                                </h2>
                                                <img src={ba} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://github.com/MD-INTEKHAB-ALAM/Inventory-Management'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://github.com/MD-INTEKHAB-ALAM/Inventory-Management'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                Built an Inventory Management System using Express.js following the MVC architecture to handle product operations efficiently.Enhanced the user interface with EJS templating and a responsive front end using HTML, CSS, and JavaScript for seamless inventory control.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                NodeJs, ExpressJs, EJS
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col md={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    Wander Play
                                                </h2>
                                                <img src={wa} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://github.com/MD-INTEKHAB-ALAM/WanderPlay'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://github.com/MD-INTEKHAB-ALAM/WanderPlay'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                WanderPlay is a fun and interactive website featuring three games—Quiz, Emoji Guessing, and Rock-Paper-Scissors—built using HTML, CSS, and JavaScript.Designed to provide an engaging user experience with responsive design and smooth game interactions.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                HTML, CSS, JS
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col ms={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    BlogApp
                                                </h2>
                                                <img src="https://stackideas.com/images/apps/2429/logo.png"alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/BlogAppUsingFirebase'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://stackblitz.com/~/github.com/MD-INTEKHAB-ALAM/BlogAppUsingFirebase'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                Developed a dynamic blog application using React.js and Firebase Firestore, allowing real-time content updates and seamless user interaction.Implemented React Hooks for efficient state management and built a responsive UI for an optimized experience across all devices.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                HTML, CSS, JS, REACT
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
