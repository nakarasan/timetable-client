import React, { useState } from "react";
import { StaffTable } from "pages/admin/Staff/staff_table";
import { AddStaffForm } from "pages/admin/Staff/staff";

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

export const AddStaff = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
    {
      id: 1,
      firstName: "Achchuthan",
      lastName: "Achchu",
      email: "achchuthan@example.com",
      phone: "+1 234 567 890",
      role: "Lecturer",
      department: "Computer Science",
      address: "123 Main Street",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 234 567 891",
      role: "Admin Staff",
      department: "Information Technology",
      address: "456 Oak Avenue",
    },
  ]);

  const handleAddStaff = (newStaff: StaffMember): void => {
    const newId =
      staffMembers.length > 0
        ? Math.max(...staffMembers.map((s) => s.id)) + 1
        : 1;
    setStaffMembers([...staffMembers, { ...newStaff, id: newId }]);
    setShowAddForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center pl-[900px] mb-6">
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
        >
          Add New Staff
        </button>
      </div>

      {showAddForm && (
        <AddStaffForm
          onAddStaff={handleAddStaff}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <StaffTable staffMembers={staffMembers} />
    </div>
  );
};
