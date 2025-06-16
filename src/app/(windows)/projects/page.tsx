"use client";
import { projects } from "@/config/seeds/projects";
import WindowHeader from "@/app/shell/components/window-header";

export default function ProjectsWindow () {
    return (
        <div className="bg-slate-100 p-6">
            <WindowHeader title="Projects" description="My noteworthy projects from which I have learned a lot" icon="/folders.png" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-white/20 shadow-lg space-y-2">
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-slate-700">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-1">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}