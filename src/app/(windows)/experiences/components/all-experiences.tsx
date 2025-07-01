import { Experience } from "@/config/models/experience";
import { useEffect, useState } from "react";
import { experiences } from "@/config/seeds/experience-data";
import { Grip, Table, X } from "lucide-react";

interface AllExperiencesProps {
    selectedExperience: (id: string) => void;
}

export default function AllExperiences({ selectedExperience }: AllExperiencesProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredExperiences, setFilteredExperiences] = useState(experiences);

    const ExperienceTableView: React.FC = () => {
        const parseDate = (str: string) => {
            const [monthStr, yearStr] = str.trim().split(" ");
            const month = new Date(`${monthStr} 1, ${yearStr}`).getMonth(); // 0-based
            const year = parseInt(yearStr, 10);
            return new Date(year, month);
        };

        function getReadableDuration(rangeStr: string) {

            const [startStr, endStr] = rangeStr.split(" - ");
            const startDate = parseDate(startStr);
            const endDate = parseDate(endStr);

            const totalMonths =
                (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                (endDate.getMonth() - startDate.getMonth());

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const humanReadable = `${years} year${years !== 1 ? "s" : ""} ${months ? `${months} month${months !== 1 ? "s" : ""}` : ""
                }`.trim();

            const decimal = (totalMonths / 12).toFixed(1).replace(".0", "");

            return {
                humanReadable, // "2 years 6 months"
                decimalYears: `${decimal} year${decimal !== "1.0" ? "s" : ""}`, // "2.5 years"
            };
        }

        function getTotalExperience(experiences: Experience[]) {
            let totalMonths = 0;
            experiences.forEach((exp) => {
                const [startStr, endStr] = exp.period.split(" - ");
                const startDate = parseDate(startStr);
                const endDate = parseDate(endStr);
                totalMonths += (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
            });
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            return `${years} year${years !== 1 ? "s" : ""} ${months ? `${months} month${months !== 1 ? "s" : ""}` : ""}`.trim();
        }

        useEffect(() => {
            if (searchTerm === '') {
              setFilteredExperiences(experiences);
              return;
            }
          
            const lowerSearch = searchTerm.toLowerCase();
          
            const filtered = experiences.filter((exp) =>
              Object.values(exp).some((value) =>
                String(value).toLowerCase().includes(lowerSearch)
              )
            );
          
            setFilteredExperiences(filtered);
          }, [searchTerm]);

        return (
            <div className="max-w-full">
                <table className="w-full" cellSpacing={5} cellPadding={10}>
                    <thead className="border-b border-blue-100 text-sm font-medium text-slate-500">
                        <tr>
                            <th className="p-1">Company</th>
                            <th className="p-1">Role</th>
                            <th className="p-1">Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredExperiences.map((exp, idx) => {
                            const years = getReadableDuration(exp.period);
                            return (
                                <tr key={idx} className="group cursor-pointer text-sm hover:bg-blue-50 duration-75" onClick={() => selectedExperience(exp.id)}>
                                    <td className="py-2 px-3 group-hover:text-blue-700 border-b border-blue-100">
                                        <div className="flex items-center gap-2">
                                            <img src={exp.companyLogo} className="w-auto h-6 mix-blend-multiply rounded" alt="" />
                                            {exp.company}
                                        </div>
                                    </td>
                                    <td className="py-2 px-1 group-hover:text-blue-700 border-b border-blue-100 font-medium">{exp.role}</td>
                                    <td className="py-2 px-1 group-hover:text-blue-700 border-b border-blue-100">
                                        <div>{exp.period}</div>
                                        <div className="text-xs font-medium text-slate-500">({years.decimalYears})</div>
                                    </td>
                                </tr>
                            )
                        })}
                        {filteredExperiences.length === 0 &&
                            <tr>
                                <td colSpan={Object.keys(experiences).length} className="bg-slate-50 py-2 px-3 group-hover:text-blue-700 border-b border-blue-100 font-medium">
                                    <div className="text-center text-sm">No experiences found for searched term.</div>
                                </td>
                            </tr>
                        }
                        <tr>
                            <td colSpan={Object.keys(experiences).length} className="bg-slate-50 py-2 px-3 group-hover:text-blue-700 border-b border-blue-100 font-medium">
                                <div className="text-right text-sm"><span className="font-semibold">Total experience in years</span> {getTotalExperience(experiences)}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            <div className="px-2 py-1 flex items-center justify-end text-sm border-b border-slate-300">
                <div className="flex items-stretch gap-1 border border-slate-300">
                    <input className="simple-input py-1 px-2 border-0 outline-0 focus:outline-0" type="text" placeholder="Search experiences..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className={`border-0 outline-0 focus:outline-0 cursor-pointer ${searchTerm ? 'visible' : 'invisible'}`} onClick={() => setSearchTerm('')}><X size={14} /></button>
                </div>
            </div>

            <div className="min-w-[50vw]">
                    <ExperienceTableView />
            </div>
        </div>
    );
};