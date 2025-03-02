"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Image from "next/image";
import logo from "../app/assets/images/i1.jpg";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("dashboard");
  const [activeSubContent, setActiveSubContent] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  let h = 8;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveContent={setActiveContent}
        setActiveSubContent={setActiveSubContent}
        activeContent={activeContent}
        activeSubContent={activeSubContent}
      />
      <div className="flex-1 overflow-hidden">
        <MainContent
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          activeContent={activeContent}
          activeSubContent={activeSubContent}
        />
      </div>
    </div>
  );
}
