import { Modal } from 'components/Model';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { TimetableForm } from './Form';
import { loadTimetableByBatchRequested } from 'store/timetable/timetableSlice';
import { loadBatchRequested } from 'store/department/classSlice';

// Define the type for each timetable entry
type TimetableEntry = {
  className: string;
  batchName: string;
  teacherName: string;
  subjectName: string;
  startTime: string;
  endTime: string;
  date: string;
  day: string;
};

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const TimeTable: React.FC = () => {
  const dispatch = useDispatch();
  const [createOpen, setCreateOpen] = useState(false);

  const { generateTimetable, batchTimeTable } = useSelector(
    (state: RootState) => state.timetable
  );

  useEffect(() => {
    setCreateOpen(false);
  }, [generateTimetable]);

  // Group entries by day
  const groupedByDay: Record<string, TimetableEntry[]> = {};
  daysOfWeek.forEach((day) => {
    groupedByDay[day] =
      batchTimeTable?.filter((entry: any) => entry?.day === day) || [];
  });

  // Get unique time slots
  const timeSlots = Array.from(
    new Set(batchTimeTable?.map((e: any) => `${e?.startTime} - ${e?.endTime}`))
  );

  const { batches } = useSelector((state: RootState) => state.class);

  useEffect(() => {
    const fetchSubjects = async () => {
      await dispatch(loadBatchRequested({}));
    };

    fetchSubjects();
  }, []);

  const [formData, setFormData] = useState({
    batchId: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: name === 'batchId' ? Number(value) : value,
    }));
  };

  useEffect(() => {
    if (batches?.length > 0 && formData.batchId === 0) {
      setFormData((prev) => ({
        ...prev,
        batchId: batches[0].id,
      }));
    }
  }, [batches]);

  useEffect(() => {
    dispatch(loadTimetableByBatchRequested(formData?.batchId));
  }, [dispatch, formData?.batchId]);

  const { auth } = useSelector((state: RootState) => state.auth);
  console.log('auth', auth);
  return (
    <div>
      <div className='flex justify-end items-end gap-4 pb-2'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Select Batch
          </label>
          <select
            name='batchId'
            value={formData.batchId}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          >
            {batches?.map((dept: any) => (
              <option
                key={dept?.id}
                value={dept?.id}
              >
                {dept?.batchName}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setCreateOpen(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition h-fit'
        >
          Generate
        </button>
      </div>
      <div className='overflow-x-auto p-4'>
        <table className='min-w-full table-auto border border-gray-300 shadow-md'>
          <thead className='bg-gray-100 text-gray-700'>
            <tr>
              <th className='border px-4 py-2'>Time Slot</th>
              {daysOfWeek.map((day) => (
                <th
                  key={day}
                  className='border px-4 py-2'
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots?.map((slot: any) => (
              <tr key={slot}>
                <td className='border px-4 py-2 font-medium bg-gray-50'>
                  {slot}
                </td>
                {daysOfWeek.map((day) => {
                  const match = groupedByDay[day].find(
                    (entry) => `${entry.startTime} - ${entry.endTime}` === slot
                  );

                  return (
                    <td
                      key={day + slot}
                      className='border px-4 py-2 text-sm'
                    >
                      {match ? (
                        <div className='space-y-1'>
                          <div className='font-semibold'>
                            {match.subjectName}
                          </div>
                          <div className='text-gray-600'>
                            {match.teacherName}
                          </div>
                        </div>
                      ) : (
                        <span className='text-gray-400'>—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={createOpen}
        setIsOpen={setCreateOpen}
        title='Generate TimeTable'
      >
        <TimetableForm />
      </Modal>
    </div>
  );
};
