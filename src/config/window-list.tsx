export const windowItems = [
    { name: "Resume", icon: <img className="w-8 h-8" src="/cv.png" alt="about me window" draggable={false} />, app: 'Resume', type: 'window', isMaximizable: false },
    { name: "About Me", icon: <img className="w-8 h-8" src="/programmer.png" alt="about me window" draggable={false} />, app: 'About', type: 'window', isMaximizable: true },
    { name: "My Experiences", icon: <img className="w-8 h-8" src="/suitcase.png" alt="experiences window" draggable={false} />, app: 'Experiences', type: 'window', isMaximizable: true },
    { name: "My Projects", icon: <img className="w-8 h-8" src="/folders.png" alt="projects window" draggable={false} />, app: 'Projects', type: 'window', isMaximizable: true },
    { name: "My Skills", icon: <img className="w-8 h-8" src="/soft-skills.png" alt="skills window" draggable={false} />, app: 'Skills', type: 'window', isMaximizable: true },
    { name: "About this Project", icon: <img className="w-8 h-8" src="/binary-code.png" alt="code window" draggable={false} />, app: 'Code', type: 'window', isMaximizable: false },
    { name: "Feedback", icon: <img className="w-8 h-8" src="/chat.png" alt="feedback window" draggable={false} />, app: 'Feedback', type: 'window', isMaximizable: false },
    { name: "Minesweeper", 
        icon: <img className="w-8 h-8" src="/minesweeper.png" alt="code window" draggable={false} />, 
        app: 'Minesweeper',
        type: 'game',
        isMaximizable: false
    },
    { name: "Snake", 
        icon: <img className="w-8 h-8" src="/snake.png" alt="code window" draggable={false} />, 
        app: 'Snake',
        type: 'game',
        isMaximizable: false
    },
    { 
        name: "Zorin Bytes", 
        icon: <img className="w-8 h-8" src="/world-wide-web.png" alt="code window" draggable={false} />, 
        href: 'https://zorinbytes.in',
        app: 'ZorinBytes',
        type: 'link',
        isMaximizable: false
    },
    { 
        name: "Linkedin", 
        icon: <img className="w-8 h-8" src="https://www.linkedin.com/favicon.ico" alt="code window" draggable={false} />, 
        href: 'https://www.linkedin.com/in/i-am-matheen/',
        app: 'Linkedin',
        type: 'link',
        isMaximizable: false
    },
    { 
        name: "Email", 
        icon: <img className="w-8 h-8" src="/envelope.png" alt="code window" draggable={false} />, 
        href: 'mailto:matheen@matheen.com',
        app: 'Email',
        type: 'link',
        isMaximizable: false
    },
];

export const startMenuItems = windowItems.filter(item => item.type === 'window');

export const desktopIcons = windowItems.filter(item => 
    item.app === 'Resume' || item.app === 'About' || item.app === 'Experiences' || item.app === 'Projects' || item.app === 'Skills' || item.type === 'game'
);

export const secondaryMenuItems = windowItems.filter(item => item.type === 'game' || item.type === 'link');
