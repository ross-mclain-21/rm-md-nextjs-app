import React, { useState, SetStateAction, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import { pdfjs, Document, Page } from 'react-pdf';

function Resume() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const resumePath =
    process.env.NODE_ENV == 'development'
      ? '/assets/files/resume.pdf'
      : 'https://mc-development.nyc3.digitaloceanspaces.com/resume.pdf';

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess(pdf: SetStateAction<any>) {
    try {
      setNumPages(pdf._pdfInfo.numPages);
    } catch (e) {
      console.error(e);
    }
  }
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      setWindowDimensions({ width: 0, height: 0 }); // This worked for me
    };
  }, []);

  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
        <div className="my-5">
          <Document file={resumePath} onLoadSuccess={onDocumentLoadSuccess} className="">
            {windowDimensions.width < 300 ? (
              <Page pageNumber={pageNumber} scale={0.3} />
            ) : windowDimensions.width < 600 ? (
              <Page pageNumber={pageNumber} scale={0.5} />
            ) : windowDimensions.width < 1200 ? (
              <Page pageNumber={pageNumber} scale={0.9} />
            ) : (
              <Page pageNumber={pageNumber} scale={1} />
            )}
          </Document>
          <div className="d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap mt-4">
            <a href={resumePath} className="btn btn-outline-code-green d-flex align-items-center">
              <FontAwesomeIcon icon={faFileDownload} className="mb-0" />
              <span className="ms-2">Download Resume</span>
            </a>
            <p className="mb-0">{`Page ${pageNumber} of ${numPages}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
