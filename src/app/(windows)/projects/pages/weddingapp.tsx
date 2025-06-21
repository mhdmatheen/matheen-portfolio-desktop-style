import { IProject } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface WeddingAppProps {
    project: IProject;
}

export default function WeddingApp({ project }: WeddingAppProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />    
            <ProjectBody verticallyCentered={true}>
                <p>Wedding App is a mobile app for wedding planning and management</p>
                <p>It was developed in <strong>Ionic platform</strong> with <strong>Firebase</strong> as the backend.</p>
                <p>I was responsible for designing frontend to make it look more corporate friendly and user-friendly.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}