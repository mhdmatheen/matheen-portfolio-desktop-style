"use client";
import { windowItems } from "@/config/window-list";
import { Minus, RectangleHorizontal, X } from "lucide-react";
import React from "react";
import { useRef, useState, useEffect } from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  windowType?: "window" | "dialog";
  currentWindow: string | null;
  isBodyScrollable?: boolean;
  setCurrentWindow: (window: string | null) => void;
}

export const Window = ({
  title,
  children,
  onClose,
  onMinimize,
  windowType = "window",
  currentWindow,
  isBodyScrollable = true,
  setCurrentWindow,
}: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 100, y: 25 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const [, forceUpdate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

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

  const handleMaximize = () => {
    setIsMaximize(!isMaximize);
    if (isMaximize) {
      updatePosition(posRef.current.x, posRef.current.y);
    } else {
      updatePosition(0, 0);
    }
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
            absolute window shadow-2xl border border-gray-300
            ${!isMobile && !isMaximize && "max-w-[70vw] rounded-lg"}
            ${isMobile && "max-w-[100vw]"}
            ${isMaximize && 'window-maximize max-w-full'}
            ${currentWindow === title ? "z-60" : "z-10"}
        `}
      style={{
        top: posRef.current.y,
        left: posRef.current.x,
      }}
      onClick={() => setCurrentWindow(title)}
    >
      <div className="backdrop-blur-sm flex flex-col h-full">
        {/* Title Bar */}
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
          <div className="flex items-start">
            <button
              className="minimize-button text-white text-lg px-2 py-[3px] rounded-bl-lg"
              onClick={onMinimize}
            >
              <Minus size={16} />
            </button>
            <button
              className="maximize-button text-white text-lg px-2 py-[3px]"
              onClick={handleMaximize}
            >
              <RectangleHorizontal size={16} />
            </button>
            <button
              className="close-button text-white text-lg px-2 py-[3px] rounded-br-lg"
              onClick={onClose}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-[4px] pb-[4px] h-full flex-1">
          <div className={` bg-white h-full flex-1
              dark:text-slate-700 ${isBodyScrollable ? "overflow-y-auto" : "overflow-hidden"} rounded-b border border-gray-300
          `}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Window;
