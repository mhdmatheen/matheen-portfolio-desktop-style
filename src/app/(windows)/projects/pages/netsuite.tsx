import { Project } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface NetSuiteProps {
    project: Project;
}

export default function NetSuite({ project }: NetSuiteProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />    
            <ProjectBody verticallyCentered={true}>
                <p>Worked in Oracle’s NetSuite platform in writing scripts, debugging issues and assisting my seniors.</p>
                <p>NetSuite is a ERP platform and I was responsible for customizing it to meet the requirements of my clients.</p>
                <p>Using javascript, I had to write scripts that is loaded via NetSuite’s user interface.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}