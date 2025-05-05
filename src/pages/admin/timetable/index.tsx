import React, { useState } from "react";

// Define the type for each timetable entry
type TimetableEntry = {
  day: string;
  className: string;
  subject: string;
  startTime: string;
  endTime: string;
  lecturer: {
    name: string;
    lectureHours: string;
    tutorialHours: string;
  };
  labInstructor: {
    name: string;
    labHours: string;
  };
};

export const AddTimetable = () => {
  // State
  const [timetable, setTimetable] = useState<TimetableEntry[]>([
    {
      day: "",
      className: "",
      subject: "",
      startTime: "",
      endTime: "",
      lecturer: {
        name: "",
        lectureHours: "",
        tutorialHours: "",
      },
      labInstructor: {
        name: "",
        labHours: "",
      },
    },
  ]);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newTimetable = [...timetable];

    if (name.startsWith("lecturer")) {
      const key = name.replace("lecturer", "").toLowerCase() as keyof typeof newTimetable[number]["lecturer"];
      newTimetable[index].lecturer = {
        ...newTimetable[index].lecturer,
        [key]: value,
      };
    } else if (name.startsWith("labInstructor")) {
      const key = name.replace("labInstructor", "").toLowerCase() as keyof typeof newTimetable[number]["labInstructor"];
      newTimetable[index].labInstructor = {
        ...newTimetable[index].labInstructor,
        [key]: value,
      };
    } else {
      (newTimetable[index] as any)[name] = value;
    }

    setTimetable(newTimetable);
  };

  // Add new timetable entry
  const handleAddEntry = () => {
    setTimetable([
      ...timetable,
      {
        day: "",
        className: "",
        subject: "",
        startTime: "",
        endTime: "",
        lecturer: {
          name: "",
          lectureHours: "",
          tutorialHours: "",
        },
        labInstructor: {
          name: "",
          labHours: "",
        },
      },
    ]);
  };

  // Remove a timetable entry
  const handleRemoveEntry = (index: number) => {
    const newTimetable = timetable.filter((_, i) => i !== index);
    setTimetable(newTimetable);
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Timetable Data Submitted:", timetable);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Add Timetable</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {timetable.map((entry, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-lg dark:border-gray-600 mb-4">
            
            {/* Day */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year & Semester</label>
              <select
                name="day"
                value={entry.day}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg"
              >
                <option value="" disabled>Select Year & Semester</option>
                <option>Year 1  Semester 1</option>
                <option>Year 1  Semester 2</option>
                <option>Year 2  Semester 1</option>
                <option>Year 2  Semester 2</option>
                <option>Year 3  Semester 1</option>
                <option>Year 3  Semester 2</option>
                <option>Year 4  Semester 1</option>
                <option>Year 4  Semester 2</option>
              </select>
            </div>
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <select
                name="subject"
                value={entry.subject}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg"
              >
                <option value="" disabled>Select Subject</option>
                <option>Programming Fundamentals</option>
                <option>Database Management Systems</option>
                <option>Web Development</option>
                <option>Software Engineering</option>
                <option>Computer Networks</option>
                <option>Operating Systems</option>
                <option>Data Structures and Algorithms</option>
                <option>Artificial Intelligence</option>
                <option>Machine Learning</option>
                <option>Cloud Computing</option>
                <option>Cybersecurity</option>
                <option>Mobile Application Development</option>
              </select>
            </div>
            {/* Remove Entry Button */}
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => handleRemoveEntry(index)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
              >
                Remove Entry
              </button>
            </div>
          </div>
        ))}

        {/* Add New Entry Button */}
        <div>
          <button
            type="button"
            onClick={handleAddEntry}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            + Add New Entry
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Save Timetable
          </button>
        </div>
      </form>
    </div>
  );
};
