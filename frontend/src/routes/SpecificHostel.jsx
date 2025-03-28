import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoIosArrowRoundBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { amentiesList, roomTypesList } from "../utils/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import UserFeedBackCard from "../components/UserFeedBackCard";
import HostelReviewCard from "../components/HostelReviewCard";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
const SpecificHostel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [hostelInfo, setHostelInfo] = useState("");
  const { id } = useParams();
  const hostelRoomSliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  const modalSettings = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const hostelReviewSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: false,
  };
  useEffect(() => {
    getHostelInfo();
  }, []);

  const getHostelInfo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/hostel/${id}`);
      if (response.ok) {
        const { hostel_info } = await response.json();
        const updatedHostelInfo = {
          id: hostel_info._id,
          hostelName: hostel_info.hostel_name,
          hostelImageUrl: hostel_info.hostel_image_url,
          category: hostel_info.hostel_category,
          address: hostel_info.hostel_address,
          roomInfo: hostel_info.room_details.map((eachRoom) => {
            return {
              id: eachRoom._id,
              roomType: eachRoom.room_type,
              roomPrice: eachRoom.room_rent,
              vacancies: eachRoom.vacancies,
              roomImages: eachRoom.room_imgs,
            };
          }),
          amenties: hostel_info.amenities,
          ownerName: hostel_info.owner_name,
          contactNo: hostel_info.contact_no,
        };
        setHostelInfo(updatedHostelInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleChatNow = (mobileNumber) => {
    const prefilledMessage =
      "Hi, I am interested in your PG. Please provide more details.";
    const whatsappUrl = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(
      prefilledMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  if (hostelInfo === "") {
    return <Loader />;
  }
  const {
    hostelName,
    address,
    ownerName,
    category,
    contactNo,
    hostelImageUrl,
    roomInfo,
  } = hostelInfo;
  const { street, city, state } = address;
  return (
    <main className="px-6 sm:px-10 md:px-32 py-8 min-h-screen md:min-h-[95vh] bg-gray-100">
      <Link
        to="/hostel-listings"
        className="items-center gap-x-1.5 my-4 inline-flex"
      >
        <IoIosArrowRoundBack className="text-xl" />
        <span className="text-sm">Back</span>
      </Link>

      <section className="bg-white rounded-md px-4 py-8 mb-8">
        {/*Left Side Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="font-semibold text-2xl mb-2">{hostelName}</h1>
              <div className="flex items-center gap-x-0.5 mb-6">
                <MdLocationPin className="text-red-700" />
                <p className="text-gray-600 italic text-sm">{street}</p>
              </div>
              <div className="flex items-center gap-x-2 mb-3">
                <FaStar className="text-yellow-400" />
                <p className="text-gray-600 font-semibold text-md">
                  4.3 ratings
                </p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                🤵
                <p className="font-semibold text-gray-800 text-md">
                  {ownerName}
                </p>
              </div>
              <div className="flex items-center gap-x-2 mb-3">
                <FaPhoneAlt className="text-sm text-blue-400" />
                <p className="font-semibold text-gray-800 text-sm">
                  {contactNo}
                </p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                {category === "Boys" ? "🙍" : "🙍‍♀️"}
                <p className="font-semibold text-red-600 text-md">
                  Only for {category}
                </p>
              </div>
            </div>
            <button
              className="self-start bg-gray-800 text-white px-5 py-1.5  border border-gray-800 cursor-pointer rounded-sm flex items-center gap-x-2 text-sm"
              onClick={() => onHandleChatNow(contactNo)}
            >
              <IoLogoWhatsapp className="text-lg" />
              Chat now
            </button>
          </div>
          {/*Right Side Section */}
          <div className="w-full md:w-1/2">
            <img
              src={hostelImageUrl}
              alt={hostelName}
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
        <hr className="my-6 border-t-1 border-gray-200" />
        <h3 className="font-semibold text-md mb-4">Amenties</h3>
        <ul className="px-0 flex flex-wrap gap-y-4">
          {amentiesList.map((eachAmenty) => (
            <li
              className="flex items-center text-md font-semibold w-1/2"
              key={eachAmenty.id}
            >
              <p>{eachAmenty.amentiesType}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-white rounded-md px-4 py-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-xl">Available Rooms</h3>
          <div className="flex items-center gap-x-6">
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`items-center gap-x-2 text-sm py-1 border border-gray-300 rounded-full px-4 flex justify-center cursor-pointer ${
                isAvailable ? "bg-gray-600 text-white" : "bg-white"
              }`}
            >
              Available {isAvailable ? <IoClose /> : ""}
            </button>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {roomInfo.map((eachRoomInfo) => (
            <li
              key={eachRoomInfo.id}
              className="rounded-md shadow-md p-4 relative"
            >
              <Slider {...hostelRoomSliderSettings}>
                {eachRoomInfo.roomImages.map((eachImage, index) => (
                  <img
                    src={eachImage}
                    key={index}
                    className="w-full h-50 object-cover"
                  />
                ))}
              </Slider>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold text-md mb-2 ${
                      eachRoomInfo.vacancies > 0
                        ? "text-green-500"
                        : "text-red-700"
                    }`}
                  >
                    {eachRoomInfo.vacancies > 0 ? "Available" : "Booked"}
                  </h3>
                  <h3 className="font-semibold text-lg">
                    ₹{eachRoomInfo.roomPrice}/-
                  </h3>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">
                    {eachRoomInfo.roomType} Sharing
                  </p>
                  {!eachRoomInfo.vacancies <= 0 && (
                    <div className="bg-red-400 text-white px-2 py-1.5 rounded-sm shadow-md inline-block absolute bottom-[90%] right-[5%]">
                      <p className="text-[14px] font-semibold text-white">
                        Only {eachRoomInfo.vacancies} Left
                      </p>
                    </div>
                  )}
                </div>
                <button
                  disabled={eachRoomInfo.roomStatus !== "Available"}
                  className={`text-xs px-4 py-1.5 rounded-sm ${
                    eachRoomInfo.vacancies > 0
                      ? "bg-black text-white cursor-pointer"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col md:flex-row md:justify-between gap-y-6">
        <div className="w-full md:w-[35%] bg-white rounded-md  px-4 py-8 mb-8 ">
          <h3 className="font-semibold text-xl mb-4">Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.9248930140526!2d78.39526994633104!3d17.48676834742196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918df14cb897%3A0x3e5fe4685cd52175!2sKphb%20Temple%20Busstop!5e1!3m2!1sen!2sin!4v1741596668424!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-[60%] bg-white rounded-md  px-4 py-8 mb-8 ">
          <h3 className="font-semibold text-xl mb-4">People Say about Us</h3>
          <div>
            <Slider {...hostelReviewSliderSettings} className="bg-white">
              <HostelReviewCard />
              <HostelReviewCard />
              <HostelReviewCard />
              <HostelReviewCard />
            </Slider>
          </div>
          <h3 className="font-semibold text-md mt-4 italic text-gray-600 mb-4">
            Be the First One to Review
          </h3>
          <button className="bg-gray-600 px-4 py-1.5 text-xs text-white rounded-sm cursor-pointer">
            Review
          </button>
        </div>
      </section>
    </main>
  );
};

export default SpecificHostel;
