"use client";

interface WindowHeaderProps {
    title: string;
    description: string;
    icon: string;
}

export default function WindowHeader({ title, description, icon }: WindowHeaderProps) {
    return (
        <div className="flex items-center justify-start gap-2 mb-4">
            <img className="h-16 w-16" src={icon} alt="" />
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-slate-800 text-xl charm">{title}</h1>
                <div className="text-slate-600 font-medium text-sm">{description}</div>
            </div>
        </div>
    );
}