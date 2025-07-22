"use client";
import WindowHeader from "@/app/shell/components/window-header";
import { Experience } from "@/config/models/experience";
import { experiences } from "@/config/seeds/experience-data";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import AllExperiences from "./components/all-experiences";
import ExperienceDetail from "./components/experience-detail";

export default function ExperiencesWindow () {  
    const [selectedTab, setSelectedTab] = useState<string>(Experience.defaultExperience().id);
    const [tabs, setTabs] = useState<string[]>([]);

    const handleSelectedTab = (id: string) => {
        setSelectedTab(id);
    };

    const handleTabClose = (id: string) => {
        setTabs((prevTabs) => {
            const newTabs = prevTabs.filter((tab) => tab !== id);
            const idx = prevTabs.indexOf(id);
            const nearestTab = prevTabs[idx - 1] || prevTabs[idx + 1];
        
            // If a nearest tab exists, set it as active, else fallback
            if (nearestTab) {
                setSelectedTab(nearestTab);
            } else {
                setSelectedTab(Experience.defaultExperience().id);
            }
        
            return newTabs;
        });        
    };

    return (
        <div className="h-full bg-white/60 max-w-full max-h-[70vh]">
            <div className="toolbar border-b border-slate-300 pt-1 px-2 font-medium z-30">
                <div className="flex -mb-[1px] gap-1">
                    <button tabIndex={-1} 
                        className={`border-x border-t-2 text-xs tab py-1 px-3 rounded-t 
                            ${selectedTab === Experience.defaultExperience().id ? "bg-white border-t-2 border-blue-300" : "border-slate-300"}
                        `}
                        onClick={() => handleSelectedTab(Experience.defaultExperience().id)}>All Experiences</button>
                    {tabs.map((tab, idx) => (
                        <button key={idx} tabIndex={-1} 
                            className={`border-x border-t-2 text-xs tab py-1 pl-3 pr-1 rounded-t flex items-center gap-1 
                                ${selectedTab === tab ? 'bg-white border-t-2 border-blue-300' : 'border-slate-300'} capitalize
                            `} 
                            onClick={() => handleSelectedTab(tab)}>
                            {tab.replaceAll('-', ' ')} <X size={16} className="cursor-pointer" onClick={() => handleTabClose(tab)} />
                        </button>
                    ))}
                </div>
            </div>

            <div className="dark:text-slate-700 bg-white">
                {selectedTab === Experience.defaultExperience().id && (
                    <AllExperiences selectedExperience={(id: string) => {
                        if(!tabs.includes(id)) {
                            setTabs((tabs) => [...tabs, id]);
                        }
                        setSelectedTab(id)
                    }} />
                )}
                {tabs.map((tab, idx) => (
                    selectedTab === tab && (
                        <ExperienceDetail key={idx} id={tab} />
                    )
                ))}
            </div>
        </div>
    );
};