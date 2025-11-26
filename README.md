# 🧑‍🎓 Student Result Management App (React + JSON Server CRUD)

This project is a beginner-friendly **Student Result Management System** built with **React** that demonstrates **C**reate, **R**ead, **U**pdate, and **D**elete (**CRUD**) operations. It uses the `useState` hook for state management and the native Fetch API to communicate with a mock backend provided by **JSON Server**.

---

## 🚀 Key Technologies

* **Frontend:** React (functional components, `useState` hook)
* **Backend:** JSON Server (for mock REST API)
* **Data Handling:** Fetch API (for all CRUD operations)
* **Styling:** Pure CSS (`App.css`)

---

## ✨ Features Implemented

The application covers the core requirements of a CRUD system:

* **View Students (Read):** Displays a list of all student records in a table.
    * *Note: Data fetching is initiated manually via a **"Load Students"** button.*
* **Add Student (Create):** A form component (`StudentForm`) to input and save new student data to the server.
* **Edit Student (Update):** Allows selecting a student from the list to load their data into the `StudentForm` for modification.
* **Delete Student (Delete):** Provides a button to remove a student record from the server.
* **View Details:** Shows the complete, read-only information for a selected student.

### 🌟 Bonus Features

To enhance the application and practice advanced React concepts, the following features have also been included:

* **Search/Filter:** Allows searching students by **Name** or **Section**.
* **Sorting:** Students can be sorted **Ascending** or **Descending** by **ID, Name, Section, Marks, or Grade** by clicking the table headers.
* **Mode Management:** The `App.jsx` dynamically switches between **List, Add, Edit, and Details** views using a central state variable (`mode`).

---

## 🛠️ Installation and Setup

Follow these steps to get the project up and running on your local machine.

### 1. Backend Setup (JSON Server)

You need to run JSON Server to create the mock API that stores student data.

1.  **Install JSON Server globally** (if you haven't already):
    ```bash
    npm install -g json-server
    # OR
    yarn global add json-server
    ```

2.  **Run the mock API** from the root `student-result-app/` directory:
    ```bash
    json-server --watch db.json --port 3001
    ```
    *(The `--port 3001` flag ensures it doesn't conflict with the React app on port 3000)*

    The server will now be running at `http://localhost:3001/students`.

### 2. Frontend Setup (React App)

1.  **Navigate to the project directory** and install dependencies:
    ```bash
    cd student-result-app
    npm install
    # OR
    yarn install
    ```

2.  **Start the React application:**
    ```bash
    npm start
    # OR
    yarn start
    ```

The application should open in your browser, typically at `http://localhost:3000`.

---

## 📂 Project Structure

| File/Folder | Description |
| :--- | :--- |
| `db.json` | The JSON Server database file where all student data is persisted. |
| `src/App.jsx` | Main component: Manages global state (students, mode), handles view switching, and contains all core CRUD logic/handlers. |
| `src/services/studentService.js` | Contains all asynchronous `fetch` functions (`GET`, `POST`, `PUT`, `DELETE`) for API communication. |
| `src/components/StudentList.jsx` | Displays the filterable and sortable list/table of students and all action buttons (Load, Add, Edit, Delete, View). |
| `src/components/StudentForm.jsx` | Used for both adding new students and editing existing ones. Manages its own form state with `useState`. |
| `src/components/StudentDetails.jsx` | A simple, read-only view to display a single student's complete information. |
| `src/App.css` | All styling for the application. |

---

## 🎯 Key Concepts Learned

✔ Component-based UI
✔ useState for managing state
✔ Fetch API for CRUD
✔ JSON Server as mock backend
✔ Searching & Sorting
✔ Conditional rendering for screen switching

---

## 🧑‍💻 Author
    Priyam Saini

Priyam Saini
📌 B.Tech C.S.E(AIML & IoT) Student

