import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { loadTimetableByBatchRequested } from 'store/timetable/timetableSlice';
import { loadUserRequested } from 'store/user/userSlice';

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

export const StudentDashboard = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);
  const { batchTimeTable } = useSelector((state: RootState) => state.timetable);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubjects = async () => {
      await dispatch(loadUserRequested(auth?.id));
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    dispatch(loadTimetableByBatchRequested(user?.details?.batchId));
  }, [dispatch, user]);

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

  return (
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
    </div>
  );
};
