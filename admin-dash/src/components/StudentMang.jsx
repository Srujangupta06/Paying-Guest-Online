import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaFileDownload } from "react-icons/fa";

const StudentMang = () => {
  const [students, setStudents] = useState([]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    phone: "",
    room: "",
    paymentStatus: "",
  });

  const handleAddStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.phone || !newStudent.room || !newStudent.paymentStatus) {
      alert("Please fill all fields before adding a student.");
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ id: "", name: "", phone: "", room: "", paymentStatus: "" });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">🏠 Student Management</h1>
      </div>

      {/* Add Student Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold">➕ Add New Student</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <input
            type="text"
            placeholder="ID"
            className="border p-2 rounded"
            value={newStudent.id}
            onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded"
            value={newStudent.phone}
            onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Room Number"
            className="border p-2 rounded"
            value={newStudent.room}
            onChange={(e) => setNewStudent({ ...newStudent, room: e.target.value })}
          />
          <select
            className="border p-2 rounded"
            value={newStudent.paymentStatus}
            onChange={(e) => setNewStudent({ ...newStudent, paymentStatus: e.target.value })}
          >
            <option value="">Select Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
            onClick={handleAddStudent}
          >
            <FaPlus className="inline mr-2" /> Add Student
          </button>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">📋 Student List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Room</th>
              <th className="border p-2">Fee Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border p-2">{student.id}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.phone}</td>
                <td className="border p-2">{student.room}</td>
                <td className={`border p-2 ${student.paymentStatus === "Paid" ? "text-green-600" : "text-red-600"}`}>
                  {student.paymentStatus}
                </td>
                <td className="border p-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteStudent(student.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentMang;
