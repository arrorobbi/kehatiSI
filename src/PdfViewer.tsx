// src/PdfViewer.tsx
import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

interface PdfViewerProps {
  file: string;
  className?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file, className = "" }) => {
  const [isHovered, setHovered] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);

  const [showControls] = useState<boolean>(true);
  let timeoutId: NodeJS.Timeout;

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

  function handleJumpToPage(event: React.ChangeEvent<HTMLInputElement>): void {
    const newPageNumber = parseInt(event.target.value, 10);
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
    }
  }

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  const CustomLoader = () => (
    <div className="flex items-center justify-center">
      <div className="spinner">Loading...</div>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  );

  return (
    <div className={className}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={CustomLoader}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      {showControls && (
        <motion.div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 controls"
          whileHover="hover"
          // initial={{ opacity: 1 }}
          initial={false}
          animate={{ stdDeviation: isHovered ? 0 : 2 }}
          exit={{ opacity: 0 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handlePrevPage}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Back
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Kembali Pada Halaman Sebelumnya</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleNextPage}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Next
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Melanjutkan Pada Halaman Berikutnya</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            type="number"
            value={pageNumber}
            onChange={handleJumpToPage}
            max={numPages}
          />
          <p className="mt-2">of {numPages}</p>
        </motion.div>
      )}
    </div>
  );
};

export default PdfViewer;
