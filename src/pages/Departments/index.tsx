import { Modal } from 'components/Model';
import React, { useEffect, useState } from 'react';
import { DepartmentForm } from './form';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteClassRequested, loadClassRequested } from 'store/department/classSlice';
import { Trash2 } from 'lucide-react';

export const Departments = () => {

  const [createOpen, setCreateOpen] = useState(false);

  const { storeClass, classes } = useSelector(
    (state: RootState) => state.class
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubjects = async () => {
      setCreateOpen(false);
      await dispatch(loadClassRequested({}));
    };

    fetchSubjects();
  }, [storeClass]);


  return (
    <div>
      <div className='flex justify-end pb-4'>
        <button
          onClick={() => setCreateOpen(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
        >
          Add Department
        </button>
      </div>
      <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                {['Name','Actions'].map(
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
              {classes && classes.length > 0 ? (
                classes.map((subject: any, index: any) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[70vw]'>
                      {subject?.name}
                    </td>
                    {/* <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {subject?.hoursInDay}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {subject?.hoursInWeek}
                    </td> */}
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      <Trash2
                        className='text-red-700 cursor-pointer h-5 w-5'
                        onClick={async () => {
                          await dispatch(
                            deleteClassRequested(subject?.id)
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
        children={<DepartmentForm />}
      />
    </div>
  );
};
