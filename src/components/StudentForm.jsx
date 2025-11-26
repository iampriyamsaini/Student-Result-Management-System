import React, { useState, useEffect } from "react";

// initialStudent: agar edit mode hai to existing student data hoga
const StudentForm = ({ initialStudent, onSubmit, onCancel }) => {
  // Form ke har input field ke liye alag state
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  // Jab component mount hota hai ya initialStudent change hota hai (edit mode ke liye)
  useEffect(() => {
    if (initialStudent) {
      setName(initialStudent.name || "");
      setSection(initialStudent.section || "");
      setMarks(initialStudent.marks || "");
      setGrade(initialStudent.grade || "");
    } else {
      // Agar Add mode hai to form ko clear kar do
      setName("");
      setSection("");
      setMarks("");
      setGrade("");
    }
  }, [initialStudent]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Default form submission ko rokta hai

    // Naya/Updated student object
    const studentData = {
      name,
      section,
      marks: parseInt(marks), // Marks ko number mein convert karte hain
      grade,
    };

    // Agar Edit mode hai, toh id bhi include karni hogi
    if (initialStudent && initialStudent.id) {
      studentData.id = initialStudent.id;
    }

    // Is data ko App.jsx ko bhej do
    onSubmit(studentData);
  };

  return (
    <div className="form-container card">
      <h2 className="form-title">
        {initialStudent ? "Edit Student Result" : "Add New Student"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="marks">Marks:</label>
          <input
            type="number"
            id="marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            min="0"
            max="100"
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            {initialStudent ? "Save Changes" : "Add Student"}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;