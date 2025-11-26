import React from "react";

const StudentList = ({
  students,
  onLoadStudents,
  onAddStudent,
  onEdit,
  onDelete,
  onViewDetails,
  searchTerm,
  onSearchChange,
  sortConfig,
  onSort,
}) => {
  // Arrow icon dikhane ke liye helper function
  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
  };

  return (
    <div className="list-container card">

      <h3 className="list-title">Manage | View | Edit | Track Student Records</h3>

      <div className="list-controls">
        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search by Name or Section..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        
        <div className="list-actions">
          {/* Load aur Add buttons */}
          <button className="btn btn-primary" onClick={onLoadStudents}>
            Load Students
          </button>
          <button className="btn btn-success" onClick={onAddStudent}>
            + Add New Student
          </button>
        </div>
      </div>

      {students.length === 0 && searchTerm === "" ? (
        <p className="no-data">
          No students data available. Click "Load Students" to fetch data.
        </p>
      ) : students.length === 0 && searchTerm !== "" ? (
        <p className="no-data">
          No results found for "{searchTerm}".
        </p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              {/* Har header par onClick event add kiya for sorting */}
              <th onClick={() => onSort('id')} className="sortable">
                ID {getSortIndicator('id')}
              </th>
              <th onClick={() => onSort('name')} className="sortable">
                Name {getSortIndicator('name')}
              </th>
              <th onClick={() => onSort('section')} className="sortable">
                Section {getSortIndicator('section')}
              </th>
              <th onClick={() => onSort('marks')} className="sortable">
                Marks {getSortIndicator('marks')}
              </th>
              <th onClick={() => onSort('grade')} className="sortable">
                Grade {getSortIndicator('grade')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.section}</td>
                <td>{student.marks}</td>
                <td>{student.grade}</td>
                <td className="action-buttons">
                  <button
                    className="btn btn-info"
                    onClick={() => onViewDetails(student)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => onEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;