export interface IProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    company: string;
    period: string;
}

export const projects: IProject[] = [
    { 
        id: 'finobi', 
        title: 'Finobi', 
        description: 'An AI based application for Financial Advisors', 
        tags: ['Next JS', 'FastAPI', 'Langchain', 'Google Gemini Pro and Flash'], 
        image: '/finobi.png' ,
        company: 'Finobi',
        period: '2024 - Present'
    },
    { 
        id: 'clientsmsfportal', 
        title: 'Client Portal / SMSF Portal', 
        description: 'A client portal for SMSF clients to manage their SMSF', 
        tags: ['Angular', 'Laravel', '.NET Core'], 
        image: '/clientportal.png',
        company: 'Carisma Solutions',
        period: '2024 - Present'
    },
    {
        id: 'carisma-lms',
        title: 'Carisma LMS',
        description: 'A Learning Management System for Carisma Solutions',
        tags: ['Angular', 'Laravel', '.NET Core'],
        image: '/carisma-lms.png',
        company: 'Carisma Solutions',
        period: '2024 - Present'
    },
    {
        id: 'navigatio',
        title: 'Navigatio Flight Ticket Booking System',
        description: 'A Flight Ticket Booking System for Navigatio',
        tags: ['Ionic', 'Node JS', 'Express JS'],
        image: '/navigatio.png',
        company: 'Navigatio',
        period: '2024 - Present'
    },
    {
        id: 'weddingapp',
        title: 'Wedding by 78 Design',
        description: 'A Wedding Management System for 78 Design',
        tags: ['Ionic', 'Firebase'],
        image: '/weddingapp.png',
        company: '78 Design',
        period: '2024 - Present'
    },
    {
        id: 'customwebsites',
        title: "Laravel / Shopify / Wordpress Websites",
        description: "More than 20 custom tailored websites for clients based on business requirements",
        tags: ['Laravel', 'Shopify', 'Wordpress'],
        image: '/customwebsites.png',
        company: 'Benfy Digital Solutions',
        period: '2024 - Present'
    }
];