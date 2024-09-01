import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import "./App.css"; // Import CSS

function App() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showControls, setShowControls] = useState<boolean>(true);
  let timeoutId: NodeJS.Timeout;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function handleNextPage(): void {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function handlePrevPage(): void {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function handleJumpToPage(event: React.ChangeEvent<HTMLInputElement>): void {
    const newPageNumber = parseInt(event.target.value, 10);
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
    }
  }

  // Hide controls after a period of inactivity
  const handleMouseMove = () => {
    clearTimeout(timeoutId);
    setShowControls(true);

    timeoutId = setTimeout(() => {
      setShowControls(false);
    }, 3000); // Hide controls after 3 seconds of inactivity
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  return (
      <div onMouseMove={handleMouseMove} className="pdf-container">
        <Document
            file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2023.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading PDF…"
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>

        {showControls && (
            <motion.div
                className="controls"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
              <button onClick={handlePrevPage}>Kembali</button>
              <button onClick={handleNextPage}>Next</button>
              <input
                  type="number"
                  value={pageNumber}
                  onChange={handleJumpToPage}
                  min={1}
                  max={numPages}
              />
            </motion.div>
        )}
      </div>
  );
}

export default App;
