import React, { useState } from 'react';

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  registrationNumber: string;
  course: string;
  year: string;
  address: string;
};

export const StudentForm = () => {
  const [formData, setFormData] = useState<Student>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    registrationNumber: '',
    course: '',
    year: '',
    address: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onAddStudent(formData);
    setFormData({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      registrationNumber: '',
      course: '',
      year: '',
      address: '',
    });
  };

  return (
    <div className='bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Add New Student</h2>
      <form
        onSubmit={handleSubmit}
        className='space-y-6'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            { label: 'First Name', name: 'firstName', placeholder: 'John' },
            { label: 'Last Name', name: 'lastName', placeholder: 'Doe' },
            {
              label: 'Email',
              name: 'email',
              placeholder: 'johndoe@example.com',
              type: 'email',
            },
            {
              label: 'Phone Number',
              name: 'phone',
              placeholder: '+1 234 567 890',
              type: 'tel',
            },
            {
              label: 'Registration Number',
              name: 'registrationNumber',
              placeholder: 'IT2024001',
            },
          ].map(({ label, name, placeholder, type = 'text' }) => (
            <div key={name}>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name as keyof Student]}
                onChange={handleChange}
                placeholder={placeholder}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
                required
              />
            </div>
          ))}

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Course
            </label>
            <select
              name='course'
              value={formData.course}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
              required
            >
              <option value=''>Select course</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Software Engineering</option>
              <option>Business Management</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Year
            </label>
            <select
              name='year'
              value={formData.year}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
              required
            >
              <option value=''>Select year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Address
          </label>
          <textarea
            rows={3}
            name='address'
            value={formData.address}
            onChange={handleChange}
            placeholder='123, Main Street, Colombo'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          ></textarea>
        </div>

        <div className='flex justify-end space-x-4 pt-4'>
          <button
            type='button'
            // onClick={onCancel}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow transition'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};
