import React from "react";

const StudentDetails = ({ student, onBack }) => {
  return (
    <div className="card details-card">
      <h2 className="details-title">Student Result Details</h2>
      {student ? (
        <div className="details-content">
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Section:</strong> {student.section}
          </p>
          <p>
            <strong>Marks:</strong> {student.marks}
          </p>
          <p>
            <strong>Grade:</strong> {student.grade}
          </p>
        </div>
      ) : (
        <p>No student selected for details.</p>
      )}
      <button className="btn btn-primary" onClick={onBack}>
        ← Back to List
      </button>
    </div>
  );
};

export default StudentDetails;