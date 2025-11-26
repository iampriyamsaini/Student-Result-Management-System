import React, { useState, useMemo } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService"; 
import "./App.css";

const VIEW_MODE = {
  LIST: "list",
  ADD: "add",
  EDIT: "edit",
  DETAILS: "details",
};

function App() {
  // Main States
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState(VIEW_MODE.LIST);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // search aur sort states
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

  // loading students
  const handleLoadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
      alert("Students loaded successfully!");
    } catch (error) {
      console.error("Error loading students:", error);
      alert("Failed to load students: " + error.message);
    }
  };

  const handleSaveStudent = async (studentData) => {
    try {
      if (studentData.id) {
        await updateStudent(studentData.id, studentData);
        alert("Student updated successfully! Please click 'Load Students' to refresh.");
      } else {
        await addStudent(studentData);
        alert("Student added successfully! Please click 'Load Students' to refresh.");
      }
      setMode(VIEW_MODE.LIST);
      setSelectedStudent(null);
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Failed to save student: " + error.message);
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        alert("Student deleted successfully! Please click 'Load Students' to refresh.");
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student: " + error.message);
      }
    }
  };


  const handleEdit = (student) => {
    setSelectedStudent(student);
    setMode(VIEW_MODE.EDIT);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setMode(VIEW_MODE.DETAILS);
  };

  const handleCancelOrBack = () => {
    setSelectedStudent(null);
    setMode(VIEW_MODE.LIST);
  };


  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAndFilteredStudents = useMemo(() => {
    let sortableItems = [...filteredStudents];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === 'number' && typeof bValue === 'number' || sortConfig.key === 'marks' || sortConfig.key === 'id') {
          if (aValue < bValue) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        else {
          if (String(aValue).toLowerCase() < String(bValue).toLowerCase()) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (String(aValue).toLowerCase() > String(bValue).toLowerCase()) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredStudents, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const renderContent = () => {
    switch (mode) {
      case VIEW_MODE.LIST:
        return (
          <StudentList
            students={sortedAndFilteredStudents}
            onLoadStudents={handleLoadStudents} 
            onAddStudent={() => setMode(VIEW_MODE.ADD)}
            onEdit={handleEdit}                
            onDelete={handleDeleteStudent}    
            onViewDetails={handleViewDetails}  
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortConfig={sortConfig}
            onSort={handleSort}
          />
        );
      case VIEW_MODE.ADD:
        return (
          <StudentForm
            initialStudent={null}
            onSubmit={handleSaveStudent}
            onCancel={handleCancelOrBack}
          />
        );
      case VIEW_MODE.EDIT:
        return (
          <StudentForm
            initialStudent={selectedStudent}
            onSubmit={handleSaveStudent}
            onCancel={handleCancelOrBack}
          />
        );
      case VIEW_MODE.DETAILS:
        return (
          <StudentDetails
            student={selectedStudent}
            onBack={handleCancelOrBack}
          />
        );
      default:
        return <p>Something went wrong!</p>;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Result Management System
            
        </h1>
      </header>
      <main>{renderContent()}</main>
      <footer className="app-footer">
        <p>Made by Priyam</p>
      </footer>
    </div>
  );
}

export default App;