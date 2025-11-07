"use client";

import { useState } from "react";
import {
  Home,
  Users,
  Contact,
  ChevronDown,
  ChevronUp,
  Pickaxe,
  Menu,
} from "lucide-react";
import Image from "next/image";
import logo from "../assets/images/i1.jpg";

const NavItem = ({
  icon: Icon,
  title,
  children,
  onClick,
  activeContent,
  activeSubContent,
  setActiveContent,
  setActiveSubContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (children) {
      setIsOpen(!isOpen);
    } else {
      onClick();
    }
    setActiveContent(title.toLowerCase());
    setActiveSubContent(null);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer ${
          activeContent === title.toLowerCase() ? "bg-gray-700" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <Icon className="mr-2" size={20} />
          <span>{title}</span>
        </div>
        {children &&
          (isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
      </div>
      {isOpen && children && (
        <div className="ml-4 mt-2">
          {children.map((child, index) => (
            <div
              key={index}
              className={`p-2 hover:bg-gray-700 cursor-pointer ${
                activeContent === title.toLowerCase() &&
                activeSubContent === child.toLowerCase()
                  ? "bg-gray-600"
                  : ""
              }`}
              onClick={() => {
                setActiveContent(title.toLowerCase());
                setActiveSubContent(child.toLowerCase());
              }}
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Sidebar({
  isOpen,
  toggleSidebar,
  setActiveContent,
  setActiveSubContent,
  activeContent,
  activeSubContent,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-between p-4 border-b border-gray-700">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="Logo" width={150} height={150} />

            <h1 className="text-xl font-bold mt-2">Arash Noorali</h1>
          </div>

          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
        <nav className="mt-4">
          <NavItem
            icon={Home}
            title="Dashboard"
            onClick={() => setActiveContent("dashboard")}
            activeContent={activeContent}
            activeSubContent={activeSubContent}
            setActiveContent={setActiveContent}
            setActiveSubContent={setActiveSubContent}
          />
          <NavItem
            icon={Pickaxe}
            title="Projects"
            children={["Paint Machine", "Extruder", "Raw Material Mixer"]}
            activeContent={activeContent}
            activeSubContent={activeSubContent}
            setActiveContent={setActiveContent}
            setActiveSubContent={setActiveSubContent}
          />
          <NavItem
            icon={Contact}
            title="Contact Me"
            onClick={() => setActiveContent("contact me")}
            activeContent={activeContent}
            setActiveContent={setActiveContent}
            setActiveSubContent={setActiveSubContent}
          />
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
