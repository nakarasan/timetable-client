import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeClassRequested } from 'store/department/classSlice';

export const DepartmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  console.log('formData', formData);

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
         onSubmit={(e) => {
                  e.preventDefault(); // Prevent page reload
                  dispatch(storeClassRequested(formData));
                }}
        className='space-y-6'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Subject
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div className='flex justify-end space-x-4 pt-4'>
          <button
            type='submit'
            className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
