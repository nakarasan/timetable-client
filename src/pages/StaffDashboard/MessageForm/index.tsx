import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { storeClassSubjectRequested } from 'store/class-subject/class-subject-Slice';
import { loadBatchRequested } from 'store/department/classSlice';

export const MessageForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    batchId: 0,
    text: '',
    senderId: auth?.id,
  });

  const { batches } = useSelector((state: RootState) => state.class);

  useEffect(() => {
    dispatch(loadBatchRequested({}));
  }, [dispatch]);

  useEffect(() => {
    if (batches?.length > 0 && formData.batchId === 0) {
      setFormData((prev) => ({
        ...prev,
        batchId: batches[0]?.id,
      }));
    }
  }, [batches]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'text' ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(storeClassSubjectRequested(formData));
  };

  console.log('fffffff', formData);
  console.log('auth', auth);

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
            name='batchId'
            value={formData.batchId}
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
            {batches?.map((cls: any) => (
              <option
                key={cls?.id}
                value={cls?.id}
              >
                {cls?.batchName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Notes
          </label>
          <textarea
            name='text'
            value={formData.text}
            onChange={handleChange}
            rows={4}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500 resize-y'
            placeholder='Enter any additional notes here...'
          />
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
