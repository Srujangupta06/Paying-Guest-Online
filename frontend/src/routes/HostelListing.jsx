import React, { useEffect } from "react";
import HostelSearchBar from "./HostelSearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pgListings } from "../utils/utils";
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

  if (hostels.length === 0) return <h1>Loading...</h1>;

  return (
    <div>
      <HostelSearchBar
        onFilterChange={handleFilterChange}
        onVerifiedClick={handleVerifiedClick}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={handlePriceRangeChange}
        isVerified={isVerified}
      />
      <div className="p-4 sm:p-6 md:p-8 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPGs.map((pg) => (
            <div
              key={pg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] group"
            >
              <img
                loading="lazy"
                src={pg.hostelImageUrl}
                alt={pg.hostelName}
                className="w-full h-44 sm:h-52 object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-md ${
                      pg.category === "Girls"
                        ? "bg-pink-200 text-pink-700"
                        : "bg-blue-200 text-blue-700"
                    }`}
                  >
                    {pg.category}
                  </span>
                </div>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-800 truncate">
                  {pg.hostelName}
                </h3>
                <p className="text-sm text-gray-600">{pg.address?.street}</p>

                <p className="mt-2 text-sm">
                  starts at
                  <span className="ml-2 text-base sm:text-lg font-semibold text-gray-900">
                    ₹{pg.startingPrice}/-
                  </span>
                </p>
                <p>
                  ratings <span className="font-bold">3</span>
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/hostel-listings/${pg.id}`)}
                    className="w-full px-4 py-2 text-sm sm:text-base bg-gray-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
