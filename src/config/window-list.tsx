export const windowItems = [
    { name: "Resume", icon: <img className="w-8 h-8" src="/cv.png" alt="about me window" draggable={false} />, app: 'Resume' },
    { name: "About Me", icon: <img className="w-8 h-8" src="/programmer.png" alt="about me window" draggable={false} />, app: 'About' },
    { name: "My Experiences", icon: <img className="w-8 h-8" src="/suitcase.png" alt="experiences window" draggable={false} />, app: 'Experiences' },
    { name: "My Projects", icon: <img className="w-8 h-8" src="/folders.png" alt="projects window" draggable={false} />, app: 'Projects' },
    { name: "My Skills", icon: <img className="w-8 h-8" src="/soft-skills.png" alt="skills window" draggable={false} />, app: 'Skills' },
    { name: "About this Project", icon: <img className="w-8 h-8" src="/binary-code.png" alt="code window" draggable={false} />, app: 'Code' },
    { name: "Feedback", icon: <img className="w-8 h-8" src="/chat.png" alt="feedback window" draggable={false} />, app: 'Feedback' },
    { name: "Minesweeper", 
        icon: <img className="w-8 h-8" src="/minesweeper.png" alt="code window" draggable={false} />, 
        app: 'Minesweeper',
        type: 'app'
    },
    { 
        name: "Zorin Bytes", 
        icon: <img className="w-8 h-8" src="/world-wide-web.png" alt="code window" draggable={false} />, 
        href: 'https://zorinbytes.in',
        app: 'ZorinBytes',
        type: 'link'
    },
    { 
        name: "Linkedin", 
        icon: <img className="w-8 h-8" src="https://www.linkedin.com/favicon.ico" alt="code window" draggable={false} />, 
        href: 'https://www.linkedin.com/in/i-am-matheen/',
        app: 'Linkedin',
        type: 'link'
    },
    { 
        name: "Email", 
        icon: <img className="w-8 h-8" src="/envelope.png" alt="code window" draggable={false} />, 
        href: 'mailto:matheen@matheen.com',
        app: 'Email',
        type: 'link'
    },
];

export const startMenuItems = windowItems.filter(item => item.app !== 'Email');

export const desktopIcons = windowItems.filter(item => item.app === 'Resume' || item.app === 'About' || item.app === 'Experiences' || item.app === 'Projects' || item.app === 'Skills');

export const secondaryMenuItems = windowItems.filter(item => item.app === 'Minesweeper' || item.app === 'Email' || item.app === 'Linkedin' || item.app === 'ZorinBytes');
