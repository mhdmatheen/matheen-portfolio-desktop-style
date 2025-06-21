import { IProject } from "@/config/seeds/projects";
import Image from "next/image";

interface ProjectHeadingProps {
    project: IProject;
}

export default function ProjectHeading({ project }: ProjectHeadingProps) {
    return (
        <div className="flex flex-col items-center bg-white pt-3 px-6 md:px-3 rounded shadow aspect-video">
            <div className="flex flex-col items-center">
                <h1 className="text-xl">{project.title}</h1>
                <div className="text-sm text-slate-500">{project.description}</div>
            </div>
            <div className="flex gap-2 flex-wrap py-3">
                {project.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="text-xs text-slate-600 bg-slate-100 rounded-full px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <Image className="mx-auto" src={project.banner} alt="Dashboard" width={400} height={400} />
        </div>
    );
}