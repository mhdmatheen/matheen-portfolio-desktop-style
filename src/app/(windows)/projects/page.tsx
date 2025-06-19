"use client";
import { IProject, projects } from "@/config/seeds/projects";
import WindowHeader from "@/app/shell/components/window-header";
import FinobiPage from "./pages/finobi";
import ClientPortalPage from "./pages/clientsmsfportal";
import CarismaLmsPage from "./pages/carisma-lms";
import NavigatioPage from "./pages/navigatio";
import WeddingAppPage from "./pages/weddingapp";
import CustomWebsitesPage from "./pages/customwebsites";
import { useState } from "react";

export default function ProjectsWindow () {
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

    const renderProjectPage = (project: IProject) => {
        switch (project.id) {
            case "finobi":
                return <FinobiPage project={project} />;
            case "clientsmsfportal":
                return <ClientPortalPage project={project} />;
            case "carisma-lms":
                return <CarismaLmsPage project={project} />;
            case "navigatio":
                return <NavigatioPage project={project} />;
            case "weddingapp":
                return <WeddingAppPage project={project} />;
            case "customwebsites":
                return <CustomWebsitesPage project={project} />;
            default:
                return <div>Coming soon...</div>;
        }
    };
    

    return (
        <div className="bg-slate-100">
            <div className="px-6 pt-6 pb-3">
                <WindowHeader title="Projects" description="My noteworthy projects from which I have learned a lot" icon="/folders.png" />
            </div>

            <div className="flex items-stretch border-t border-slate-300">
                <div className="sidepanel flex-1 border-r border-slate-300 bg-slate-50 max-w-[200px] max-h-[400px] overflow-y-auto">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`
                                border-slate-300 px-3 py-2 cursor-pointer
                                ${selectedProjectId === project.id ? "bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 from-60% via-60%" : ""}
                                ${idx !== projects.length - 1 ? "border-b" : ""}
                            `}
                            onClick={() => setSelectedProjectId(project.id)}
                        >
                            <div className="font-medium text-sm">{project.title}</div>
                            <div className="text-xs text-slate-500">{project.company}</div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 max-w-[600px] max-h-[400px] overflow-y-auto bg-white">
                    {renderProjectPage(projects.find((p) => p.id === selectedProjectId)!)}
                </div>
            </div>
        </div>
    );
}