"use client";

import { Info } from "lucide-react";
import WindowHeader from "../shell/components/window-header";

export default function CodeWindow() {
    return (
        <div className="bg-white/80 p-6 lg:max-w-[80vh]">
            <WindowHeader title="Code" description="My code repository" icon="/binary-code.png" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-300 p-4 rounded mb-2">
                    <div className="flex items-center gap-2 text-md font-semibold mb-2"><Info size={20} />How is this project built?</div>
                    <div className="text-slate-700 font-medium text-xs">
                        <p>This project is created using <span className="font-semibold">Next.js 15</span> with <span className="font-semibold">Tailwind CSS 4</span></p>
                        <br />
                        <p>And it took almost 12 hours to make this project look like Windows 7.</p>
                    </div>
                </div>

                <div className="border border-slate-300 p-4 rounded mb-2">
                    <div className="flex items-center gap-2 text-md font-semibold mb-2"><Info size={20} />Why Windows 7?</div>
                    <p className="text-slate-700 font-medium text-xs">The reason I specifically chose Windows 7 is because it was at that time I started nurturing my creativity. I was doing a lot of things with Windows 7 and it became one of my closest and personal memories. </p>
                </div>

                <div className="border border-slate-300 p-4 rounded mb-2">
                    <div className="flex items-center gap-2 text-md font-semibold mb-2"><Info size={20} /> Credits</div>
                    <p className="text-slate-700 font-medium text-xs">
                        The following resources from 3rd party services have been used in this projects
                    </p>
                    <ul className="text-xs list-disc pl-6 mt-2 text-blue-700 underline space-y-1">
                        <li><a href="https://www.flaticon.com/" target="_blank">Flaticon</a></li>
                        <li><a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>
                        <li><a href="https://www.lucide.dev/" target="_blank">Lucide</a></li>
                        <li><a href="https://www.npmjs.com/" target="_blank">NPM</a></li>
                    </ul>
                </div>

                <div className="border border-slate-300 p-4 rounded">
                    <div className="flex items-center gap-2 text-md font-semibold mb-2"><Info size={20} />Where can I find this project?</div>
                    <p className="text-slate-700 font-medium text-xs">My code repository is available on GitHub.</p>
                    <br />
                    <div className="text-right">
                        <button className="win7-btn text-xs font-medium" onClick={() => window.open("https://github.com/mhdmatheen/myresume", "_blank")}>
                            Open GitHub Repository
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-4 space-y-2">
                <div className="monospace text-slate-500 font-medium flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-1"><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style={{maxWidth: '2em', maxHeight: '2em', marginLeft: '.2em'}}/><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style={{maxWidth: '2em', maxHeight: '2em', marginLeft: '.2em'}}/><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" style={{maxWidth: '2em', maxHeight: '2em', marginLeft: '.2em'}}/></div>
                    <div className="text-xs"><a href="http://matheen.dev/">Mohamed Matheen Portfolio</a> © 2025 by <a href="https://www.linkedin.com/in/i-am-matheen">Mohamed Matheen</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></div>
                </div>
            </div>

        </div>
    );
}