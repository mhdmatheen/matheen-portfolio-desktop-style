export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    banner: string;
    company: string;
    techStack: {
        frontend: string[];
        backend: string[];
    };
}

export const projects: Project[] = [
    { 
        id: 'finobi', 
        title: 'Finobi', 
        description: 'An AI based application for Financial Advisors', 
        tags: ['AI Agent', 'Financial Advisors', 'Langchain', 'Google Gemini Pro and Flash'], 
        image: '/finobi.png' ,
        banner: '/ai-agent.svg',
        company: 'Finobi',
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
        techStack: {
            frontend: ['Angular'],
            backend: ['Laravel', '.NET Core 8']
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
        techStack: {
            frontend: ['Angular'],
            backend: ['.NET Core 8']
        }
    },
    {
        id: 'shopify',
        title: 'Shopify Websites',
        description: 'E-commerce websites development using Shopify Platform',
        tags: ['E-commerce Websites', 'Shopify', 'Liquid'],
        image: '/customwebsites.png',
        banner: '/shopping.svg',
        company: 'Perficient (Ameex)',
        techStack: {
            frontend: ['Shopify Liquid'],
            backend: ['Shopify']
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
        techStack: {
            frontend: ['Astro', 'Shopify Liquid', 'Wordpress'],
            backend: ['Laravel']
        }
    },
    {
        id: 'dharana',
        title: "Dharana",
        description: "A yoga training mobile app to help yoga trainees to focus.",
        tags: ['Mobile App', 'Yoga Training', 'Focus', 'Meditation'],
        image: '',
        banner: '/yoga.svg',
        company: 'Freelancing',
        techStack: {
            frontend: ['Android Java'],
            backend: ['Fireabase']
        }
    },
    {
        id: 'lojo',
        title: "Lojo Commerce",
        description: "An e-commerce platform for selling groceries.",
        tags: ['E-commerce', 'Product Management', 'Order Management', 'Payment Processing'],
        image: '',
        banner: '/shopping.svg',
        company: 'Freelancing',
        techStack: {
            frontend: ['Magento'],
            backend: ['Magento']
        }
    },
    {
        id: 'tms',
        title: "Task Management System",
        description: "A Task Management System for internal employees.",
        tags: ['Task Management', 'Weekly Reports', 'Timesheet'],
        image: '',
        banner: '/scrum.svg',
        company: 'Steadfast Technology Services',
        techStack: {
            frontend: ['ASP.NET'],
            backend: ['.NET 3.5']
        }
    },
    {
        id: 'netsuite',
        title: "Oracle NetSuite",
        description: "Customizing Oracle NetSuite for clients with scripts.",
        tags: ['NetSuite', 'ERP'],
        image: '',
        banner: '/business.svg',
        company: 'Steadfast Technology Services',
        techStack: {
            frontend: ['Javascript'],
            backend: ['NetSuite']
        }
    }
];