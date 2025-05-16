import { Container, Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from '../../Particle';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from 'react-reveal/Zoom';
import React, { useState, useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfPreview = "/Resume_.pdf"; // Local preview for react-pdf
const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1GcTWHuY9do9PyVs0wByBZqVT58TRXPJM"; // External download
function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  },[]);

  return (
    <div>
      <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content">
                    <div className="d-flex justify-content-center" width="100%" style={{backgroundColor: '#fbd9ad'}}>
                    <Zoom left cascade>
                        <h1 style={{color:'rgb(134 61 176)'}}>RESUME</h1>
                    </Zoom>
                    </div>
                    <div fluid className="certificate-section" id="about" >
                      <div className="d-flex justify-content-center mt-4">
                        <Button variant="primary" href={resumeDownloadLink}  target="_blank" download>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                        </Button>
                      </div>
                      <div className="resume d-flex justify-content-center">
                        <Document file={pdfPreview}>
                        <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4} />
                        </Document>
                      </div>
                    </div>
                </Container>
            </Container>
      </section>
    </div>
  );
}

export default Resume;
