import React from "react";
import { StudentProvider } from "./StudentContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentList from "./StudentList";
import AddedList from "./AddedList";
import Header from "./NavBar";

const App = () => {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<StudentList />} />
          <Route path="/addstd" element={<AddedList />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
};

export default App;
