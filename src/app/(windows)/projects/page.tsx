"use client";
import { Project, projects } from "@/config/seeds/projects";
import WindowHeader from "@/app/shell/components/window-header";
import FinobiPage from "./pages/finobi";
import ClientPortalPage from "./pages/clientsmsfportal";
import CarismaLmsPage from "./pages/carisma-lms";
import NavigatioPage from "./pages/navigatio";
import WeddingAppPage from "./pages/weddingapp";
import CustomWebsitesPage from "./pages/customwebsites";
import { useState } from "react";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import DharanaPage from "./pages/dharana";
import TMS from "./pages/tms";
import NetSuite from "./pages/netsuite";

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
    if(project) {
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
            case "dharana":
                return <DharanaPage project={project} />;
            case "tms":
                return <TMS project={project} />
            case "netsuite":
                    return <NetSuite project={project} />
            default:
                return <div>Coming soon...</div>;
        }
    } else {
        return <div className="h-full flex-1 min-h-[400px] flex flex-col gap-2 text-slate-500 items-center justify-center">
            <CircleArrowLeft size={32} strokeWidth={1} />
            Choose a project to continue
        </div>
    }
};

export default function ProjectsWindow () {
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

    const handleProjectSelect = (projectId: string) => {
        setSelectedProjectId(projectId);
    };

    return (
        <div className="bg-slate-100 h-full flex-1">
            <WindowHeader 
                title="Projects" 
                description="My noteworthy projects from which I have learned a lot" icon="/folders.png" 
                className="border-b border-slate-300 px-6 bg-stone-100"
                isSticky={true}
            />

            <div className="items-stretch hidden md:flex h-[calc(100vh-260px)] overflow-hidden">
                <div className={`sidepanel flex-1 border-r border-slate-300 md:max-w-[200px] overflow-y-auto sticky top-[90px]`}>
                    <div className="space-y-2">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className={`
                                    px-3 py-2 cursor-pointer flex flex-col items-start gap-2
                                    ${selectedProjectId === project.id ? "bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200 from-70% via-70%" : ""}
                                `}
                                onClick={() => handleProjectSelect(project.id)}
                            >
                                <Image src={project.banner} className={`aspect-square bg-white rounded-lg py-3 px-6 shadow w-full flex-1`} alt={project.title} width={50} height={50} />
                                <div className="flex flex-col items-start px-1 flex-1 w-full">
                                    <div className="font-medium text-sm">{project.title}</div>
                                    <div className="text-xs text-slate-500">{project.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`flex-1 hidden md:block max-w-[600px] max-h-[calc(100vh-130px)] overflow-y-auto`}>
                    <div>
                        <ProjectPage project={projects.find((p) => p.id === selectedProjectId)!} />
                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                {/* Iterate each project and render its page like a list */}
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`
                            border-slate-300 cursor-pointer border-b
                        `}
                        onClick={() => handleProjectSelect(project.id)}
                    >
                        <div id={project.id} className={`px-3 py-2 border-b border-slate-300 ${selectedProjectId === project.id ? "bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 from-70% via-70%" : ""}`}>
                            <div className="font-medium text-sm">{project.title}</div>
                            <div className="text-xs text-slate-500">{project.description}</div>
                        </div>
                        <div className={`bg-slate-100 ${selectedProjectId === project.id ? "h-auto" : "h-0"} smooth-transition transition-all duration-300 overflow-hidden`}>
                            <ProjectPage project={project} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}