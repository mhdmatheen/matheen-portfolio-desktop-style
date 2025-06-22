export const windowItems = [
    { name: "About Me", icon: <img className="w-8 h-8" src="/programmer.png" alt="about me window" draggable={false} />, app: 'About' },
    { name: "My Experiences", icon: <img className="w-8 h-8" src="/suitcase.png" alt="experiences window" draggable={false} />, app: 'Experiences' },
    { name: "My Projects", icon: <img className="w-8 h-8" src="/folders.png" alt="projects window" draggable={false} />, app: 'Projects' },
    { name: "My Skills", icon: <img className="w-8 h-8" src="/soft-skills.png" alt="skills window" draggable={false} />, app: 'Skills' },
    { name: "About this Project", icon: <img className="w-8 h-8" src="/binary-code.png" alt="code window" draggable={false} />, app: 'Code' },
    { name: "Feedback", icon: <img className="w-8 h-8" src="/chat.png" alt="feedback window" draggable={false} />, app: 'Feedback' },
];

export const startMenuItems = windowItems.filter(item => item.app !== 'Email');

export const desktopIcons = windowItems.filter(item => item.app === 'About' || item.app === 'Experiences' || item.app === 'Projects' || item.app === 'Skills');