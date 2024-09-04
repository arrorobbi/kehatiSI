import React, { useState } from "react";
import Modal from "./modal";
import PdfViewer from "./PdfViewer";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./App.css"; // Import CSS
import { Button } from "./components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Hide controls after a period of inactivity

  return (
    <div>
      <header className="w-full text-white shadow-md fixed top-0 left-0 z-10 p-4 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="colums-md">
            <img src="/logo pln.png" className="w-40 h-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="space-x-8 hidden md:flex">
            <a href="#home" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Button */}
          {/* <div className="hidden md:block">
            <a
              href="#login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <body className="mt-20">
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>LAPORAN 2024</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2020.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal isOpen={isModalOpen} onClose={closeModal} size="custom-xl">
                <PdfViewer
                  file=""
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>LAPORAN 2023</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2023.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal isOpen={isModalOpen} onClose={closeModal} size="custom-xl">
                <PdfViewer
                  file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2023.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>LAPORAN 2022</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2022.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal isOpen={isModalOpen} onClose={closeModal} size="custom-xl">
                <PdfViewer
                  file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2022.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>LAPORAN 2021</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2023.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal isOpen={isModalOpen} onClose={closeModal} size="custom-xl">
                <PdfViewer
                  file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2023.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>LAPORAN 2020</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2020.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal isOpen={isModalOpen} onClose={closeModal} size="custom-xl">
                <PdfViewer
                  file="KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2020.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>
        </div>
      </body>
      {/* <div onMouseMove={handleMouseMove} className="pdf-container">
       
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div> */}
    </div>
  );
};

export default App;
