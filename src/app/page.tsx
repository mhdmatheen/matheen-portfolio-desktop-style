// app/layout or a page
"use client";
import { useEffect, useState } from "react";
import Taskbar from "./shell/components/taskbar";
import Window from "./shell/components/window";
import About from "@/app/(windows)/about/page";
import ExperiencesWindow from "./(windows)/experiences/page";
import SkillsWindow from "./(windows)/skills/page";
import ProjectsWindow from "./(windows)/projects/page";
import CodeWindow from "./code/page";
import { desktopIcons } from "@/config/window-list";
import FeedbackWindow from "./(windows)/feedback/page";
import ResumeWindow from "./(windows)/resume/page";
import MinesweeperWindow from "./(windows)/minesweeper/page";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [openApps, setOpenApps] = useState<string[]>([]);
  const [currentWindow, setCurrentWindow] = useState<string | null>(null);
  const [hideGuideArrows, setHideGuideArrows] = useState(false);

  const windowConfig = [
    { title: "About", component: <About />, isBodyScrollable: true },
    { title: "Experiences", component: <ExperiencesWindow />, isBodyScrollable: true },
    { title: "Projects", component: <ProjectsWindow />, isBodyScrollable: true },
    { title: "Skills", component: <SkillsWindow />, isBodyScrollable: true },
    { title: "Code", component: <CodeWindow />, isBodyScrollable: true },
    { title: "Feedback", component: <FeedbackWindow />, isBodyScrollable: true },
    { title: "Resume", component: <ResumeWindow />, isBodyScrollable: false },
    { title: "Minesweeper", component: <MinesweeperWindow onClose={() => closeWindow("Minesweeper")} />, isBodyScrollable: false },
  ];

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    if(localStorage.getItem('hideGuideArrows') && localStorage.getItem('hideGuideArrows') === 'true') {
      setHideGuideArrows(true);
    } else {
      setHideGuideArrows(false);
      localStorage.setItem('hideGuideArrows', 'false');
    }

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const closeWindow = (app: string) => {
    setOpenWindows(openWindows.filter(w => w !== app));
    setOpenApps(openApps.filter(w => w !== app));
  };

  const minimizeWindow = (app: string) => {
    setOpenWindows(openWindows.filter(w => w !== app));
  };

  const handleAppClick = (app: string) => {
    // if already open, focus it or do nothing
    setHideGuideArrows(true);
    localStorage.setItem('hideGuideArrows', 'true');
    setCurrentWindow(app);
    if (!openApps.includes(app)) {
      setOpenApps([...openApps, app]);
    }
    if (!openWindows.includes(app)) {
      setOpenWindows([...openWindows, app]);
    }
  };

  const toggleApp = (app: string) => {
    if (openApps.includes(app)) {
      setOpenApps(openApps.filter((a) => a !== app));
    } else {
      setOpenApps([...openApps, app]);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="flex">
        <div className="desktop-icon-container inline-flex w-fit flex-col gap-2 p-4 absolute top-0 left-0 right-0">
          {desktopIcons.map((icon) => (
            <div
              key={icon.app}
              className="desktop-icon px-4 py-2 flex flex-col gap-2 items-center cursor-pointer hover:bg-white/20 rounded border border-transparent hover:border-white/20 col-span-2"
              onClick={() => handleAppClick(icon.app)}
            >
              {icon.icon}
              <p className="text-stroke-3 text-white text-xs">{icon.name}</p>
            </div>
          ))}
        </div>
        {!hideGuideArrows && (
          <img className="pl-[100px] p-4 h-[128px] w-auto -z-10" src="/first-arrow.png" alt="" />
        )}
      </div>
      {windowConfig.map(({ title, component, isBodyScrollable }) =>
        openWindows.includes(title) ? (
          <Window
            key={title}
            title={title}
            onClose={() => closeWindow(title)}
            onMinimize={() => minimizeWindow(title)}
            currentWindow={currentWindow}
            setCurrentWindow={setCurrentWindow}
            isBodyScrollable={isBodyScrollable}
          >
            {component}
          </Window>
        ) : null
      )}

      {/* Taskbar */}
      <Taskbar
        onAppClick={handleAppClick}
        openApps={openApps}
        currentWindow={currentWindow}
        setCurrentWindow={setCurrentWindow}
      />
    </div>
  );
}
