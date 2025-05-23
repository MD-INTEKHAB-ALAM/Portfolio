import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

function EducationJourney() {
    return (
        <div className="mt-5">
            <div>
                <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
                <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
                <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>

            <div className="mt-5">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Qualification Journey
                </motion.h1>
            </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date="2003 - 2016"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">SECONDARY SCHOOLING</h3>
                    <h4 className="vertical-timeline-element-subtitle mt-2">St Paul's High School</h4>
                    <p>
                        Studied here from Nursery to 10th class as a part of secondary schooling.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date="2016 - 2018"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">HIGHER SECONDARY SCHOOLING</h3>
                    <h4 className="vertical-timeline-element-subtitle mt-2">Swami Vivekanand International School and Junior College</h4>
                    <p>
                        Studied higher secondary schooling class 11th and 12th from Svis Junior College
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date="2018 - 2021"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Graduation</h3>
                    <h4 className="vertical-timeline-element-subtitle mt-2">Usha Pravin Gandhi College of Management</h4>
                    <p>
                        Completed Bsc in Information Technology from usha pravin Gandhi College of Management
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                    date="2022 - 2024"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Post Graduation</h3>
                    <h4 className="vertical-timeline-element-subtitle mt-2">Atria Institute of Technology</h4>
                    <p>
                        Completed Mca From Atria Institute of Technology
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
}

export default EducationJourney;
