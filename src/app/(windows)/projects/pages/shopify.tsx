import { Project } from "@/config/seeds/projects";
import TechStack from "../components/tech-stack";
import ProjectHeading from "../components/project-heading";
import ProjectBody from "../components/project-body";

interface ShopifyPageProps {
    project: Project;
}

export default function ShopifyPage({ project }: ShopifyPageProps) {
    return (
        <div className="md:p-6 space-y-0 md:space-y-12">
            <ProjectHeading project={project} />
            <ProjectBody verticallyCentered={true}>
                <p>My responsibilities included in developing / assisting with shopify website development.</p>
                <p>We used Shopify Liquid for frontend development, and based on some client's requirements, we had to create own backend APIs.</p>
            </ProjectBody>
            <ProjectBody horizontallyCentered={true} verticallyCentered={true}>
                <TechStack project={project} />
            </ProjectBody>
        </div>
    );
}