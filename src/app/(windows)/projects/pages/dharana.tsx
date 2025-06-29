import { Project } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface DharanaPageProps {
    project: Project;
}

export default function DharanaPage({ project }: DharanaPageProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>This project was developed in <strong>Android Java</strong> with <strong>Fireabase</strong> as the backend.</p>
                <p>I used standard deviation method to calculate deviation in yoga trainee focus.</p>
                <p>Firebase helped me to reduce project development time and improve overall user experience.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}