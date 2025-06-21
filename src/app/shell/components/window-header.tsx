"use client";

interface WindowHeaderProps {
    title: string;
    description: string;
    icon: string;
    isSticky?: boolean;
    className?: string;
}

export default function WindowHeader({ title, description, icon, isSticky, className }: WindowHeaderProps) {
    return (
        <div className={`flex items-center h-[90px] ${className} ${isSticky ? "sticky top-0 z-10" : ""} ${className}`}>
            <div className="flex items-center justify-start gap-2">
                <img className="h-16 w-16" src={icon} alt="" />
                <div className="flex flex-col items-start justify-start">
                    <h1 className="font-semibold text-slate-800 text-xl">{title}</h1>
                    <div className="text-slate-500 font-medium text-sm">{description}</div>
                </div>
            </div>
        </div>
    );
}