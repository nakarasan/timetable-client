import { useStoreRegister } from 'hooks/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  loadClassRequested,
  storeBatchRequested,
} from 'store/department/classSlice';

export const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayname: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    userType: 0,
    rollNumber: '',
    registrationNumber: '',
    batchId: 0,
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

  const { batches } = useSelector((state: RootState) => state.class);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClassRequested({}));
  }, [dispatch]);

  const { onStoreRegister } = useStoreRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStoreRegister(formData);
  };

  useEffect(() => {
    if (batches.length > 0 && formData.batchId === 0) {
      setFormData((prev) => ({
        ...prev,
        batchId: batches[0].id,
      }));
    }
  }, [batches]);

  console.log('formData', formData);

  return (
    <div className='bg-white p-8 rounded-xl shadow-md md:min-w-[40vw]'>
      <form
        className='space-y-6'
        onSubmit={handleSubmit}
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            lastName
          </label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            displayname
          </label>
          <input
            type='text'
            name='displayname'
            value={formData.displayname}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            phone
          </label>
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            address
          </label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            email
          </label>
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            password
          </label>
          <input
            type='text'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            rollNumber
          </label>
          <input
            type='text'
            name='rollNumber'
            value={formData.rollNumber}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            registrationNumber
          </label>
          <input
            type='text'
            name='registrationNumber'
            value={formData.registrationNumber}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Batch
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
