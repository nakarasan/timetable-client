import React from 'react';
import { Dialog } from 'primereact/dialog';
import {  X } from 'lucide-react';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: any;
  title?: string;
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  title,
}) => {
  const renderHeader = () => {
    return (
      <div className='flex justify-between items-center '>
        <div>{title}</div>
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer hover:text-blue-950'
        >
          <X />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Dialog
        visible={isOpen}
        onHide={() => setIsOpen(false)}
        closable={false}
        header={renderHeader()}
        breakpoints={{ '960px': '75vw', '640px': '90vw' }}
        className='bg-white border-black/50 border-2  rounded-lg'
      >
        {children}
      </Dialog>
    </div>
  );
};
