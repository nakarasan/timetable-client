import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  loadClassRequested,
  storeBatchRequested,
} from 'store/department/classSlice';

export const BatchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    classId: 0, // Store selected department id
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: name === 'classId' ? Number(value) : value,
    }));
  };

  const { classes } = useSelector((state: RootState) => state.class);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClassRequested({}));
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(storeBatchRequested(formData));
  };

  useEffect(() => {
    if (classes.length > 0 && formData.classId === 0) {
      setFormData((prev) => ({
        ...prev,
        classId: classes[0].id,
      }));
    }
  }, [classes]);

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
        className='space-y-6'
        onSubmit={handleSubmit}
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Batch Name
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Department
          </label>
          <select
            name='classId'
            value={formData.classId}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          >
            {classes?.map((dept: any) => (
              <option
                key={dept?.id}
                value={dept?.id}
              >
                {dept?.name}
              </option>
            ))}
          </select>
        </div>

        <div className='flex justify-end space-x-4 pt-4'>
          <button
            type='button'
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow transition'
          >
            Cancel
          </button>
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
