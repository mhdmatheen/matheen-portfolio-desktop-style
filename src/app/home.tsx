"use client"

import { useState } from "react";
import Head from "next/head";
import AboutWindow from "./(windows)/about/page";

const tabs = ["About", "Projects", "Skills", "Contact"];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-light mb-6 monospace text-slate-500 text-shadow flex items-end">hello world<div className="h-[3px] w-[18px] bg-slate-500 animate-pulse">&nbsp;</div></h1>
        <div className="flex gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer transition-all duration-300 font-medium text-base monospace border-b border-dashed
                ${activeTab === tab ? "border-slate-500 text-slate-800" : "border-transparent text-slate-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full max-w-4xl bg-white p-6 rounded-2xl dark:text-slate-700 shadow-md">
          {activeTab === "About" && (
            <AboutWindow></AboutWindow>
          )}
          {activeTab === "Projects" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">My Projects</h2>
              <p>This is the Projects section. Show off your work!</p>
            </div>
          )}
          {activeTab === "Skills" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">My Skills</h2>
              <p>This is the Skills section. Add tech stack here.</p>
            </div>
          )}
          {activeTab === "Contact" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
              <p>This is the Contact section. Add form or details later.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
