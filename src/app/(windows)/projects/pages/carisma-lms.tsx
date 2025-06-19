import { IProject } from "@/config/seeds/projects";

interface CarismaLmsProps {
    project: IProject;
}

export default function CarismaLms({ project }: CarismaLmsProps) {
    return (
        <div className="p-6 flex flex-col items-start">
            <div>
                <h1 className="text-xl">{project.title}</h1>
                <div className="text-sm text-slate-500">{project.description}</div>
            </div>
            <div className="flex gap-2 flex-wrap py-3">
                {project.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4 space-y-4">
                <p>Carisma LMS is a Learning Management System for Carisma Solutions</p>
                <p>It was developed in <strong>Angular</strong> with <strong>.NET</strong> as the backend.</p>
                <p>My role in this project was to design everything from scratch with provided design guidelines and integrate it with backend.</p>
            </div>
            <div className="mt-4">
                <p>Technologies used:</p>
                <ul className="list-disc pl-8 text-xs font-medium">
                    <li>Angular</li>
                    <li>.NET</li>
                </ul>
            </div>
        </div>
    );
}