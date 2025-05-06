import React, { useState } from 'react';

export const SubjectForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
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

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/subjects', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Subject added successfully!');
  //       // Optionally reset form or show success message
  //     } else {
  //       console.error('Failed to add subject');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  console.log('formData', formData);

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
        // onSubmit={handleSubmit}
        className='space-y-6'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            value={formData.subject}
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
            Add Staff
          </button>
        </div>
      </form>
    </div>
  );
};
