import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Search, Bell as LucideBell, ChevronDown, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { loadUserRequested } from 'store/user/userSlice';
import { useDispatch } from 'react-redux';
import { loadMessageByBatchRequested } from 'store/message/messageSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleLogout = () => {
    setShowMenu(false);
    // navigate(routes.LOGIN);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [openNotification, setOpenNotification] = useState(false);

  const { auth } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);
  const { messages } = useSelector((state: RootState) => state.message);

  useEffect(() => {
    const fetchSubjects = async () => {
      await dispatch(loadUserRequested(auth?.id));
    };
    fetchSubjects();
  }, []);

  console.log('userrrr', user?.details?.batchId);
  console.log('messages', messages);

  useEffect(() => {
    const fetchSubjects = async () => {
      await dispatch(loadMessageByBatchRequested(15));
    };
    fetchSubjects();
  }, [user?.details?.batchId, auth?.id]);

  return (
    <header className='fixed left-0 top-0 flex items-center justify-between w-full h-16 px-4 text-gray-700 bg-gray-800 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
      <div className='flex items-center space-x-2'>
        <button
          className='md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700'
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <XMarkIcon className='h-6 w-6' />
          ) : (
            <Bars3Icon className='h-6 w-6' />
          )}
        </button>

        <div className='relative hidden md:block w-72'>
          <Search className='absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400' />
          <input
            type='text'
            placeholder='Search...'
            className='w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none'
          />
        </div>
      </div>

      <div className='flex items-center space-x-3'>
        {auth?.userType === 0 && (
          <div className='relative'>
            <button
              className='relative p-2 rounded-full text-gray-200 hover:bg-gray-700'
              onClick={() => setOpenNotification(!openNotification)}
            >
              <LucideBell className='h-6 w-6' />
              <span className='absolute top-1 right-1 block h-2 w-2 bg-red-500 rounded-full'></span>
            </button>
            {openNotification && (
              <div className='absolute left-0 top-0'>
                <Notification data={messages} />
              </div>
            )}
          </div>
        )}

        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
        >
          {darkMode ? (
            <Sun className='h-5 w-5 text-yellow-300' />
          ) : (
            <Moon className='h-5 w-5 text-gray-600 dark:text-gray-400' />
          )}
        </button> */}

        <div className='relative'>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className='flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center'>
              <User className='h-4 w-4' />
            </div>
            <ChevronDown
              className={`h-4 w-4 ml-1 transition-transform ${
                showDropdown ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showDropdown && (
            <div className='absolute right-0 mt-2 w-28 bg-white border-gray-800 rounded-lg shadow-lg border dark:border-gray-700'>
              <a
                className='block px-4 py-2 text-sm cursor-pointer'
                onClick={() => {
                  localStorage.clear();
                  setShowDropdown(false);
                  navigate('/login');
                }}
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
