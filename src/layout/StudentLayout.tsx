import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';

export default function StudentLayout() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className=''>
        <Header />
      </div>

      <div className='w-full pt-20 px-4'>
        <Outlet />
      </div>
    </div>
  );
}
