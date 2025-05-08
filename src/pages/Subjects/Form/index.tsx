import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeSubjectRequested } from 'store/subject/subjectSlice';

export const SubjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    hoursInWeek: '',
    hoursInDay: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const dispatch = useDispatch();

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          dispatch(storeSubjectRequested(formData));
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

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Hours In Week
          </label>
          <input
            type='number'
            name='hoursInWeek'
            value={formData.hoursInWeek}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Hours In Day
          </label>
          <input
            type='number'
            name='hoursInDay'
            value={formData.hoursInDay}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div className='flex justify-end space-x-4 pt-4'>
          <button
            type='button'
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow transition'
          >
            Cancel
          </button>
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
