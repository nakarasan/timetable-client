import React, { useState } from 'react';

type Department = {
  id: number;
  name: string;
};

const departments: Department[] = [
  { id: 1, name: 'Computer Science' },
  { id: 2, name: 'Mathematics' },
  { id: 3, name: 'Physics' },
];

export const BatchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    classId: 0, // Store selected department id
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'classId' ? Number(value) : value,
    }));
  };

  console.log('formData', formData);

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Batch Name
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
            Department
          </label>
          <select
            name='classId'
            value={formData.classId}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          >
            <option
              value=''
              disabled
            >
              Select Department
            </option>
            {departments.map((dept) => (
              <option
                key={dept.id}
                value={dept.id}
              >
                {dept.name}
              </option>
            ))}
          </select>
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
