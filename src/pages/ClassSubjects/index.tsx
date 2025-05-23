import { Modal } from 'components/Model';
import React, { useEffect, useState } from 'react';
import { ClassSubjectForm } from './form';
import {
  deleteBatchRequested,
  loadBatchRequested,
} from 'store/department/classSlice';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { Trash2 } from 'lucide-react';
import {
  deleteTeacherSubjectRequested,
  loadTeacherSubjectsRequested,
} from 'store/teacher-subject/teacher-subject-Slice';
import {
  deleteClassSubjectRequested,
  loadClassSubjectsRequested,
} from 'store/class-subject/class-subject-Slice';

export const ClassSubjects = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const dispatch = useDispatch();
  const { classSubjects, storeClassSubject } = useSelector(
    (state: RootState) => state.class_subject
  );

  useEffect(() => {
    const fetchSubjects = async () => {
      setCreateOpen(false);
      await dispatch(loadClassSubjectsRequested({}));
    };

    fetchSubjects();
  }, [storeClassSubject]);


  return (
    <div>
      <div className='flex justify-end pb-4'>
        <button
          onClick={() => setCreateOpen(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
        >
          Assign Subject to Class
        </button>
      </div>
      <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                {['Department', 'Subject', 'Actions'].map(
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
              {classSubjects && classSubjects?.length > 0 ? (
                classSubjects?.map((item: any, index: any) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {item?.className}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {item?.subjectName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[10vw]'>
                      <Trash2
                        className='text-red-700 cursor-pointer h-5 w-5'
                        onClick={async () => {
                          await dispatch(
                            deleteClassSubjectRequested({
                              subjectId: item?.id,
                              classId: item?.classId,
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
        title='Assign Subject to Class'
        children={<ClassSubjectForm />}
      />
    </div>
  );
};
