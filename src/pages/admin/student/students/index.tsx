import { useState } from "react";
import  {StudentTable}  from "pages/admin/student/student_table";
import { AddStudent } from "pages/admin/student/addstudent";

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  registrationNumber: string;
  course: string;
  year: string;
  address: string;
};

export const Student = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      firstName: "Achchuthan",
      lastName: "Achchu",
      email: "achchuthan@example.com",
      phone: "+1 234 567 890",
      registrationNumber: "IT2024001",
      course: "Computer Science",
      year: "3rd Year",
      address: "123 Main Street",
    },
  ]);

  const handleAddStudent = (newStudent: Student): void => {
    const newId =
      students.length > 0
        ? Math.max(...students.map((s) => s.id)) + 1
        : 1;
    setStudents([...students, { ...newStudent, id: newId }]);
    setShowAddForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
        >
          Add New Student
        </button>
      </div>

      {showAddForm && (
        <AddStudent
          onAddStudent={handleAddStudent}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <StudentTable students={students} />
    </div>
  );
};
