import SkillsPieChart from "@/app/shell/components/charts";
import WindowHeader from "@/app/shell/components/window-header";
import { skills } from "@/config/seeds/skills";

// Define the type of skills
export type SkillType = keyof typeof skills;

export default function SkillsWindow() {
    const skillTypes = Object.keys(skills) as SkillType[];

    return (
        <div className="p-6 max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-full max-h-[80vh]">
            <div className="px-6">
                <WindowHeader title="Skills" description="My expanding skill sets" icon="/soft-skills.png" />
            </div>

            <div className="bg-slate-50/70 rounded-lg px-6 py-4 mb-4">
                <h2 className="text-xl font-semibold mb-2">Skills Breakdown</h2>
                <SkillsPieChart />
            </div>

            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillTypes.map((type, idx) => (
                    <div key={idx} className="relative space-y-2 pb-6 bg-slate-50/70 rounded-lg overflow-hidden">
                        <h4 className="font-semibold text-md px-6 py-3 text-slate-500 capitalize z-10 w-full border-b border-slate-200">{type}</h4>
                        <div className="flex flex-col flex-wrap gap-2 relative">
                            {skills[type].map((skill, jdx) => (
                                <div key={jdx} className={`
                                    px-6 py-3 rounded font-medium text-slate-500 hover:text-slate-700 flex gap-1 items-center justify-start
                                    border-b border-slate-200
                                `}>
                                    <i className={`text-xl ${skill.icon.toLowerCase()}`}></i> <span className="text-sm">{skill.title.replaceAll('_', ' ')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}