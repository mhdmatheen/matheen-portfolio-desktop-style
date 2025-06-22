"use client";
import { windowItems } from "@/config/window-list";
import { X } from "lucide-react";
import React from "react";
import { useRef, useState, useEffect } from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  windowType?: "window" | "dialog";
  currentWindow: string | null;
  setCurrentWindow: (window: string | null) => void;
}

export const Window = ({
  title,
  children,
  onClose,
  windowType = "window",
  currentWindow,
  setCurrentWindow,
}: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 100, y: 25 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const [, forceUpdate] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // ✅ 1. Detect mobile

  const updatePosition = (x: number, y: number) => {
    posRef.current = { x, y };
    if (windowRef.current) {
      windowRef.current.style.left = `${x}px`;
      windowRef.current.style.top = `${y}px`;
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = windowRef.current?.getBoundingClientRect();
    draggingRef.current = true;
    offsetRef.current = {
      x: e.clientX - (rect?.left || 0),
      y: e.clientY - (rect?.top || 0),
    };
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const width = window.innerWidth;
      const x = (window.innerWidth - width) / 2;
      const y = 0;
      updatePosition(x, y);
    } else {
      updatePosition(posRef.current.x, posRef.current.y);
    }
  }, [isMobile]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || isMobile) return;
      const x = e.clientX - offsetRef.current.x;
      const y = e.clientY - offsetRef.current.y;
      requestAnimationFrame(() => updatePosition(x, y));
    };

    const onMouseUp = () => {
      if (draggingRef.current) {
        draggingRef.current = false;
        forceUpdate((n) => n + 1);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isMobile]);

  const matchedItem = windowItems.find(item => item.app === title);

  return (
    <div
      ref={windowRef}
      className={`
            absolute window backdrop-blur-3xl shadow-2xl border border-gray-300
            ${!isMobile && windowType === "dialog" && "max-w-[300px]"}
            ${!isMobile && windowType === "window" && "max-w-[70vw]"}
            ${isMobile && "max-w-[100vw]"}
            ${!isMobile && 'rounded-lg'}
            ${currentWindow === title ? "z-60" : "z-10"}
        `}
      style={{
        top: posRef.current.y,
        left: posRef.current.x,
      }}
      onClick={() => setCurrentWindow(title)}
    >
      <div className="backdrop-blur-3xl">
        <div
          onMouseDown={onMouseDown}
          className={`${isMobile ? "cursor-default" : "cursor-grab"
            } text-white pl-4 pr-1 flex justify-between items-start rounded-t overflow-hidden`}
        >
          <div className="font-semibold text-shadow text-white/90 text-sm tracking-wider py-[7px] flex items-center gap-2">
            {matchedItem && React.cloneElement(matchedItem.icon, {
              className: "w-4 h-4"
            })}
            {title}
          </div>
          <button
            className="close-button text-white text-lg px-4 py-[3px] rounded-b-lg"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>
        <div className="px-[4px] pb-[4px]">
          <div className={`
              dark:text-slate-700 overflow-y-auto rounded-b border border-gray-300
              ${isMobile && "max-h-[calc(100vh-100px)]"}
              ${!isMobile && "max-h-[calc(95vh-100px)]"}
          `}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Window;
