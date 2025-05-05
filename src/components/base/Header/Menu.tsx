import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { IoPeople } from 'react-icons/io5';
import { BiSolidUpArrow } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';
import { FaCodePullRequest } from 'react-icons/fa6';
import { MdApproval } from 'react-icons/md';
import { MdEvent } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { BsClipboardDataFill } from 'react-icons/bs';
import { MdOutlineSettings } from 'react-icons/md';
import { TbUsersMinus } from 'react-icons/tb';
import { IoMdPerson } from 'react-icons/io';
import { AiOutlineApple } from 'react-icons/ai';
import { Camera } from 'lucide-react';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className='w-auto pt-10 p-2 z-10'>
      <ul>
        <div className='flex align items-center py-5'>
          <Camera
            color='red'
            size={12}
          />{' '}
          Dashboard
        </div>
        <div className='flex align items-center py-5'>
          <Camera
            color='red'
            size={12}
          />{' '}
          Staffs
        </div>
        <li>
          <button
            onClick={() => handleToggle(1)}
            className='flex w-full  py-5'
          >
            <div className='flex align items-center'>
              <Camera
                color='red'
                size={12}
              />
              People
            </div>
            <span className='ml-8 mt-1.5'>
              {openMenu === 1 ? (
                <Camera
                  color='red'
                  size={12}
                />
              ) : (
                <Camera
                  color='red'
                  size={12}
                />
              )}
            </span>
          </button>
          {openMenu === 1 && (
            <ul className=''>
              <li className='pl-8 py-2'>
                <Link to='/submenu2-1'>
                  <div className='flex align items-center'>
                    <Camera
                      color='red'
                      size={12}
                    />
                    Request
                  </div>
                </Link>
              </li>
              <li className='pl-8 py-2'>
                <Link to='/submenu2-2'>
                  <div className='flex align items-center'>
                    <Camera
                      color='red'
                      size={12}
                    />
                    Approval
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <div className='flex align items-center py-5'>
          <Camera
            color='red'
            size={12}
          />{' '}
          Events
        </div>

        <div className='flex align items-center py-5'>
          <Camera
            color='red'
            size={12}
          />{' '}
          Attendance
        </div>

        <div className='flex align items-center py-5'>
          <Camera
            color='red'
            size={12}
          />{' '}
          Master Data
        </div>

        <li>
          <button
            onClick={() => handleToggle(2)}
            className='flex w-full  py-5'
          >
            <div className='flex align items-center'>
              <Camera
                color='red'
                size={12}
              />
              Settings
            </div>
            <span className='ml-8 mt-1.5'>
              {openMenu === 2 ? (
                <Camera
                  color='red'
                  size={12}
                />
              ) : (
                <Camera
                  color='red'
                  size={12}
                />
              )}
            </span>
          </button>
          {openMenu === 2 && (
            <ul className=''>
              <li className='pl-8 py-2'>
                <Link to='/submenu2-1'>
                  <div className='flex align items-center'>
                    <Camera
                      color='red'
                      size={12}
                    />
                    Users
                  </div>
                </Link>
              </li>
              <li className='pl-8 py-2'>
                <Link to='/submenu2-2'>
                  <div className='flex align items-center'>
                    <Camera
                      color='red'
                      size={12}
                    />
                    Roles
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
