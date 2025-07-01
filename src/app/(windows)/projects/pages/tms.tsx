import { Project } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface TMSProps {
    project: Project;
}

export default function TMS({ project }: TMSProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />    
            <ProjectBody verticallyCentered={true}>
                <p>Task Management System was my first project in my career. Using .NET I was
                assigned in building task management related modules.</p>
                <p><strong>ASP.NET</strong> was used as frontend and <strong>.NET 3.5</strong> as the backend.</p>
                <p>I made sure, the design was corporate friendly and user-friendly.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}