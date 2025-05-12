import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { generateTimetableRequested } from 'store/timetable/timetableSlice';

export function useGenerateTimetable() {
  const dispatch = useDispatch();

  const onGenereteTimetable = useCallback(
    async (values: any) => {
      console.log('values', values);
      debugger;
      await dispatch(
        generateTimetableRequested({
          minimumTeachersPerWeek: 0,
          subjectsPerDay: values?.subjectsPerDay,
          classStartTime: values?.classStartTime,
          classEndTime: values?.classEndTime,
          defaultDays: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          customDays: [],
          freePeriodAllocation: {
            weeklyLimit: 0,
            locations: ['string'],
          },
          teachersIds: values?.teachersIds,
          batchIds: values?.batchIds,
          classIds: values?.classIds,
          subHoursIds: values?.subHoursIds,
          subClassIds: [],
          eventsIds: [],
          holidays: [],
          celebrations: [],
          days: [],
          activityIds: [],
          extraCurricularActivityIds: [],
        })
      );
    },
    [dispatch]
  );

  return { onGenereteTimetable };
}
