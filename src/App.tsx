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
  const [isModalOpen1, setIsModalOpen1] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);
  const [isModalOpen4, setIsModalOpen4] = useState<boolean>(false);
  const [isModalOpen5, setIsModalOpen5] = useState<boolean>(false);
  const [isModalOpen6, setIsModalOpen6] = useState<boolean>(false);

  const openModal1 = () => setIsModalOpen1(true);
  const closeModal1 = () => setIsModalOpen1(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);

  const openModal4 = () => setIsModalOpen4(true);
  const closeModal4 = () => setIsModalOpen4(false);

  const openModal5 = () => setIsModalOpen5(true);
  const closeModal5 = () => setIsModalOpen5(false);

  const openModal6 = () => setIsModalOpen6(true);
  const closeModal6 = () => setIsModalOpen6(false);

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
          {/* <nav className="space-x-8 hidden md:flex">
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
          </nav> */}

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
              <CardTitle>Publikasi Keanekaragaman Hayati</CardTitle>
              <CardDescription>PLTA Wonogiri</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/publikasi.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal1}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal
                isOpen={isModalOpen1}
                onClose={closeModal1}
                size="custom-xl"
              >
                <PdfViewer
                  file="/KHT-6.c.2 Buku ISBN Kehati.pdf"
                  className="w-[420px] h-[600px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Status dan Kecenderungan Sumber Daya Kehati
              </CardTitle>
              <CardDescription>PLTA Wonogiri</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/laporan.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal5}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal
                isOpen={isModalOpen5}
                onClose={closeModal5}
                size="custom-xl"
              >
                <PdfViewer
                  file="/KHT-5.c.2 Status dan Kecenderungan Sumber Daya Kehati.pdf"
                  className="w-[850px] h-[700px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Laporan Pemantauan Keanekaragaman Hayati Tahun 2024
              </CardTitle>
              <CardDescription>PLTA Wonogiri</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2024.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal2}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal
                isOpen={isModalOpen2}
                onClose={closeModal2}
                size="custom-xl"
              >
                <PdfViewer
                  file="/Laporan Akhir Kehati Wonogiri 2024 signed.pdf"
                  className="w-[612px] h-[700px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Laporan Pemantauan Keanekaragaman Hayati Tahun 2023
              </CardTitle>
              <CardDescription>PLTA Wonogiri</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2023.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal3}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal
                isOpen={isModalOpen3}
                onClose={closeModal3}
                size="custom-xl"
              >
                <PdfViewer
                  file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2023.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Laporan Pemantauan Keanekaragaman Hayati Tahun 2022
              </CardTitle>
              <CardDescription>PLTA Wonogiri</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2022.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal4}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal
                isOpen={isModalOpen4}
                onClose={closeModal4}
                size="custom-xl"
              >
                <PdfViewer
                  file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2022.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Laporan Pemantauan Keanekaragaman Hayati Tahun 2020
              </CardTitle>
              <CardDescription>PLTA Wonogiri</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-auto w-auto" src="/2020.png" />
            </CardContent>
            <CardFooter>
              <Button
                onClick={openModal6}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Open
              </Button>
              <Modal
                isOpen={isModalOpen6}
                onClose={closeModal6}
                size="custom-xl"
              >
                <PdfViewer
                  file="/KEHATI Sistem Informasi Keanekaragaman Hayati PLTA Wonogiri Tahun 2020.pdf"
                  className="w-[610px] h-[810px] overflow-auto" // Tailwind classes for size
                />
              </Modal>
            </CardFooter>
          </Card>
        </div>
      </body>
    </div>
  );
};

export default App;
