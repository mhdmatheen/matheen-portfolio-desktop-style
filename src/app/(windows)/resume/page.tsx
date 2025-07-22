"use client";
import { useEffect, useState } from "react";

export default function ResumeViewer() {
    const [isMobile, setIsMobile] = useState(false);
    const pdfLink = "/pdfs/mohamed-matheen-resume.pdf";
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    }, []);
  
    return (
      <div className="h-[calc(100vh-80px)] w-full md:w-[100vh] mx-auto bg-white/90 flex flex-col items-center justify-center">
        {isMobile ? (
          <div className="text-center flex flex-col items-center justify-center gap-4 p-4">
            <p className="mb-2">Mobile browser doesn't support embedded PDF preview 😓</p>
            <a
              href={pdfLink}
              download
              className="win7-btn shadow-lg"
            >
              Download Resume
            </a>
          </div>
        ) : (
            <embed src={pdfLink} width="100%" height="100%" type="application/pdf" />
        )}
      </div>
    );
  }