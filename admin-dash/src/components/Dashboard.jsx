import { useState } from "react";
import AdminProfile from "./AdminProfile";
import HostelInfo  from "./HostelInfo";
import StudentMang from './StudentMang';
import Fees from './Fees';
import Mees from './Mees';
import Attendance from './Attendance';
import Maintenance from './Maintenance';
import Visitors from './Visitors';
import Reports from './Reports';





import {
  FaUser,
  FaBed,
  FaUsers,
  FaMoneyBill,
  FaUtensils,
  FaClipboardList,
  FaTools,
  FaUserShield,
  FaChartBar,
} from "react-icons/fa";

const sections = [
  { id: "admin", title: "Admin Profile", icon: <FaUser /> },
  { id: "hostel", title: "Hostel Info", icon: <FaBed /> },
  { id: "students", title: "Student Management", icon: <FaUsers /> },
  { id: "fees", title: "Fees & Payments", icon: <FaMoneyBill /> },
  { id: "mess", title: "Mess & Food", icon: <FaUtensils /> },
  { id: "attendance", title: "Attendance & Leaves", icon: <FaClipboardList /> },
  { id: "maintenance", title: "Maintenance & Complaints", icon: <FaTools /> },
  { id: "visitors", title: "Visitor Management", icon: <FaUserShield /> },
  { id: "reports", title: "Security Reports", icon: <FaChartBar /> },
];

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case "admin":
        return <AdminProfile />;
      case "hostel":
        return <HostelInfo />;
      case "students":
          return <StudentMang />;
      case "fees":
          return <Fees />;
      case "mess":
          return <Mees />;  
      case "attendance":
          return <Attendance />;
      case "maintenance":
          return <Maintenance />;
      case "visitors":
          return <Visitors />;
      case "reports":
          return <Reports />; 
      
      default:
        return (
          <p className="text-gray-500 text-center text-lg font-medium">
            Click on a section to view details
          </p>
        );
    }
  };

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white shadow-lg p-5 fixed md:relative h-full md:h-auto z-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🏨 Hostel Admin
        </h2>
        <ul className="mt-5 space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-all text-lg font-medium hover:bg-blue-700 ${
                activeSection === section.id ? "bg-blue-500" : ""
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="truncate">{section.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:mb-10 md:ml-4 ml-0 h-screen pb-6 md:pb-10 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

// import { useState } from "react";
// import {
//   FaUser,
//   FaBed,
//   FaUsers,
//   FaMoneyBill,
//   FaUtensils,
//   FaClipboardList,
//   FaTools,
//   FaUserShield,
//   FaChartBar,
// } from "react-icons/fa";

// const sections = [
//   {
//     id: "admin",
//     title: "Admin Profile",
//     icon: <FaUser />,
//     fields: [
//       "Admin Name",
//       "Email",
//       "Contact Number",
//       "Role",
//       "Profile Picture",
//       "Password",
//     ],
//   },
//   {
//     id: "hostel",
//     title: "Hostel Info",
//     icon: <FaBed />,
//     fields: [
//       "Hostel Name",
//       "Hostel Address",
//       "Number of Blocks",
//       "Number of Floors",
//       "Total Capacity",
//       "Available Beds",
//     ],
//   },
//   {
//     id: "students",
//     title: "Student Management",
//     icon: <FaUsers />,
//     fields: [
//       "Student Name",
//       "Student ID",
//       "Course & Year",
//       "Contact Number",
//       "Room Assigned",
//       "Fee Payment Status",
//     ],
//   },
//   {
//     id: "fees",
//     title: "Fees & Payments",
//     icon: <FaMoneyBill />,
//     fields: [
//       "Fee Amount",
//       "Due Date",
//       "Payment Status",
//       "Payment Mode",
//       "Fine/Penalty Details",
//     ],
//   },
//   {
//     id: "mess",
//     title: "Mess & Food",
//     icon: <FaUtensils />,
//     fields: ["Meal Plan", "Food Menu", "Meal Timings", "Mess Attendance"],
//   },
//   {
//     id: "attendance",
//     title: "Attendance & Leaves",
//     icon: <FaClipboardList />,
//     fields: [
//       "Daily Attendance",
//       "Leave Requests",
//       "Leave Type",
//       "Check-in & Check-out",
//     ],
//   },
//   {
//     id: "maintenance",
//     title: "Maintenance & Complaints",
//     icon: <FaTools />,
//     fields: [
//       "Complaint ID",
//       "Complaint Type",
//       "Assigned Staff",
//       "Status",
//       "Resolution Date",
//     ],
//   },
//   {
//     id: "visitors",
//     title: "Visitor Management",
//     icon: <FaUserShield />,
//     fields: [
//       "Visitor Name",
//       "Relationship",
//       "Visit Date",
//       "Purpose of Visit",
//       "Exit Time",
//     ],
//   },
//   {
//     id: "reports",
//     title: "Security Reports",
//     icon: <FaChartBar />,
//     fields: [
//       "Fire Safety",
//       "Emergency Contacts",
//       "Evacuation Plans",
//       "Security Alerts",
//     ],
//   },
// ];

// export default function Dashboard() {
//   const [activeSection, setActiveSection] = useState(null);

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-gray-300 shadow-md p-5">
//         <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//           🏨 Hostel Admin
//         </h2>
//         <ul className="mt-5 space-y-2">
//           {sections.map((section) => (
//             <li
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer transition-all text-lg font-medium ${
//                 activeSection === section.id
//                   ? "bg-blue-500 text-white shadow-md"
//                   : "text-gray-700 hover:bg-blue-100"
//               }`}
//             >
//               <span className="text-xl">{section.icon}</span>
//               <span className="truncate">{section.title}</span>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {activeSection ? (
//           <div className="bg-white p-6 rounded-lg shadow-md ">
//             <h2 className="text-2xl font-semibold text-gray-800 flex flex-col justify-start items-start">
//               {sections.find((s) => s.id === activeSection)?.title}
//             </h2>
//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {sections
//                 .find((s) => s.id === activeSection)
//                 ?.fields.map((field, index) => (
//                   <div key={index}>
//                     <label className="block text-gray-700 font-medium">
//                       {field}
//                     </label>
//                     <input
//                       type="text"
//                       placeholder={`Enter ${field}`}
//                       className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">
//             Click on a section to view details
//           </p>
//         )}
//       </main>
//     </div>
//   );
// }

// import { useState } from "react";
// import  AdminProfile  from "./AdminProfile";
// import  HostelInfo  from "./HostelInfo";

// import {
//   FaUser,
//   FaBed,
//   FaUsers,
//   FaMoneyBill,
//   FaUtensils,
//   FaClipboardList,
//   FaTools,
//   FaUserShield,
//   FaChartBar,
// } from "react-icons/fa";

// export default function Dashboard() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [adminData, setAdminData] = useState(sections.find(s => s.id === "admin").dummyData);

//   const handleInputChange = (field, value) => {
//     setAdminData((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-gray-300 shadow-md p-5">
//         <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//           🏨 Hostel Admin
//         </h2>
//         <ul className="mt-5 space-y-2">
//           {sections.map((section) => (
//             <li
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer transition-all text-lg font-medium ${
//                 activeSection === section.id
//                   ? "bg-blue-500 text-white shadow-md"
//                   : "text-gray-700 hover:bg-blue-100"
//               }`}
//             >
//               <span className="text-xl">{section.icon}</span>
//               <span className="truncate">{section.title}</span>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}

//     </div>
//   );
// }

// <main className="flex-1 p-6">
//         {activeSection ? (
//           <div className="bg-white p-6 rounded-lg shadow-md ">
//             <h2 className="text-2xl font-semibold text-gray-800">
//               {sections.find((s) => s.id === activeSection)?.title}
//             </h2>
//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {sections.find((s) => s.id === activeSection)?.fields.map((field, index) => (
//                 <div key={index}>
//                   <label className="block text-gray-700 font-medium">
//                     {field}
//                   </label>
//                   <input
//                     type="text"
//                     value={activeSection === "admin" ? adminData[field] || "" : ""}
//                     placeholder={activeSection === "admin" ? "" : `Enter ${field}`}
//                     onChange={(e) =>
//                       activeSection === "admin" && handleInputChange(field, e.target.value)
//                     }
//                     className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">
//             Click on a section to view details
//           </p>
//         )}
//       </main>

// const sections = [
//     {
//       id: "admin",
//       title: "Admin Profile",
//       icon: <FaUser />,
//       fields: [
//         "Admin Name",
//         "Email",
//         "Contact Number",
//         "Role",
//         "Profile Picture",
//         "Password",
//       ],
//       dummyData: {
//         "Admin Name": "John Doe",
//         Email: "admin@example.com",
//         "Contact Number": "1234567890",
//         Role: "Super Admin",
//         "Profile Picture": "",
//         Password: "********",
//       },
//     },
//     {
//       id: "hostel",
//       title: "Hostel Info",
//       icon: <FaBed />,
//       fields: [
//         "Hostel Name",
//         "Hostel Address",
//         "Number of Blocks",
//         "Number of Floors",
//         "Total Capacity",
//         "Available Beds",
//       ],
//     },
//     {
//       id: "students",
//       title: "Student Management",
//       icon: <FaUsers />,
//       fields: [
//         "Student Name",
//         "Student ID",
//         "Course & Year",
//         "Contact Number",
//         "Room Assigned",
//         "Fee Payment Status",
//       ],
//     },
//     {
//       id: "fees",
//       title: "Fees & Payments",
//       icon: <FaMoneyBill />,
//       fields: [
//         "Fee Amount",
//         "Due Date",
//         "Payment Status",
//         "Payment Mode",
//         "Fine/Penalty Details",
//       ],
//     },
//     {
//       id: "mess",
//       title: "Mess & Food",
//       icon: <FaUtensils />,
//       fields: ["Meal Plan", "Food Menu", "Meal Timings", "Mess Attendance"],
//     },
//     {
//       id: "attendance",
//       title: "Attendance & Leaves",
//       icon: <FaClipboardList />,
//       fields: [
//         "Daily Attendance",
//         "Leave Requests",
//         "Leave Type",
//         "Check-in & Check-out",
//       ],
//     },
//     {
//       id: "maintenance",
//       title: "Maintenance & Complaints",
//       icon: <FaTools />,
//       fields: [
//         "Complaint ID",
//         "Complaint Type",
//         "Assigned Staff",
//         "Status",
//         "Resolution Date",
//       ],
//     },
//     {
//       id: "visitors",
//       title: "Visitor Management",
//       icon: <FaUserShield />,
//       fields: [
//         "Visitor Name",
//         "Relationship",
//         "Visit Date",
//         "Purpose of Visit",
//         "Exit Time",
//       ],
//     },
//     {
//       id: "reports",
//       title: "Security Reports",
//       icon: <FaChartBar />,
//       fields: [
//         "Fire Safety",
//         "Emergency Contacts",
//         "Evacuation Plans",
//         "Security Alerts",
//       ],
//     },
//   ];

// import { useState } from "react";
// import AdminProfile from "./AdminProfile";
// import { HostelInfo } from "./HostelInfo";

// import {
//   FaUser,
//   FaBed,
//   FaUsers,
//   FaMoneyBill,
//   FaUtensils,
//   FaClipboardList,
//   FaTools,
//   FaUserShield,
//   FaChartBar,
// } from "react-icons/fa";

// const sections = [
//   { id: "admin", title: "Admin Profile", icon: <FaUser /> },
//   { id: "hostel", title: "Hostel Info", icon: <FaBed /> },
//   { id: "students", title: "Student Management", icon: <FaUsers /> },
//   { id: "fees", title: "Fees & Payments", icon: <FaMoneyBill /> },
//   { id: "mess", title: "Mess & Food", icon: <FaUtensils /> },
//   { id: "attendance", title: "Attendance & Leaves", icon: <FaClipboardList /> },
//   { id: "maintenance", title: "Maintenance & Complaints", icon: <FaTools /> },
//   { id: "visitors", title: "Visitor Management", icon: <FaUserShield /> },
//   { id: "reports", title: "Security Reports", icon: <FaChartBar /> },
// ];

// export default function Dashboard() {
//   const [activeSection, setActiveSection] = useState(null);

//   const renderContent = () => {
//     switch (activeSection) {
//       case "admin":
//         return <AdminProfile />;
//       case "hostel":
//         return <HostelInfo />;
//       default:
//         return (
//           <p className="text-gray-500 text-center">
//             Click on a section to view details
//           </p>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-gray-300 shadow-md p-5">
//         <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//           🏨 Hostel Admin
//         </h2>
//         <ul className="mt-5 space-y-2">
//           {sections.map((section) => (
//             <li
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer transition-all text-lg font-medium ${
//                 activeSection === section.id
//                   ? "bg-blue-500 text-white shadow-md"
//                   : "text-gray-700 hover:bg-blue-100"
//               }`}
//             >
//               <span className="text-xl">{section.icon}</span>
//               <span className="truncate">{section.title}</span>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">{renderContent()}</main>
//     </div>
//   );
// }

// import { useState } from "react";
// import AdminProfile from "./AdminProfile";
// import { HostelInfo } from "./HostelInfo";

// import {
//   FaUser,
//   FaBed,
//   FaUsers,
//   FaMoneyBill,
//   FaUtensils,
//   FaClipboardList,
//   FaTools,
//   FaUserShield,
//   FaChartBar,
// } from "react-icons/fa";

// const sections = [
//   { id: "admin", title: "Admin Profile", icon: <FaUser /> },
//   { id: "hostel", title: "Hostel Info", icon: <FaBed /> },
//   { id: "students", title: "Student Management", icon: <FaUsers /> },
//   { id: "fees", title: "Fees & Payments", icon: <FaMoneyBill /> },
//   { id: "mess", title: "Mess & Food", icon: <FaUtensils /> },
//   { id: "attendance", title: "Attendance & Leaves", icon: <FaClipboardList /> },
//   { id: "maintenance", title: "Maintenance & Complaints", icon: <FaTools /> },
//   { id: "visitors", title: "Visitor Management", icon: <FaUserShield /> },
//   { id: "reports", title: "Security Reports", icon: <FaChartBar /> },
// ];

// export default function Dashboard() {
//   const [activeSection, setActiveSection] = useState(null);

//   const renderContent = () => {
//     switch (activeSection) {
//       case "admin":
//         return <AdminProfile />;
//       case "hostel":
//         return <HostelInfo />;
//       default:
//         return (
//           <p className="text-gray-500 text-center text-lg font-medium">
//             Click on a section to view details
//           </p>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-blue-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-blue-900 text-white shadow-lg p-5 md:h-screen fixed md:relative z-10">
//         <h2 className="text-2xl font-semibold flex items-center gap-2">
//           🏨 Hostel Admin
//         </h2>
//         <ul className="mt-5 space-y-2">
//           {sections.map((section) => (
//             <li
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-all text-lg font-medium hover:bg-blue-700 ${
//                 activeSection === section.id ? "bg-blue-500" : ""
//               }`}
//             >
//               <span className="text-xl">{section.icon}</span>
//               <span className="truncate">{section.title}</span>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 ml-0 md:ml-64 mt-16 md:mt-0">
//         {renderContent()}
//       </main>
//     </div>
//   );
// }
