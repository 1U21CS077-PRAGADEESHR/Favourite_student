import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentList = () => {
  const { students, handleAddClick, addstudents } = useContext(StudentContext);

  const isStudentAdded = (studentId) => {
    return addstudents.some((student) => student.id === studentId);
  };

  return (
    <div className="items-center">
      <ul>
        {students.map((student) => (
          <li key={student.id} className="flex justify-evenly mb-5 mt-5">
            <span className="font-medium text-2xl max-md:text-xl">{student.name}{" "}</span> 
            <button
              className={`py-1 px-2 rounded-md text-white ${
                isStudentAdded(student.id)
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-200 active:bg-green-800"
              }`}
              onClick={() => handleAddClick(student)}
              disabled={isStudentAdded(student.id)}
            >
              {isStudentAdded(student.id) ? "Student Added" : "Add Student"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
