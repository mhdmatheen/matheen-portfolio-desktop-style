import { IProject } from "@/config/seeds/projects";

interface FinobiPageProps {
    project: IProject;
}

export default function FinobiPage({ project }: FinobiPageProps) {
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
                <p>This project was developed in <strong>Next.js</strong> with <strong>FastAPI</strong> as the backend.</p>
                <p>It uses <strong>Langchain</strong> for AI capabilities and <strong>Google Gemini Pro and Flash</strong> for AI models.</p>
                <p>I was responsible for designing frontend to make it look more corporate friendly and user-friendly.</p>
                <p>Also I was responsible for fixing any issues in FastAPI.</p>
            </div>
            <div className="mt-4">
                <p>Technologies used:</p>
                <ul className="list-disc pl-8 text-xs font-medium">
                    <li>Next.js</li>
                    <li>FastAPI</li>
                    <li>Langchain</li>
                    <li>Google Gemini Pro and Flash</li>
                </ul>
            </div>
        </div>
    );
}