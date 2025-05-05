import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  ClockIcon,
  UsersIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  BellIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Search, Bell as LucideBell, Sun, Moon, ChevronDown, User } from "lucide-react";
import Logo from "assets/logo.png";
import { AddStaff } from "pages/admin/Staff/addstaff";
import { AddStudent } from "pages/admin/student/addstudent";
import { AddTimetable } from "pages/admin/timetable";






type MenuItem = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isSystemDark);
    }
  }, []);

  // Apply dark mode class to HTML element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Timetable", icon: ClockIcon },
    { name: "Employees", icon: UsersIcon },
    { name: "Students", icon: AcademicCapIcon },
    { name: "FreeHalls", icon: BuildingLibraryIcon },
    { name: "Message", icon: BellIcon },
    { name: "Help", icon: QuestionMarkCircleIcon },
  ];

  const renderContent = () => {
    if (activeItem === "Employees") {
      return <AddStaff />;
    } else if (activeItem === "Students") {
      return <AddStudent />;
    }else if (activeItem === "Timetable") {
      return <AddTimetable />;
    }  
    else {
      return (
        <div className="rounded-lg p-6 border transition-colors duration-500 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300">
            Content for <strong>{activeItem}</strong> section will appear here.
          </p>
        </div>
      );
    }
  
    
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-center h-24 border-b border-gray-200 dark:border-gray-700">
          <img src={Logo} alt="Logo" className="h-24" />
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center w-full p-3 rounded-lg text-sm font-medium ${
                    activeItem === item.name
                      ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-100"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:ml-64">
          <div className="flex items-center space-x-2">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            <div className="relative hidden md:block w-72">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <LucideBell className="h-5 w-5" />
              <span className="absolute top-1 right-1 block h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </a>
                  <div className="border-t border-gray-200 dark:border-gray-700"></div>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Body Content */}
        <main className="flex-1 overflow-y-auto p-6 md:ml-64 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{activeItem}</h1>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;