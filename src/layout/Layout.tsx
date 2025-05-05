import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/base';

export default function Layout() {
  return (
    <div className='min-h-full flex flex-col'>
      <Header />
      <main className='flex  flex-row'>
        <div className='w-full bg-white'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
