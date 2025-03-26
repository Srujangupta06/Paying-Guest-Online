import React from "react";
import HostelSearchBar from "./HostelSearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pgListings } from "../utils/utils";
const HostelListing = () => {
  const [filteredPGs, setFilteredPGs] = useState(pgListings);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const navigate = useNavigate();
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
                src={pg.image}
                alt={pg.name}
                className="w-full h-44 sm:h-52 object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-md ${
                      pg.type === "Girls"
                        ? "bg-pink-200 text-pink-700"
                        : "bg-blue-200 text-blue-700"
                    }`}
                  >
                    {pg.type}
                  </span>
                  {pg.verified && (
                    <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-green-200 text-green-700 rounded-md">
                      PGO Verified
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-800 truncate">
                  {pg.name}
                </h3>
                <p className="text-sm text-gray-600">{pg.location}</p>
                <p className="mt-1 text-xs sm:text-sm text-gray-700 font-medium">
                  {pg.distance}
                </p>
                <p className="mt-2 text-base sm:text-lg font-semibold text-gray-900">
                  {pg.price}
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
