import { Project } from "../seeds/projects";

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    companyLogo: string;
    start_year: number;
    end_year: number;
    detailedDescription?: React.ReactNode;
    projects?: Project[]
}

export class Experience {
    static defaultExperience (): Experience {
        return {
            id: "-1",
            company: "",
            role: "",
            period: "",
            location: "",
            companyLogo: "",
            start_year: 0,
            end_year: 0,
            projects: []
        }
    }
}