import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { loadUserRequested } from 'store/user/userSlice';

const StudentProfile = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth?.id) {
      dispatch(loadUserRequested(auth.id));
    }
  }, [auth?.id, dispatch]);

  return (
    <div className='max-w-[70rem] mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl mt-12 overflow-hidden'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-blue-900 to-purple-600 p-6 text-white flex items-center gap-4'>
        <img
          src='https://ui-avatars.com/api/?name=Sujeevan+AVS&background=fff&color=0D8ABC&size=128'
          alt='Profile'
          className='w-24 h-24 rounded-full border-4 border-white shadow-md'
        />
        <div>
          <h2 className='text-2xl font-bold'>
            {user?.user?.firstName} {user?.user?.lastName}
          </h2>
          <p className='text-sm font-light'>{user?.details?.batchInfo?.name}</p>
        </div>
      </div>

      {/* Detail Section */}
      <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700'>
        <div>
          <p className='flex items-center gap-2'>
            <span className='font-semibold'>Display Name:</span>{' '}
            {user?.user?.displayname}
          </p>
          <p className='flex items-center gap-2 mt-2'>
            <span className='font-semibold'>Email:</span> {user?.user?.email}
          </p>
          <p className='flex items-center gap-2 mt-2'>
            <span className='font-semibold'>Phone:</span> {user?.user?.phone}
          </p>
          <p className='flex items-center gap-2 mt-2'>
            <span className='font-semibold'>Address:</span>{' '}
            {user?.user?.address}
          </p>
        </div>
        <div>
          <p className='flex items-center gap-2'>
            <span className='font-semibold'>Roll Number:</span>{' '}
            {user?.details?.rollNumber}
          </p>
          <p className='mt-2'>
            <span className='font-semibold'>Registration No:</span>{' '}
            {user?.details?.registrationNumber}
          </p>
          <p className='mt-2'>
            <span className='font-semibold'>User Type:</span>{' '}
            {user?.user?.userType === 0 ? 'Student' : 'Other'}
          </p>
          <p className='mt-2'>
            <span className='font-semibold'>Account Status:</span>{' '}
            {user?.user?.status === 0 ? '✅ Active' : '❌ Inactive'}
          </p>
        </div>
      </div>

      {/* Timestamp Section */}
      <div className='bg-gray-100 p-4 text-sm text-gray-600 flex justify-between px-6'>
        <span>Created: {new Date(user?.user?.createdAt).toLocaleString()}</span>
        <span>Updated: {new Date(user?.user?.updatedAt).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default StudentProfile;
