import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import StudentSidebar from 'components/StudentSidebar';

export default function StudentLayout() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className=''>
        <Header />
      </div>
      <main className='flex  flex-row '>
        <StudentSidebar />
        <div className='w-full bg-gray-100 pt-20 px-4'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
