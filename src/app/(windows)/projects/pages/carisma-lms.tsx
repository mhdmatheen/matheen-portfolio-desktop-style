import { IProject } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface CarismaLmsProps {
    project: IProject;
}

export default function CarismaLms({ project }: CarismaLmsProps) {
    return (
        <div className="p-6 space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>Carisma LMS is a Learning Management System for Carisma Solutions</p>
                <p>It was developed in <strong>Angular</strong> with <strong>.NET</strong> as the backend.</p>
                <p>My role in this project was to design everything from scratch with provided design guidelines and integrate it with backend.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}