import moment from 'moment';
import React, { useState, useEffect, useRef } from 'react';

interface INotificationProps {
  data?: any;
}

const Notification: React.FC<INotificationProps> = ({ data }) => {
  console.log('data', data);

  useEffect(() => {
    // Typing the event parameter to MouseEvent
  }, []);

  return (
    <div className='absolute right-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl z-10 border border-gray-200'>
      <div className='p-4 border-b border-gray-200 bg-gradient-to-r from-blue-300 to-indigo-400 text-white rounded-t-lg'>
        <h3 className='font-semibold'>Notifications</h3>
      </div>
      <div className='max-h-96 overflow-y-auto'>
        {data?.length > 0 ? (
          data?.map((notification: any) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
            >
              {!notification.read && (
                <div className='inline-block mb-2 px-2 py-1 bg-green-200 text-green-900 text-xs rounded-full'>
                  New
                </div>
              )}
              <div className='flex justify-between items-start'>
                <div>
                  <p className='font-bold text-indigo-800'>
                    {notification?.senderName}
                  </p>
                  <p className='text-gray-700 mt-1'>{notification?.text}</p>
                </div>
                <span className='text-xs text-gray-500'>
                  {moment(notification?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className='p-4 text-center text-gray-500'>No notifications</div>
        )}
      </div>
    </div>
  );
};

export default Notification;
