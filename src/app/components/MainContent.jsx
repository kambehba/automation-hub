"use client";
import { Menu } from "lucide-react";
import Dashboard from "./Dashboard";
import PaintMachine from "./PaintMachine";
import Extruder from "./Extruder";
import Mixer from "./Mixer";
import ContactMe from "./ContactMe";
import Album from "./Album_o";
import Resume from "./Resume";
import Video from "./Video";
import { AddUser, UserList } from "./Users";
import { General, Security, Notifications } from "./Settings";

function MainContent({
  isSidebarOpen,
  toggleSidebar,
  activeContent,
  activeSubContent,
}) {
  const renderContent = () => {
    if (activeContent === "projects" && !activeSubContent) {
      return <Dashboard />;
    }
    console.log(activeSubContent);
    switch (activeContent) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        switch (activeSubContent) {
          case "paint machine":
            return <PaintMachine />;
          case "extruder":
            return <Extruder />;
          case "mixer":
            return <Mixer />;
          case "album":
            return <Album />;
        }
      case "contact me":
        return <ContactMe />;
      case "resume":
        return <Resume />;
      case "video":
        return <Video />;

      // default:
      //   return <Dashboard />;
    }
  };

  return (
    // <main
    //   className={`h-full overflow-y-auto p-4 transition-all duration-300 ${
    //     isSidebarOpen ? "lg:ml-64" : ""
    //   }`}
    // >
    <main className="h-full overflow-y-auto transition-all duration-300 lg:ml-64 ">
      <div className="max-w-7xl mx-auto rm-200">
        <div className="mb-4">
          <button
            className="p-2 bg-gray-800 text-white rounded lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
        </div>
        {renderContent()}
      </div>
    </main>
  );
}

export default MainContent;
