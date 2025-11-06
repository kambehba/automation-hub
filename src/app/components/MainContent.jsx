"use client";
import { Menu } from "lucide-react";
import Dashboard from "./Dashboard";
import Project_2 from "./Project_2";
import ContactMe from "./ContactMe";
import { AddUser, UserList } from "./Users";
import { General, Security, Notifications } from "./Settings";

function MainContent({
  isSidebarOpen,
  toggleSidebar,
  activeContent,
  activeSubContent,
}) {
  const renderContent = () => {
    switch (activeContent) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        switch (activeSubContent) {
          case "paint machine":
            return <Project_2 />;
          case "":
            return <Security />;
          case "Intruder":
            return <Notifications />;
          default:
            return <General />;
        }
      case "contact me":
        return <ContactMe />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <main
      className={`h-full overflow-y-auto p-4 transition-all duration-300 ${
        isSidebarOpen ? "lg:ml-64" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
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
