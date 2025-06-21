import { IProject } from "@/config/seeds/projects";

interface TechStackProps {
    project: IProject;
}

export default function TechStack({ project }: TechStackProps) {
    return (
        <div className="mt-4 border text-sm rounded border-slate-300 w-fit min-w-[200px] relative">
            <div className="font-medium absolute bg-white -top-2 left-2 text-slate-500">Technologies used</div>
            <div className="flex flex-col gap-1 pt-2">
                <div className="flex flex-col px-3 gap-1 py-3">
                    <div className="font-medium">Frontend</div>
                    {project.techStack.frontend.map((tech, idx) => (
                        <span key={idx}>
                            &bull; {tech}
                        </span>
                    ))}
                </div>
                <div className={`flex flex-col px-3 gap-1 py-3 ${project.techStack.backend.length > 0 ? "border-t border-slate-300" : ""}`}>
                    <div className="font-medium">Backend</div>
                    {project.techStack.backend.map((tech, idx) => (
                        <span key={idx}>
                            &bull; {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}