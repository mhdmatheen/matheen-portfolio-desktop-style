"use client";
import { settings } from "@/config/app";
import {
    User,
    Settings,
    LogOut
} from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { startMenuItems } from "@/config/window-list";

interface TaskbarProps {
    onAppClick: (app: string) => void;
    openApps: string[]; 
    currentWindow: string | null;
    setCurrentWindow: (window: string) => void;
}

export const Taskbar = ({ onAppClick, openApps, currentWindow, setCurrentWindow }: TaskbarProps) => {
    const [startOpen, setStartOpen] = useState(false);  
    const menuRef = useRef<HTMLDivElement>(null);
    const userImage = settings.userImage;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                startOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setStartOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [startOpen]);

    const handleStartMenuItemClick = (app: string) => {
        setCurrentWindow(app);
        onAppClick(app);
        setStartOpen(false);
    };

    const Clock = () => {
        const [time, setTime] = React.useState(new Date().toLocaleTimeString());
      
        React.useEffect(() => {
          const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
          }, 1000);
      
          return () => clearInterval(timer);
        }, []);
      
        return <span>{time}</span>;
      };      

    return (
        <div className="taskbar-wrapper">
            {/* Start Menu */}
            {startOpen && (
                <div
                    id="taskbar"
                    ref={menuRef}
                    className="absolute z-[100] px-1 py-1 bottom-14 left-4 w-64 rounded-xl backdrop-blur-3xl bg-cyan-200/30 border border-white/20 shadow-lg shadow-black/30 space-y-2 animate-fade-in"
                >
                    <img className="z-10 shadow-lg absolute left-1/2 transform -translate-x-1/2 rounded-full mx-auto h-14 w-14 -mt-8 border-2 border-white/20 text-white" src={userImage} alt="User Image" />
                    <div className="z-0 relative shadow-lg bg-gradient-to-b from-white/50 to-cyan-100/10 backdrop-blur-3xl rounded-lg border border-white/20 dark:text-slate-700 dark:border-slate-300">
                        <div className="flex flex-col px-2 pt-6 py-4 items-center justify-center">
                            <div className="flex gap-1 items-center justify-center">
                                <p>Mohamed</p>
                                <p className="font-semibold">Matheen</p>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">Senior Desktop Engineer</span>
                        </div>
                        <div className="px-4 pt-2 pb-4">
                            {startMenuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleStartMenuItemClick(item.app)}
                                    className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-700 font-medium rounded hover:bg-white/60 hover:shadow hover:shadow-black/10 transition-all duration-300 cursor-pointer"
                                >
                                    {item.icon} {item.name}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 items-center justify-end px-3 py-2">
                            <a href="https://www.linkedin.com/in/i-am-matheen/" target="_blank" rel=""><img className="w-6 h-6" src="https://www.linkedin.com/favicon.ico" alt="linkedin" draggable={false} /></a>
                            <a href="mailto:mhdmatheen@gmail.com" target="_blank" rel=""><img className="w-6 h-6" src="/envelope.png" alt="email" draggable={false} /></a>
                        </div>
                    </div>
                </div>
            )}

            {/* Taskbar */}
            <div className="fixed -bottom-[1px] left-0 right-0 z-40 pl-4 backdrop-blur-md bg-cyan-200/30 border-t border-white/30 flex gap-3 items-center">
                <div className="py-2">
                    {/* Start Button */}
                    <button
                        id="start-button"
                        onClick={() => setStartOpen((prev) => !prev)}
                        className="pl-2 pr-3 py-1 flex gap-1 items-center justify-center text-white font-bold rounded-full overflow-hidden hover:bg-white/20 transition backdrop-blur-sm border border-white/20 shadow-lg shadow-white/10"
                    >
                        <img className="w-6 h-6 rounded-full" src={userImage} alt="User Image" draggable={false} />
                        Start
                    </button>
                </div>

                <div className="border-r h-full border-white/20 mr-2">&nbsp;</div>

                {/* Open Apps Scrollable Container */}
                <div className="flex-1 py-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                    <div className="flex gap-2">
                        {openApps && openApps.length > 0 && openApps.map((app) => {
                            const matchedItem = startMenuItems.find(item => item.app === app);
                            return (
                                <button
                                    key={app}
                                    onClick={() => { onAppClick(app); setCurrentWindow(app); }}
                                    className={`
                                        px-3 py-1 text-white text-sm rounded hover:bg-white/20 transition border flex items-center gap-2
                                        ${currentWindow == app
                                            ? 'border-white/20 shadow-md shadow-white/10 backdrop-blur-sm bg-gradient-to-b from-white/10 to-cyan-200/10 from-80%'
                                            : 'border-white/10'}
                                    `}
                                >
                                    {matchedItem && React.cloneElement(matchedItem.icon, {
                                        className: "w-4 h-4"
                                    })}
                                    <span>{app}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="hidden sm:flex py-2 pr-4 pl-8 text-white text-xs font-bold monospace gap-2 items-center bg-gradient-to-l from-blue-900/70 to-transparent from-50%">
                    <div className="flex flex-col items-center">
                        <div>{new Date().toLocaleDateString()}</div>
                        <div><Clock /></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Taskbar;
