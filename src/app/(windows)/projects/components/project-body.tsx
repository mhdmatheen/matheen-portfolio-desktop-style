"use client";

interface ProjectBodyProps {
    children: React.ReactNode;
    className?: string;
    horizontallyCentered?: boolean;
    verticallyCentered?: boolean;
}

export default function ProjectBody({ children, className, horizontallyCentered, verticallyCentered }: ProjectBodyProps) {
    return(
        <div className={`bg-white p-6 md:px-3 md:py-3 aspect-video rounded shadow text-slate-700 space-y-4 flex flex-col ${horizontallyCentered && "items-center"} ${verticallyCentered && "justify-center"} ${className}`}>
            {children}
        </div>
    );
}