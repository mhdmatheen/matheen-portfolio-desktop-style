"use client";

import { ArrowLeft, Footprints, Info } from "lucide-react";
import { useState } from "react";
import { settings } from "@/config/app";
import Image from "next/image";

export default function AboutWindow() {
    const imageLink = '/man-with-laptop.png';
    const [showJourney, setShowJourney] = useState(false);
    const userImage = settings.userImage;

    const startButton = () => {
        return (
            <span className="py-1 pl-1 pr-3 rounded-full bg-cyan-200 border border-white cursor-pointer flex gap-2 font-semibold items-center" onClick={() => document.getElementById("start-button")?.click()}> <img className="w-6 h-6 rounded-full" src={userImage} alt="User Image" draggable={false} />Start</span>
        );
    }

    return (
        <div className="h-full bg-gradient-to-b from-slate-200 to-white/80 backdrop-blur-3xl max-h-[90vh] lg:max-h-[calc(90vh-100px)] md:max-w-[60vw] overflow-y-auto">
            {!showJourney &&             
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <Image src={imageLink} alt="about me" draggable={false} width={400} height={400} className="w-sm" />
                    {/* <img className="w-sm" src={imageLink} alt="about me" draggable={false} /> */}
                    <div className="flex flex-col gap-2 px-6 text-balance">
                        <h2 className="text-2xl font-light mb-2 charm text-center sm:text-left">Hello! Its me. <span className="text-blue-500 font-semibold border-b border-dashed">Matheen</span>.</h2>
                        <p className="mt-1 mb-2 text-center sm:text-left">Let me introduce myself. Am very <strong className="italic border-b border-slate-300 border-dotted">innovative</strong>, <strong className="italic border-b border-slate-300 border-dotted">introverted</strong>, <strong className="italic border-b border-slate-300 border-dotted">interesting</strong> person who can code and do more than code.</p>

                        <p className="mb-4 text-center sm:text-left">
                            I would describe myself as a highly enthusiastic and empathetic person who is more skilled enough to solve problems and reach goals that benefits my career, my life and my team.
                        </p>

                        <p className="italic font-semibold sm:text-left text-center">
                            Want to know more about me?
                        </p>

                        <div className="flex flex-col items-center sm:items-start">
                            <button 
                                onClick={() => setShowJourney(true)}
                                className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-5 rounded shadow cursor-pointer font-semibold monospace text-md flex gap-1 items-center">View my journey <Footprints /></button>
                        </div>
                        <div className="text-xs mt-4 text-slate-500 font-medium flex sm:flex-row flex-col gap-1 items-center"><Info size={16} /> or click on the {startButton()} button below to explore more.</div>
                    </div>
                </div>
            }

            {showJourney && (
                <div className="bg-white h-full">
                    <div className="sticky top-0 flex items-center text-white toolbar">
                        <button 
                            onClick={() => setShowJourney(false)}
                            className="text-xs px-2 py-1 cursor-pointer font-medium monospace text-md flex gap-1 items-center text-slate-900 hover:border-blue-50 border border-transparent rounded hover:bg-blue-300/30">
                                <ArrowLeft className="opacity-70"/> Go Back
                        </button>
                    </div>
                    <div className="px-2 py-8 lg:px-8 z-10 lg:max-w-[700px] mx-auto bg-white">
                        <img className="w-full" src="/journey/1.png" alt="journey 1" draggable={false}/>
                        <img className="w-full" src="/journey/2.png" alt="journey 2" draggable={false}/>
                        <div className="flex flex-col gap-2 items-center justify-center bg-white px-6 py-10">
                            <p>To explore more about me, let's start</p>
                            {startButton()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}