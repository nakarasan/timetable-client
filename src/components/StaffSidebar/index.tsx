import React, { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import {
  Bell as LucideBell,
  LayoutDashboard,
  UserRoundPen,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffSidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const menuItems: any = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/staffs/dashboard' },
    { name: 'Profile', icon: UserRoundPen, path: '/staffs/profile' },
    { name: 'Help', icon: QuestionMarkCircleIcon, path: '/staffs/help' },
  ];

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const toggleSubMenu = (itemName: string) => {
    setOpenSubMenu((prev) => (prev === itemName ? null : itemName));
  };
  const navigate = useNavigate();
  return (
    <nav className='px-4 py-6 bg-gray-800 h-screen w-[16rem] pt-24'>
      <ul className='space-y-1'>
        {menuItems?.map((item: any) => (
          <li key={item.name}>
            <div>
              <button
                onClick={() => {
                  if (item.children) {
                    toggleSubMenu(item.name);
                  } else {
                    setActiveItem(item.name);
                    navigate(item.path); // 👉 Navigate on top-level click
                  }
                }}
                className={`flex items-center w-full p-3 rounded-lg text-sm font-medium justify-between ${
                  activeItem === item.name
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-100'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className='flex items-center'>
                  <item.icon className='h-5 w-5 mr-3' />
                  {item.name}
                </div>
                {item.children && (
                  <svg
                    className={`h-4 w-4 ml-2 transition-transform ${
                      openSubMenu === item.name ? 'rotate-90' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      d='M9 5l7 7-7 7'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                )}
              </button>

              {item.children && openSubMenu === item.name && (
                <ul className='ml-8 mt-2 space-y-1'>
                  {item.children.map((child: any) => (
                    <li key={child.name}>
                      <button
                        onClick={() => {
                          setActiveItem(child.name);
                          navigate(child.path); // 👉 Navigate on submenu click
                        }}
                        className={`flex items-center w-full p-2 rounded-lg text-sm font-medium ${
                          activeItem === child.name
                            ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-100'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <child.icon className='h-4 w-4 mr-2' />
                        {child.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StaffSidebar;
