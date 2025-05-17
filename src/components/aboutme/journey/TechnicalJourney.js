import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ComputerIcon from '@mui/icons-material/Computer';
import { DiDjango, DiHtml5, DiPython, DiJavascript, DiReact } from 'react-icons/di';
import { motion } from 'framer-motion';

function TechnicalJourney() {
    return (
        <div className="mt-5">
            <div>
                <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
                <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
                <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>

            <div className="mt-5">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Technical Journey
                </motion.h1>
            </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date=""
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Java PROGRAMMING LANGUAGE</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date=""
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">C++ PROGRAMMING LANGUAGE</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date=""
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<DiHtml5 />}
                >
                    <h3 className="vertical-timeline-element-title">HTML & CSS</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date=""
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<DiJavascript />}
                >
                    <h3 className="vertical-timeline-element-title">JAVASCRIPT</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date=""
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<DiReact />}
                >
                    <h3 className="vertical-timeline-element-title">REACT</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
}

export default TechnicalJourney;
