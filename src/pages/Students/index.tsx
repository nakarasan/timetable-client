import React from 'react';

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

export const Students = () => {
  const students = [
    {
      id: 1,
      firstName: 'Achchuthan',
      lastName: 'Achchu',
      email: 'achchuthan@example.com',
      phone: '+1 234 567 890',
      registrationNumber: 'IT2024001',
      course: 'Computer Science',
      year: '3rd Year',
      address: '123 Main Street',
    },
  ];
  return (
    <div>
      <div className='flex justify-end pb-4'>
        <button
          // onClick={() => setShowAddForm(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
        >
          Add New Student
        </button>
      </div>
      <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                {['Name', 'Email', 'Phone', 'Reg No', 'Course', 'Year'].map(
                  (heading) => (
                    <th
                      key={heading}
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {student.firstName} {student.lastName}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {student.email}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {student.phone}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {student.registrationNumber}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {student.course}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {student.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
