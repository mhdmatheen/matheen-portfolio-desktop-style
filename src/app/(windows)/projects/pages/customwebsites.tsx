import { IProject } from "@/config/seeds/projects";

interface CustomWebsitesProps {
    project: IProject;
}

export default function CustomWebsites({ project }: CustomWebsitesProps) {
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
            </div>
        </div>
    );
}