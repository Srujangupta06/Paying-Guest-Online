import React, { useEffect } from "react";
import HostelSearchBar from "./HostelSearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pgListings } from "../utils/utils";
import Loader from "../components/Loader";
import { IoStarSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CgGirl, CgBoy } from "react-icons/cg";
const HostelListing = () => {
  const [filteredPGs, setFilteredPGs] = useState(pgListings);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [hostels, setHostels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHostels();
  }, []);

  const getHostels = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getHostels");

      if (response.ok) {
        const data = await response.json();
        const updatedData = data.data.map((eachHostel) => {
          return {
            id: eachHostel._id,
            hostelName: eachHostel.hostel_name,
            hostelImageUrl: eachHostel.hostel_image_url,
            category: eachHostel.hostel_category,
            address: eachHostel.hostel_address,
            startingPrice: eachHostel.starting_price,
          };
        });
        setHostels(updatedData);
        setFilteredPGs(updatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (type, ac) => {
    let filteredData = pgListings;

    if (type !== "All") {
      filteredData = filteredData.filter((pg) => pg.type === type);
    }

    if (ac !== "All") {
      filteredData = filteredData.filter((pg) =>
        ac === "AC" ? pg.ac === true : pg.ac === false
      );
    }

    if (isVerified) {
      filteredData = filteredData.filter((pg) => pg.verified);
    }

    if (selectedPriceRange !== "All") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filteredData = filteredData.filter(
        (pg) => pg.price >= min && pg.price <= max
      );
    }

    setFilteredPGs(filteredData);
  };

  const handleVerifiedClick = () => {
    setIsVerified((prev) => !prev);
    handleFilterChange("All", "All");
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    handleFilterChange("All", "All");
  };

  return (
    <div>
      {/* <HostelSearchBar
        onFilterChange={handleFilterChange}
        onVerifiedClick={handleVerifiedClick}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={handlePriceRangeChange}
        isVerified={isVerified}
      /> */}

      <div className="px-6 sm:px-32 bg-gray-100 min-h-screen md:min-h-[95vh] py-8">
        <h1 className="text-3xl font-bold my-4 text-gray-800">
          Let's Find Your PG
        </h1>
        <p className="text-lg text-gray-600">
          Discover the best PGs & hostels with comfort, security, and
          affordability.
        </p>
        {/*Filters Section */}
        <div className="my-8 flex flex-wrap gap-y-4 items-center justify-between">
          <div className="border border-gray-400 w-full md:w-[25%] px-2 py-1.5  rounded-sm  flex items-center justify-between">
            <input
              type="search"
              placeholder="location"
              className="outline-none text-gray-700"
            />
            <IoIosSearch className="text-gray-600" />
          </div>
          <div className="flex gap-x-4">
            <select className="border border-gray-700 text-gray-600 text-sm md:text-[14px] px-6 py-1 rounded-full cursor-pointer outline-none">
              <option>All</option>
              <option>Boys</option>
              <option>Girls</option>
            </select>
            <button className="italic cursor-pointer border border-gray-700  text-sm md:text-[14px] px-6 py-1  text-gray-600 rounded-full">
              Non-A.C
            </button>
            <button className="italic cursor-pointer border border-gray-700  text-sm md:text-[14px] px-6 py-1  text-gray-600 rounded-full">
              Most Popular
            </button>
          </div>
        </div>

        {hostels.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPGs.map((pg) => (
              <div
                key={pg.id}
                className="relative bg-white rounded-md shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] group"
              >
                <img
                  loading="lazy"
                  src={pg.hostelImageUrl}
                  alt={pg.hostelName}
                  className="w-full h-44 sm:h-52 object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="px-2 py-2">
                  <div className="flex flex-wrap items-center gap-2 absolute bottom-[90%] right-[10%]">
                    <span
                      className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-md flex items-center gap-x-1 ${
                        pg.category === "Girls"
                          ? "bg-pink-200 text-pink-700"
                          : "bg-blue-200 text-blue-700"
                      }`}
                    >
                      {pg.category}{" "}
                      {pg.category === "Girls" ? <CgGirl className="text-lg"/> : <CgBoy className="text-lg"/>}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                    {pg.hostelName}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs mt-1 text-gray-600">
                      {pg.address?.street}
                    </p>
                    <div className="flex items-center justify-center gap-x-1 bg-amber-400 px-1 py-0.5 rounded-[4px]">
                      <p className="text-sm text-white">{3}</p>
                      <IoStarSharp className="text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm italic text-gray-700">
                      monthly rent starts (min)
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-gray-900 ">
                      ₹{pg.startingPrice}/-
                    </span>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => navigate(`/hostel-listings/${pg.id}`)}
                      className="w-full px-4 py-1.5 text-sm  bg-gray-500 text-white font-medium rounded-sm transition-all duration-300 hover:bg-gray-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {filteredPGs.length === 0 && (
          <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
            No PGs match your filter criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default HostelListing;
