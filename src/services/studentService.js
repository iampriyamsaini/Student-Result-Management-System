// const API_URL = "http://192.168.0.116:3001/students";
const API_URL = "http://localhost:3001/students";



// Saare students ko fetch karta hai (GET request)
export const getAllStudents = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }
  return response.json();
};

// Naya student add karta hai (POST request)
export const addStudent = async (studentData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });
  if (!response.ok) {
    throw new Error("Failed to add student");
  }
  return response.json();
};

// Existing student ko update karta hai (PUT request)
export const updateStudent = async (id, studentData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });
  if (!response.ok) {
    throw new Error("Failed to update student");
  }
  return response.json();
};

// Student ko delete karta hai (DELETE request)
export const deleteStudent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete student");
  }
  // DELETE request generally empty response deta hai
  return true;
};