import { Modal } from 'components/Model';
import React, { useEffect, useState } from 'react';
import { SubjectForm } from './Form';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  deleteSubjectRequested,
  loadSubjectsRequested,
} from 'store/subject/subjectSlice';
import { useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react';

export const Subjects = () => {
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
  const [createOpen, setCreateOpen] = useState(false);
  const { storeSubject, subjects } = useSelector(
    (state: RootState) => state.subject
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubjects = async () => {
      setCreateOpen(false);
      await dispatch(loadSubjectsRequested({}));
    };

    fetchSubjects();
  }, [storeSubject]);

  console.log('subjects', subjects);

  return (
    <div>
      <div className='flex justify-end pb-4'>
        <button
          onClick={() => setCreateOpen(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
        >
          Add New Subject
        </button>
      </div>
      <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                {['Name', 'HoursInDay', 'HoursInWeek', 'Actions'].map(
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
              {subjects && subjects.length > 0 ? (
                subjects.map((subject: any, index: any) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {subject?.name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {subject?.hoursInDay}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {subject?.hoursInWeek}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      <Trash2
                        className='text-red-700 cursor-pointer h-5 w-5'
                        onClick={async () => {
                          await dispatch(
                            deleteSubjectRequested({
                              subjectId: subject?.subjectId,
                              subjectHourId: subject?.subjectHourId,
                            })
                          );
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className='text-center px-6 py-4 text-sm text-gray-500'
                  >
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={createOpen}
        setIsOpen={setCreateOpen}
        title='Add New Subject'
        children={<SubjectForm />}
      />
    </div>
  );
};
