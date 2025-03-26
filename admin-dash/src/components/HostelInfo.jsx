import React from "react";

const hostelData = {
  totalStudents: 120,
  maxCapacity: 150,
  vacantRooms: 10,
  occupiedRooms: 40,
  pendingPayments: 15,
};

const sections = [
  {
    title: "Total Students",
    value: `${hostelData.totalStudents} / ${hostelData.maxCapacity}`,
    icon: "🎓",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Vacant Rooms",
    value: hostelData.vacantRooms,
    icon: "🏡",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Occupied Rooms",
    value: hostelData.occupiedRooms,
    icon: "🛏️",
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Pending Payments",
    value: hostelData.pendingPayments,
    icon: "💰",
    color: "bg-red-100 text-red-700",
  },
];

const HostelInfo = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">🏠 Hostel Overview</h1>
      <p className="text-gray-600">Latest hostel status at a glance.</p>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`p-5 ${item.color} rounded-lg shadow-md flex flex-col items-center gap-2 
                        transition-all transform hover:scale-105 hover:shadow-lg`}
          >
            <span className="text-3xl">{item.icon}</span>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Hostel Room Status */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">🏢 Room Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-blue-600">🏠</span>
            <h3 className="text-lg font-semibold">Total Rooms</h3>
          </div>
          <p className="text-gray-600 mt-1">50 Rooms Available</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-green-600">🛏️</span>
            <h3 className="text-lg font-semibold">Vacant Beds</h3>
          </div>
          <p className="text-gray-600 mt-1">20 Beds Free</p>
        </div>
      </div>

      {/* Payments */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">💳 Payments & Dues</h2>
      <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Pending Payments</h3>
          <span className="text-red-600 font-bold">15 Students</span>
        </div>
        <p className="text-gray-600 mt-1">Total Dues: ₹30,000</p>
      </div>

      {/* Notices & Announcements */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">📢 Notices & Announcements</h2>
      <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all mt-4">
        <p className="text-gray-600">⚠️ Fire Drill on 10th March at 10 AM</p>
        <p className="text-gray-600">📅 Mess will be closed on Sunday</p>
      </div>
    </div>
  );
};

export default HostelInfo;
