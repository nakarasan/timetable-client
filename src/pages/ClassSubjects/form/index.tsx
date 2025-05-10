import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { storeClassSubjectRequested } from 'store/class-subject/class-subject-Slice';
import {
  loadClassRequested,
  storeBatchRequested,
} from 'store/department/classSlice';
import { loadSubjectsRequested } from 'store/subject/subjectSlice';
import { storeTeacherSubjectRequested } from 'store/teacher-subject/teacher-subject-Slice';
import { loadStaffsRequested } from 'store/user/userSlice';

export const ClassSubjectForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<{
    subjectId: number;
    classId: number;
  }>({
    subjectId: 0,
    classId: 0,
  });

  const { subjects } = useSelector((state: RootState) => state.subject);
  const { classes } = useSelector((state: RootState) => state.class);

  useEffect(() => {
    dispatch(loadSubjectsRequested({}));
    dispatch(loadClassRequested({}));
  }, [dispatch]);

  useEffect(() => {
    if (classes?.length > 0 && formData.classId === 0) {
      setFormData((prev) => ({
        ...prev,
        classId: classes[0].id,
      }));
    }
  }, [classes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(storeClassSubjectRequested(formData));
  };

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
        className='space-y-6'
        onSubmit={handleSubmit}
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Department (Class)
          </label>
          <select
            name='classId'
            value={formData.classId}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          >
            <option
              value={0}
              disabled
            >
              Select a class
            </option>
            {classes?.map((cls: any) => (
              <option
                key={cls.id}
                value={cls.id}
              >
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Subject
          </label>
          <select
            name='subjectId'
            value={formData.subjectId}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          >
            <option
              value={0}
              disabled
            >
              Select a subject
            </option>
            {subjects?.map((subject: any) => (
              <option
                key={subject.id}
                value={subject.subjectId}
              >
                {subject.name}
              </option>
            ))}
          </select>
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
