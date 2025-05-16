import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';

export default function PersonalSkill() {
  return (
    <div>
        <div className="mt-5 d-flex flex-row justify-content-center">
            <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
            <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
            <Link className="btn btn-primary " to="/toolkit">Toolkit</Link>
        </div>
        <LightSpeed left cascade>
            <h1 className="mt-4">Personal Skills</h1>
        </LightSpeed>
        <div className="mt-4">
            <Container>
                <Row className='g-5'>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#fe3e57',fontWeight:700 }}>75%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"com"} aria-valuenow={"75"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '75%'}}>
                                
                            </div>
                        </div>
                        <h2 style={{color:'#fe3e57',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Communication Skills</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#ff8c2f',fontWeight:700}}>80%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"ps"} aria-valuenow={"81"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '81%'}}>
                                
                            </div>
                        </div>
                        <h2 style={{color:'#ff8c2f',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Problem Solving</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#39c4ff',fontWeight:700 }}>70%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"cr"} aria-valuenow={"79"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '79%'}}>
                            </div>
                        </div>
                        <h2 style={{color:'#39c4ff',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Creativity</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
                
        </div>
        
    </div>
  )
}
