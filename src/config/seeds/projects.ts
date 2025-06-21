export interface IProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    banner: string;
    company: string;
    period: string;
    techStack: {
        frontend: string[];
        backend: string[];
    };
}

export const projects: IProject[] = [
    { 
        id: 'finobi', 
        title: 'Finobi', 
        description: 'An AI based application for Financial Advisors', 
        tags: ['AI Agent', 'Financial Advisors', 'Langchain', 'Google Gemini Pro and Flash'], 
        image: '/finobi.png' ,
        banner: '/ai-agent.svg',
        company: 'Finobi',
        period: '2024 - Present',
        techStack: {
            frontend: ['Next JS'],
            backend: ['Next JS', 'FastAPI']
        }
    },
    { 
        id: 'clientsmsfportal', 
        title: 'Client Dashboard', 
        description: 'A client portal for SMSF clients to manage their SMSF', 
        tags: ['Business Portal', 'SMSF', 'Job Management', 'Transparancy'], 
        image: '/clientportal.png',
        banner: '/dashboard.svg',
        company: 'Carisma Solutions',
        period: '2024 - Present',
        techStack: {
            frontend: ['Angular'],
            backend: ['Laravel', '.NET Core']
        }
    },
    {
        id: 'carisma-lms',
        title: 'Carisma LMS',
        description: 'A Learning Management System for Carisma Solutions',
        tags: ['Learning Management System', 'Corporate Training', 'Skills Analysis'],
        image: '/carisma-lms.png',
        banner: '/team-learning.svg',
        company: 'Carisma Solutions',
        period: '2024 - Present',
        techStack: {
            frontend: ['Angular'],
            backend: ['.NET Core']
        }
    },
    {
        id: 'navigatio',
        title: 'Navigatio Flight Ticket Booking System',
        description: 'A Flight Ticket Booking System for Navigatio',
        tags: ['Flight Tickets', 'Booking System', 'Corporate Travel'],
        image: '/navigatio.png',
        banner: '/travel.svg',
        company: 'Navigatio',
        period: '2024 - Present',
        techStack: {
            frontend: ['Ionic'],
            backend: ['Node JS', 'Express JS']
        }
    },
    {
        id: 'weddingapp',
        title: 'Wedding by 78 Design',
        description: 'A Wedding Management System for 78 Design',
        tags: ['Wedding App', 'Guest Management', 'Fun Activities', 'Shared Activities'],
        image: '/weddingapp.png',
        banner: '/party.svg',
        company: '78 Design',
        period: '2024 - Present',
        techStack: {
            frontend: ['Ionic'],
            backend: ['Firebase']
        }
    },
    {
        id: 'customwebsites',
        title: "Laravel / Shopify / Wordpress Websites",
        description: "More than 20 custom tailored websites for clients based on business requirements",
        tags: ['Business Websites', 'Ecommerce', 'Healthcare Websites', 'Education Websites', 'Real Estate Websites'],
        image: '/customwebsites.png',
        banner: '/programming.svg',
        company: 'Benfy Digital Solutions',
        period: '2024 - Present',
        techStack: {
            frontend: ['Astro', 'Shopify Liquid', 'Wordpress'],
            backend: ['Laravel']
        }
    }
];