"use client";

import { useEffect, useRef } from "react";
import WindowHeader from "@/app/shell/components/window-header";

const AutoResizingIframe = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
  
    const resizeIFrameToFitContent = (iframe: HTMLIFrameElement) => {
      if (iframe && iframe.contentWindow && iframe.contentWindow.document.body) {
        iframe.style.width = iframe.contentWindow.document.body.scrollWidth + "px";
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
      }
    };
  
    useEffect(() => {
      const handleResize = () => {
        const iframe = iframeRef.current;
        if (iframe) {
          resizeIFrameToFitContent(iframe);
        }
      };
  
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.addEventListener("load", handleResize);
      }
  
      return () => {
        if (iframe) {
          iframe.removeEventListener("load", handleResize);
        }
      };
    }, []);
  
    return (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScwv2ERc29yVF0TuVafs15BghxKADiMxnipAXW1o4p61AwNcg/viewform?embedded=true"
        id="iFrame1"
        ref={iframeRef}
        style={{ border: "none", width: "100%", minHeight: "500px", minWidth: "400px" }}
        title="Auto Resizing Iframe"
      ></iframe>
    );
  };

export default function FeedbackWindow() {
    return (
        <div className="bg-white/80 p-6 max-w-[500px]">
            <WindowHeader title="Feedback" description="Send your feedback" icon="/chat.png" />
            <div className="border border-slate-300 p-4 rounded mb-2">
                <AutoResizingIframe />
            </div>
        </div>
    );
}