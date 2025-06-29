import { Divide } from "lucide-react";
import { Experience } from "../models/experience";
import { projects } from "./projects";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const experiences: Experience[] = [
  {
    id: "carisma-solutions",
    company: "Carisma Solutions",
    role: "Senior Desktop Engineer",
    period: `July 2024 - ${months[new Date().getMonth() + 1]} ${new Date().getFullYear()}`,
    location: "Chennai, India",
    companyLogo: "/experiences/carismasolutions.jpeg",
    start_year: 2024,
    end_year: new Date().getFullYear(),
    detailedDescription: (
      <div>
        <ul className="space-y-4">
          <li>
            <strong>Led a cross-functional development team</strong> to deliver high-impact financial solutions that improved client transparency and minimized workflow friction.
          </li>
          <li>
            <strong>Established and implemented Standard Operating Procedures (SOPs)</strong> to streamline team operations, resulting in significant efficiency improvements and measurable productivity gains.
          </li>
        </ul>
      </div>
    ),
    projects: projects.filter(project => project.id == 'finobi' || project.id == 'clientsmsfportal')
  },
  {
    id: "purplequay",
    company: "Purple Quay",
    role: "Technical Consultant Team Lead",
    period: "May 2023 - Jul 2024",
    location: "Chennai, India",
    companyLogo: "/experiences/purplequay.jpeg",
    start_year: 2023,
    end_year: 2024,
    detailedDescription: (
      <div>
        <ul className="space-y-4">
          <li>
            <strong>Created and implemented Standard Operating Procedures (SOPs)</strong> to ease out development operations enabling smooth movement between idea to development and development to deployment.
          </li>
          <li>
            <strong>Collaborated with cross-functional teams</strong> to deliver high-impact financial solutions that improved client transparency and minimized workflow friction.
          </li>
        </ul>
      </div>
    ),
    projects: projects.filter(project => project.id == 'carisma-lms')
  },
  {
    id: "perficient",
    company: "Perficient (Ameex)",
    role: "Senior Technical Consultant",
    period: "Oct 2022 - Apr 2023",
    location: "Remote",
    companyLogo: "/experiences/perficient.jpeg",
    start_year: 2022,
    end_year: 2023,
    detailedDescription: (
      <div>
        <ul className="space-y-4">
          <li>
            Worked as a Shopify developer designing fontend for our e-commerce clients.
          </li>
        </ul>
      </div>
    ),
    projects: []
  },
  {
    id: "benfy",
    company: "Benfy Digital Solutions",
    role: "Senior Software Engineer",
    period: "Apr 2017 - Oct 2022",
    location: "Chennai, India",
    companyLogo: "/experiences/benfy.jpeg",
    start_year: 2017,
    end_year: 2022,
    detailedDescription: (
      <div>
        <ul className="space-y-4">
          <li>Led 5+ web/mobile projects for e-commerce, healthcare, finance, and event planning clients.</li>
          <li>Delivered 25+ Laravel/PHP websites and 7+ Shopify stores with custom Liquid scripts.</li>
          <li>Managed a team of 4 developers, optimizing project delivery timelines by 30%.</li>
          <li>Collaborated closely with marketing and project management teams, gaining valuable experience in product marketing, team leadership, and upskilling across a broad array of technical and strategic competencies.</li>
        </ul>
      </div>
    ),
    projects: projects.filter(project => project.id == 'weddingapp' || project.id == 'customwebsites')
  },
  {
    id: "freelancer",
    company: "Self Employed",
    role: "Freelancer",
    period: "Oct 2014 - Apr 2017",
    location: "Chennai, India",
    companyLogo: "/experiences/freelancer.png",
    start_year: 2014,
    end_year: 2017,
    detailedDescription: (
      <div>
        <ul className="space-y-4">
          <li>Enhanced full-stack development skills through freelance projects, building scalable web and mobile applications that deepened my understanding of client requirements, industry standards, and evolving tech trends.</li>
        </ul>
      </div>
    ),
    projects: projects.filter(project => project.id == 'dharana')
  },
  {
    id: "steadfast",
    company: "Steadfast Technology Solutions",
    role: "Trainee Application Engineer",
    period: "Aug 2013 - Oct 2014",
    location: "Chennai, India",
    companyLogo: "/experiences/steadfast.jpeg",
    start_year: 2013,
    end_year: 2014,
    detailedDescription: (
      <div>
        <ul className="space-y-4">
          <li>Assigned to an internal task management project aimed at streamlining team operations and improving productivity.</li>
          <li>Gained hands-on experience in full-stack development, contributing to both frontend UI and backend logic</li>
        </ul>
      </div>
    ),
    projects: projects.filter(project => project.id == 'tms' || project.id == 'netsuite')
  },
];
