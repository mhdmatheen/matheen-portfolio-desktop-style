import { IProject } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface ClientPortalProps {
    project: IProject;
}

export default function ClientPortal({ project }: ClientPortalProps) {
    return (
        <div className="p-6 space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>Client Portal is a dashboard application for SMSF and other type of clients to manage their given jobs and tasks.</p>
                <p>It was developed in <strong>Angular</strong> with <strong>.NET Core + Laravel</strong> as the backend.</p>
                <p>My role in this project was to design frontend to make it look more corporate friendly and user-friendly.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}