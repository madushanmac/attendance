// Array to store students
let students = [];

// Function to add a student
function addStudent() {
  const studentName = document.getElementById("studentName").value;
  if (studentName.trim() !== "") {
    students.push({ name: studentName, attendance: "Present" });
    renderTable();
    document.getElementById("studentName").value = ""; // Clear input field
  }
}

// Function to delete a student
function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}

// Function to edit a student's attendance
function editAttendance(index) {
  const currentAttendance = students[index].attendance;
  students[index].attendance =
    currentAttendance === "Present" ? "Absent" : "Present";
  renderTable();
}

// Function to render student table
function renderTable() {
  const studentBody = document.getElementById("studentBody");
  studentBody.innerHTML = ""; // Clear the table body

  students.forEach((student, index) => {
    const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.attendance}</td>
                <td>
                    <button class="edit-btn" onclick="editAttendance(${index})">Toggle Attendance</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    studentBody.innerHTML += row;
  });
}
