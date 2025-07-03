"use client";
import { settings } from "@/config/app";
import {
    User,
    Settings,
    LogOut
} from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { startMenuItems, windowItems, secondaryMenuItems } from "@/config/window-list";

interface TaskbarProps {
    onAppClick: (app: string) => void;
    openApps: string[];
    currentWindow: string | null;
    setCurrentWindow: (window: string) => void;
}

export const Taskbar = ({ onAppClick, openApps, currentWindow, setCurrentWindow }: TaskbarProps) => {
    const [startOpen, setStartOpen] = useState(false);
    const [isNotificationClosed, setIsNotificationClosed] = useState(true);
    const [hideGuideArrows, setHideGuideArrows] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const userImage = settings.userImage;

    useEffect(() => {
        if (localStorage.getItem("isNotificationClosed") && localStorage.getItem("isNotificationClosed") === "true") {
            setIsNotificationClosed(true);
        } else {
            setIsNotificationClosed(false);
            localStorage.setItem("isNotificationClosed", "false")
        }
        if (localStorage.getItem("hideGuideArrows") && localStorage.getItem("hideGuideArrows") === "true") {
            setHideGuideArrows(true);
        } else {
            setHideGuideArrows(false);
            localStorage.setItem("hideGuideArrows", "false")
        }
    }, []);

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

    const hadleStartMenuClick = () => {
        setStartOpen(prev => !prev);
        setHideGuideArrows(true);
        localStorage.setItem('hideGuideArrows', 'true');
    }

    const handleStartMenuItemClick = (app: string) => {
        setCurrentWindow(app);
        onAppClick(app);
        setStartOpen(false);
    };

    const handleNotificationClose = () => {
        setIsNotificationClosed(true);
        localStorage.setItem("isNotificationClosed", "true");
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
                    className="absolute z-[100] px-1 py-1 bottom-12 sm:bottom-14 left-0 sm:left-4 w-fit rounded-xl backdrop-blur-3xl bg-gradient-to-b from-black/80 to-black/20 border border-white/50 shadow-lg shadow-black/30 space-y-2 animate-fade-in"
                >
                    <div className="flex gap-2">

                        <div className="z-0 relative shadow-lg bg-white backdrop-blur-3xl rounded-lg border border-white/20 dark:text-slate-700 dark:border-slate-300">
                            <div className="px-2 py-3">
                                {startMenuItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => { if(item.app) handleStartMenuItemClick(item.app); if(item.href) window.open(item.href, '_blank'); }}
                                        className="flex items-center justify-start text-left gap-3 w-full px-3 py-2 text-sm text-slate-700 font-medium rounded hover:bg-gradient-to-b from-yellow-200/50 via-yellow-400/50 to-yellow-200/50 from-60% via-60% hover:shadow hover:shadow-black/10 transition-all duration-300 cursor-pointer"
                                    >
                                        {React.cloneElement(item.icon, {
                                            className: "w-8 h-8"
                                        })} {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="text-white flex flex-col items-start">
                            <div className="flex flex-col items-center justify-center px-4">
                                <img className="z-10 shadow-lg rounded-full mx-auto h-14 w-14 -mt-8 border-2 border-white/20 text-white" src={userImage} alt="User Image" />
                                <div className="flex gap-1 items-center justify-center mt-2">
                                    <p>Mohamed</p>
                                    <p className="font-semibold">Matheen</p>
                                </div>
                                <span className="text-xs text-white/70 font-medium">Senior Desktop Engineer</span>
                            </div>

                            <div className="flex-1">&nbsp;</div>

                            <div className="mt-4 py-2 text-xs font-semibold">
                                <div className="px-3 flex flex-col gap-4 items-start justify-end">
                                    {secondaryMenuItems.map((item) => (
                                        <>
                                            {item.type === 'app' && (
                                                <button
                                                    key={item.name}       
                                                    onClick={() => { if (item.app) handleStartMenuItemClick(item.app); }}
                                                    className="flex items-center justify-start text-left gap-3 w-full text-sm text-white font-medium rounded transition-all duration-300 cursor-pointer"
                                                >
                                                    {React.cloneElement(item.icon, {
                                                        className: "w-6 h-6"
                                                    })} {item.name}
                                                </button>
                                            )}
                                            {item.type === 'link' && (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-start text-left gap-3 w-full text-sm text-white font-medium rounded transition-all duration-300 cursor-pointer"
                                                >
                                                    {React.cloneElement(item.icon, {
                                                        className: "w-6 h-6"
                                                    })} {item.name}
                                                </a>
                                            )}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isNotificationClosed && (
                <div className="sm:hidden w-[350px] flex items-start justify-between mx-auto text-balance text-xs text-shadow text-slate-500 font-medium absolute bottom-14 left-0 right-0 pl-3 pr-1 py-1 border-2 border-white/40 text-center rounded bg-stone-100 backdrop-blur-lg shadow-lg shadow-black/10">
                    This portfolio has more intereresting experience when viewed in desktop computer.
                    <button className="h-5 w-5 bg-stone-50 border border-slate-300 aspect-square text-red-500" onClick={handleNotificationClose}>&times;</button>
                </div>
            )}

            {!hideGuideArrows && (
                <img className="guide-arrows px-4 py-2 h-[128px] w-auto -z-10 absolute bottom-[40px] left-4" src="/second-arrow.png" alt="" />
            )}
            {/* Taskbar */}
            <div className="fixed -bottom-[1px] left-0 right-0 z-40 pl-1 backdrop-blur-md bg-cyan-200/30 border-t border-white/10 flex gap-3 items-center"
                style={{
                    boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.1)"
                }}>
                <div id="blur-overlay"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent from-60% via-60% border-t border-white/10">&nbsp;</div>
                <div className="py-1 relative z-10">
                    {/* Start Button */}
                    <button
                        id="start-button"
                        onClick={() => hadleStartMenuClick()}
                        className="pl-1 pr-3 py-1 flex gap-2 items-center justify-center text-white font-semibold rounded-full overflow-hidden hover:bg-white/20 transition backdrop-blur-sm border border-white/20 shadow-lg shadow-white/10"
                    >
                        <img className="w-6 h-6 rounded-full" src={userImage} alt="User Image" draggable={false} />
                        start
                    </button>
                </div>

                <div className="border-r h-full border-white/20 mr-2  relative z-10">&nbsp;</div>

                {/* Open Apps Scrollable Container */}
                <div className="relative z-10 flex-1 py-1 pr-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                    <div className="flex gap-2">
                        {openApps && openApps.length > 0 && openApps.map((app) => {
                            const matchedItem = windowItems.find(item => item.app === app);
                            return (
                                <button
                                    key={app}
                                    onClick={() => { onAppClick(app); setCurrentWindow(app); }}
                                    className={`
                                        px-3 py-2 text-white text-sm rounded hover:bg-white/20 transition border flex items-center gap-2 
                                        ${currentWindow == app
                                            ? 'border-white/50 shadow-md shadow-white/10 backdrop-blur-sm bg-gradient-to-b from-white/10 to-white/10 via-white/20 from-60% via-60%'
                                            : 'border-white/20'}
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

                <div className="relative z-10 hidden sm:flex py-2 pr-4 pl-8 text-white text-xs font-bold monospace gap-2 items-center">
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
