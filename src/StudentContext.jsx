import React, { createContext, useState } from "react";

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const initialStudents = [
    { id: 1, name: "Pavi" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Jhon" },
    { id: 4, name: "Babu" },
    { id: 5, name: "Nivi" },
  ];

  const [students] = useState(initialStudents);
  const [addstudents, setAddStudents] = useState([]);

  const handleAddClick = (student) => {
    setAddStudents([...addstudents, student]);
  };

  const handleRemoveClick = (studentId) => {
    setAddStudents(addstudents.filter((student) => student.id !== studentId));
  };

  return (
    <StudentContext.Provider
      value={{ students, addstudents, handleAddClick, handleRemoveClick }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
