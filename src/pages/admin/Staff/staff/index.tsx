import React, { useState } from "react";

// Define a type for StaffMember
type StaffMember = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  address: string;
};

export const AddStaffForm = ({
  onAddStaff,
  onCancel,
}: {
  onAddStaff: (staff: StaffMember) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<StaffMember>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    address: "",
  });

  // Updated handleChange to support select inputs as well
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof StaffMember]: value,  // This makes sure `name` is a key in `StaffMember`
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onAddStaff(formData);
    setFormData({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      department: "",
      address: "",
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Staff Member
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "First Name", name: "firstName", placeholder: "John" },
            { label: "Last Name", name: "lastName", placeholder: "Doe" },
            {
              label: "Email",
              name: "email",
              placeholder: "johndoe@example.com",
              type: "email",
            },
            {
              label: "Phone Number",
              name: "phone",
              placeholder: "+1 234 567 890",
              type: "tel",
            },
          ].map(({ label, name, placeholder, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name as keyof StaffMember]} // Ensuring type safety
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
                required
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
              required
            >
              <option value="">Select role</option>
              <option>Lecturer</option>
              <option>Admin Staff</option>
              <option>Technical Officer</option>
              <option>Lab Assistant</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
              required
            >
              <option value="">Select department</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Software Engineering</option>
              <option>Business Management</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Mathematics</option>
              <option>Biology</option>
              <option>Physics</option>
              <option>English Language</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123, Main Street, Colombo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Add Staff
          </button>
        </div>
      </form>
    </div>
  );
};
