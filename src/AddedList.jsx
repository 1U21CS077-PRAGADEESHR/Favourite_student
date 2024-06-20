import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

const AddedList = () => {
  const { addstudents, handleRemoveClick } = useContext(StudentContext);

  return (
    <div>
      <ul>
        {addstudents.map((student) => (
          <li key={student.id} className="flex justify-evenly gap-10 mt-5">
           <span className="font-medium text-2xl">{student.name}{" "}</span> 
            <button className="bg-red-500 rounded-md text-white px-2 py-1 hover:bg-red-200 active:bg-red-800" onClick={() => handleRemoveClick(student.id)}>
              Remove Student
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedList;
