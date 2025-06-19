import { IProject } from "@/config/seeds/projects";

interface WeddingAppProps {
    project: IProject;
}

export default function WeddingApp({ project }: WeddingAppProps) {
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
                <p>Wedding App is a mobile app for wedding planning and management</p>
                <p>It was developed in <strong>Ionic platform</strong> with <strong>Firebase</strong> as the backend.</p>
                <p>I was responsible for designing frontend to make it look more corporate friendly and user-friendly.</p>
            </div>
            <div className="mt-4">
                <p>Technologies used:</p>
                <ul className="list-disc pl-8 text-xs font-medium">
                    <li>Ionic</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>
    );
}