import { useStoreRegister } from 'hooks/auth';
import { useGenerateTimetable } from 'hooks/timetable';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { loadBatchRequested, loadClassRequested } from 'store/department/classSlice';
import { loadSubjectsRequested, storeSubjectRequested } from 'store/subject/subjectSlice';
import { loadStaffsRequested } from 'store/user/userSlice';

export const TimetableForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    subjectsPerDay: 3,
    classStartTime: '08:30',
    classEndTime: '16:30',
    teachersIds: [],
    batchIds: [],
    classIds:[]
  });

  const { staffs } = useSelector((state: RootState) => state.user);
    const { batches, classes } = useSelector((state: RootState) => state.class);
    const {  subjects } = useSelector(
        (state: RootState) => state.subject
      );

  // Load staffs on mount
  useEffect(() => {
    dispatch(loadStaffsRequested({}));
    dispatch(loadBatchRequested({}));
    dispatch(loadClassRequested({}));
    dispatch(loadSubjectsRequested({}));
  }, [dispatch]);

  // Update teacherIds in formData after staffs are loaded
  useEffect(() => {
    if (staffs?.length) {
      const teacherIds = staffs?.map((staff: any) => staff?.teacherId);
      setFormData((prev) => ({
        ...prev,
        teachersIds: teacherIds,
      }));
    }
  }, [staffs]);

  useEffect(() => {
    if (batches?.length) {
      const batchIds = batches?.map((batch: any) => batch?.id);
      setFormData((prev) => ({
        ...prev,
        batchIds: batchIds,
      }));
    }
  }, [batches]);

  useEffect(() => {
    if (classes?.length) {
      const classIds = classes?.map((item: any) => item?.id);
      setFormData((prev) => ({
        ...prev,
        classIds: classIds,
      }));
    }
  }, [classes]);

  useEffect(() => {
    if (subjects?.length) {
      const subHoursIds = subjects?.map((item: any) => item?.subjectHourId);
      setFormData((prev) => ({
        ...prev,
        subHoursIds: subHoursIds,
      }));
    }
  }, [subjects]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { onGenereteTimetable } = useGenerateTimetable();

  console.log('subjects', subjects);
  

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          onGenereteTimetable(formData);
        }}
        className='space-y-6'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Subject per Day
          </label>
          <input
            type='number'
            name='subjectsPerDay'
            value={formData.subjectsPerDay}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Class Start Time
          </label>
          <input
            type='text'
            name='classStartTime'
            value={formData.classStartTime}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Class End Time
          </label>
          <input
            type='text'
            name='classEndTime'
            value={formData.classEndTime}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div className='flex justify-end space-x-4 pt-4'>
          <button
            type='submit'
            className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
          >
            Generate Now
          </button>
        </div>
      </form>
    </div>
  );
};
