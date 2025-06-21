import { IProject } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface CustomWebsitesProps {
    project: IProject;
}

export default function CustomWebsites({ project }: CustomWebsitesProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>More than 20 custom tailored websites for clients based on business requirements</p>
                <p>Some notable websites I have made are:</p>
                <ul className="list-disc pl-8 text-xs font-medium">
                    <li>Gabicci</li>
                    <li>BeWell Hospitals</li>
                    <li>Bayan Investment Firm</li>
                    <li>Orthomed Hospital</li>
                    <li>Dace Applicances</li>
                    <li>Madrabbit</li>
                    <li>Tuyam</li>
                    <li>Mahindra Lifespace Ad campaigns</li>
                    <li>Rao Hospital</li>
                    <li>Kurryzo: Food Delivery</li>
                </ul>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}