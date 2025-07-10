import { Project } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface LojoPageProps {
    project: Project;
}

export default function LojoPage({ project }: LojoPageProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>This project was developed in <strong>Magento</strong> with <strong>Magento</strong> as the backend.</p>
                <p>It uses <strong>HTML, CSS, JS</strong> for frontend and <strong>PHP, MySQL</strong> for backend.</p>
                <p>The store would provide a near mult-tenant platform for grocery store vendors to sell their products online.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}