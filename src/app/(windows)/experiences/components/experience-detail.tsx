"use client";

import WindowHeader from "@/app/shell/components/window-header";
import { experiences } from "@/config/seeds/experience-data";
import { getReadableDuration } from "@/utils/lib/experience-period";

interface ExperienceDetailProps {
    id: string;
}

export default function ExperienceDetail({ id }: ExperienceDetailProps) {
    const experience = experiences.find((exp) => exp.id === id);

    return (
        <div className="p-6 max-w-full md:max-w-[40vw] lg:max-w-[50vw] max-h-[70vh]">
            <WindowHeader title={experience?.role ?? ''} description={`${experience?.company}, ${experience?.period}, ${getReadableDuration(experience?.period ?? '').humanReadable}`} icon={experience?.companyLogo ?? ''} />
            <div className="p-6 space-y-4">
                {experience?.detailedDescription}
            </div>
            {experience?.projects && experience?.projects?.length > 0 && 
                <>
                    <div className="h-[1px] bg-slate-300"></div>
                    <div className="p-6 space-y-4">
                        <h2 className="italic text-slate-500">Projects I have worked on:</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {experience?.projects?.map((project, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div>
                                        <h3 className="font-medium">{project.title}</h3>
                                        <p className="text-sm font-medium text-slate-500">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-slate-100 text-xs text-slate-500 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </div>
    );
}