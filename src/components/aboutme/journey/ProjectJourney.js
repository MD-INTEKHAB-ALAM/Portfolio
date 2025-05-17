import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PersonIcon from '@mui/icons-material/Person';
import { motion } from 'framer-motion';

function ProjectJourney() {
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
                    Project Journey
                </motion.h1>
            </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<BookIcon />}
                >
                    <h3 className="vertical-timeline-element-title">LIBRARY BOOK MANAGEMENT PROJECT</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<GroupsIcon />}
                >
                    <h3 className="vertical-timeline-element-title">TEAM VIEWER</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<ShoppingCartIcon />}
                >
                    <h3 className="vertical-timeline-element-title">G-MART: THE E-COMMERCE WEBSITE</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<SportsCricketIcon />}
                >
                    <h3 className="vertical-timeline-element-title">CRICINFO</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2022"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<WbSunnyIcon />}
                >
                    <h3 className="vertical-timeline-element-title">WEATHER GYAN</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2022"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<PersonIcon />}
                >
                    <h3 className="vertical-timeline-element-title">PORTFOLIO WEBSITE</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
                    date="2022"
                    iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                    icon={<PersonIcon />}
                >
                    <h3 className="vertical-timeline-element-title">ATTENDANCE SYSTEM USING FACE RECOGNITION</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
}

export default ProjectJourney;
