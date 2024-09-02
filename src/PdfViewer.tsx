// src/PdfViewer.tsx
import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

interface PdfViewerProps {
  file: string;
  className?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file, className = "" }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number | null>(null);

  function handleNextPage(): void {
    if (numPages && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function handlePrevPage(): void {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className={className}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF…"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages || 0}
      </p>
      <button onClick={handlePrevPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default PdfViewer;
