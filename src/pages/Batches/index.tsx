import React from 'react';

export const Batches = () => {
  const staffMembers: any = [
    {
      id: 1,
      firstName: 'Achchuthan',
      lastName: 'Achchu',
      email: 'achchuthan@example.com',
      phone: '+1 234 567 890',
      role: 'Lecturer',
      department: 'Computer Science',
      address: '123 Main Street',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 891',
      role: 'Admin Staff',
      department: 'Information Technology',
      address: '456 Oak Avenue',
    },
  ];
  return (
    <div>
      <div className='flex justify-end pb-4'>
        <button
          // onClick={() => setShowAddForm(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
        >
          Add New Class
        </button>
      </div>
      <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                {['Name', 'Email', 'Phone', 'Role', 'Department'].map(
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
              {staffMembers?.map((staff: any) => (
                <tr key={staff.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      {staff.firstName} {staff.lastName}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {staff.email}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {staff.phone}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {staff.role}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {staff.department}
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
