import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from '../../Particle';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfPreview = "/Resume_.pdf"; // local PDF file path for preview
const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1GcTWHuY9do9PyVs0wByBZqVT58TRXPJM"; // external download link

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // framer-motion variants for zoom-in animation
  const zoomInVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />

        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: '#fbd9ad', width: '100%' }}
          >
            <motion.h1
              style={{ color: 'rgb(134 61 176)' }}
              variants={zoomInVariants}
              initial="hidden"
              animate="visible"
            >
              RESUME
            </motion.h1>
          </div>

          <div className="certificate-section" id="about">
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="primary"
                href={resumeDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </div>

            <div className="resume d-flex justify-content-center mt-4">
              <Document file={pdfPreview} loading="Loading Resume...">
                <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
              </Document>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Resume;
