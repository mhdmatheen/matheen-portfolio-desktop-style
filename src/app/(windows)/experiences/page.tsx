"use client";
import WindowHeader from "@/app/shell/components/window-header";
import { experiences } from "@/config/seeds/experience-data";

export default function ExperiencesWindow () {
    return (
        <div className="h-full bg-white/60 sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[30vw] p-6">
            <WindowHeader title="Experiences" description="My experiences gained over the years" icon="/suitcase.png" />
            <div className="space-y-6 dark:text-slate-700 ">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white backdrop-blur-md p-4 rounded-xl border border-white/20 shadow space-y-2">
                        <div className="flex flex-col gap-2 items-start">
                            {exp.companyLogo && (
                                <img src={exp.companyLogo} className="w-auto h-16 mix-blend-multiply rounded" alt="" />
                            )}
                            <div className="w-full flex-1 space-y-2">
                                <div>
                                    <h1 className="text-xl font-semibold">{exp.company}</h1>
                                    <h4 className="font-medium">{exp.role}</h4>
                                </div>
                                <div>
                                    {exp.description.map((point, i) => (
                                        <div key={i} className="text-xs text-slate-500 list-none">{point}</div>
                                    ))}
                                </div>
                                <div className="text-right pt-2 flex gap-2 justify-between items-center">
                                    <p className="text-xs text-slate-600">{exp.period}</p>
                                    <p className="text-xs text-slate-600">{exp.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};