import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentList = () => {
  const { students, handleAddClick, addstudents } = useContext(StudentContext);

  const isStudentAdded = (studentId) => {
    return addstudents.some((student) => student.id === studentId);
  };

  return (
    <div className="  items-center ">
    
      <ul>
        {students.map((student) => (
          <li key={student.id} className="flex justify-evenly mb-5 mt-5">
           <span className="font-medium text-2xl ">{student.name}{" "}</span> 
            <button className="py-1 px-2 rounded-md  bg-green-500 hover:bg-green-200 text-white active:bg-green-800"
              onClick={() => handleAddClick(student)}
              disabled={isStudentAdded(student.id)
                
              }
            >
              Add Student
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
