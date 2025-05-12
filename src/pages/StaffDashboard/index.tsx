import { Modal } from 'components/Model';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { loadTimetableByTeacherRequested } from 'store/timetable/timetableSlice';
import { loadUserRequested } from 'store/user/userSlice';
import { MessageForm } from './MessageForm';

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

export const StaffDashboard = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);
  const { teacherTimeTable } = useSelector(
    (state: RootState) => state.timetable
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubjects = async () => {
      await dispatch(loadUserRequested(auth?.id));
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    dispatch(loadTimetableByTeacherRequested(user?.details?.teacherId));
  }, [dispatch, user]);

  // Group entries by day
  const groupedByDay: Record<string, TimetableEntry[]> = {};
  daysOfWeek.forEach((day) => {
    groupedByDay[day] =
      teacherTimeTable?.filter((entry: any) => entry?.day === day) || [];
  });

  // Get unique time slots
  const timeSlots = Array.from(
    new Set(
      teacherTimeTable?.map((e: any) => `${e?.startTime} - ${e?.endTime}`)
    )
  );

  console.log('auth', auth);
  console.log('user', user);
  console.log('teacherTimeTable', teacherTimeTable);

  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-end pb-2 mr-4'>
        <button
          onClick={() => setCreateOpen(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition'
        >
          Send Message
        </button>
      </div>
      <div className=''>
        <div className='overflow-x-auto p-4'>
          <table className='min-w-full table-auto border border-gray-300 shadow-md'>
            <thead className=' text-gray-700'>
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
                      (entry) =>
                        `${entry.startTime} - ${entry.endTime}` === slot
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
      </div>
      <Modal
        isOpen={createOpen}
        setIsOpen={setCreateOpen}
        title='Send Message'
        children={<MessageForm />}
      />
    </div>
  );
};
