import WindowHeader from "@/app/shell/components/window-header";
import { skills } from "@/config/seeds/skills";

// Define the type of skills
export type SkillType = keyof typeof skills;

export default function SkillsWindow () {
    const skillTypes = Object.keys(skills) as SkillType[];
    
    return (
        <div className="bg-white/80 py-6 max-w-[500px]">
            <div className="px-6">
                <WindowHeader title="Skills" description="My expanding skill sets" icon="/soft-skills.png" />
            </div>

            <div className="mx-3 space-y-4">
                {skillTypes.map((type, idx) => (
                    <div key={idx} className="relative p-6 space-y-4 bg-white/50 rounded shadow">
                        <h4 className="font-semibold text-md text-slate-500 capitalize z-10 w-fit">{type}</h4>
                        <div className="flex flex-wrap gap-2">
                            {skills[type].map((skill, idx) => (
                                <div key={idx} className="bg-white/50 hover:bg-white hover:shadow px-4 group/skill py-3 rounded font-medium text-slate-500 hover:text-slate-700 flex flex-col gap-1 items-center justify-center">
                                    <i className={`text-xl opacity-80 group-hover/skill:opacity-100 ${skill.icon.toLowerCase()}`}></i> <span className="text-sm">{skill.title.replaceAll('_', ' ')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}