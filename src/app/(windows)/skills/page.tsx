import WindowHeader from "@/app/shell/components/window-header";
import { skills } from "@/config/seeds/skills";

// Define the type of skills
export type SkillType = keyof typeof skills;

export default function SkillsWindow () {
    const skillTypes = Object.keys(skills) as SkillType[];
    
    return (
        <div className="bg-white/80 p-6 max-w-[500px]">
            <WindowHeader title="Skills" description="My expanding skill sets" icon="/soft-skills.png" />

            {skillTypes.map((type, idx) => (
                <div key={idx} className="mb-8">
                    <h4 className="font-semibold text-md text-slate-500 capitalize mb-4 border-b border-slate-300 pb-2">{type}</h4>
                    <div className="flex flex-wrap gap-2">
                        {skills[type].map((skill, idx) => (
                            <div key={idx} className="bg-white px-4 py-2 rounded shadow-sm  font-medium text-sm text-slate-500 flex flex-col gap-1 items-center justify-center">
                                <i className={`text-xl ${skill.icon.toLowerCase()}`}></i> {skill.title.replaceAll('_', ' ')}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}