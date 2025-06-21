import { IProject } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface FinobiPageProps {
    project: IProject;
}

export default function FinobiPage({ project }: FinobiPageProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>This project was developed in <strong>Next.js</strong> with <strong>FastAPI</strong> as the backend.</p>
                <p>It uses <strong>Langchain</strong> for AI capabilities and <strong>Google Gemini Pro and Flash</strong> for AI models.</p>
                <p>I was responsible for designing frontend to make it look more corporate friendly and user-friendly.</p>
                <p>Also I was responsible for fixing any issues in FastAPI.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}