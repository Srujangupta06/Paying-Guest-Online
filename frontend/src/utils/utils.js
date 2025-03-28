import { v4 as uuidv4 } from "uuid";
import { FaWifi } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { MdElevator } from "react-icons/md";
import { GiWaterBottle } from "react-icons/gi";

export const faqList = [
  {
    id: uuidv4(),
    question: "How do I book?",
    answer:
      "To book a PG, simply search for your desired location. Compare options based on amenities and pricing, then proceed to secure your booking online.",
  },
  {
    id: uuidv4(),
    question: "What payment methods?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and digital wallets. All transactions are processed securely to ensure your safety.",
  },
  {
    id: uuidv4(),
    question: "Is my payment secure?",
    answer:
      "Absolutely! We use advanced encryption technology to protect your payment information. Your security is our top priority.",
  },

  {
    id: uuidv4(),
    question: "Contact hostel owners?",
    answer:
      "You can easily contact hostel owners through our platform. Use the WhatsApp chat feature for instant communication.",
  },
];

export const amentiesList = [
  {
    id: uuidv4(),
    amentiesType: "Wi-fi",
    icon: FaWifi,
  },
  {
    id: uuidv4(),
    amentiesType: "Bike - Parking",
    icon: RiMotorbikeFill,
  },
  {
    id: uuidv4(),
    amentiesType: "24/7 Security Cameras",
    icon: GiCctvCamera,
  },
  {
    id: uuidv4(),
    amentiesType: "Washing Machine",
    icon: GiWashingMachine,
  },
  // {
  //   id: uuidv4(),
  //   amentiesType: "Hot Water",
  //   icon: MdWaterHeater,
  // },
  {
    id: uuidv4(),
    amentiesType: "Lift",
    icon: MdElevator,
  },
  {
    id: uuidv4(),
    amentiesType: "Mineral Water",
    icon: GiWaterBottle,
  },
];

export const roomTypesList = [
  {
    id: uuidv4(),
    roomType: "Single-Sharing",
    roomStatus: "Available",
    pricePerMonth: 8000,
    pricePerDay: 500,
    maxOccupancy: 1,
    facilities: ["Bed", "Table", "Chair", "Cupboard", "Fan"],
    isAC: true,
    isAttachedBathroom: true,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
  {
    id: uuidv4(),
    roomType: "Double-Sharing",
    roomStatus: "Occupied",
    pricePerMonth: 6000,
    pricePerDay: 400,
    maxOccupancy: 2,
    facilities: ["Bed", "Table", "Cupboard", "Fan"],
    isAC: false,
    isAttachedBathroom: false,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
  {
    id: uuidv4(),
    roomType: "Triple-Sharing",
    roomStatus: "Available",
    pricePerMonth: 5000,
    pricePerDay: 350,
    maxOccupancy: 3,
    facilities: ["Bed", "Cupboard", "Fan"],
    isAC: false,
    isAttachedBathroom: false,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
  {
    id: uuidv4(),
    roomType: "Luxury Suite",
    roomStatus: "Available",
    pricePerMonth: 15000,
    pricePerDay: 1000,
    maxOccupancy: 2,
    facilities: [
      "Bed",
      "Table",
      "Chair",
      "Cupboard",
      "AC",
      "TV",
      "Mini Fridge",
    ],
    isAC: true,
    isAttachedBathroom: true,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
];

export const pgListings = [
  {
    id: 1,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Sandhya Luxury Womens Pg",
    location: "Madhura Nagar, Gachibowli, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "12.03 KMS",
    price: "₹7000/Month",
    priceRange: "₹5000 - ₹8000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "./first.jpg",
  },
  {
    id: 2,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Srinivasa Luxury Womens Pg",
    location: "Kondapur, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "10.45 KMS",
    price: "₹6500/Month",
    priceRange: "₹5000 - ₹8000",
    ac: false,
    nonAc: true,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking"],
    image: "/second.jpg",
  },
  {
    id: 3,
    type: "Boys",
    exclusive: true,
    verified: true,
    name: "AR LUXURY PG",
    location: "Madhapur, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "8.90 KMS",
    price: "₹8000/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking", "Gym"],
    image: "/third.jpg",
  },
  {
    id: 4,
    type: "Boys",
    exclusive: false,
    verified: true,
    name: "Green Nest Boys PG",
    location: "Hitech City, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "9.50 KMS",
    price: "₹7500/Month",
    priceRange: "₹7000 - ₹9000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Gym"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fourth.jpg",
  },
  {
    id: 5,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Sunshine Ladies PG",
    location: "Banjara Hills, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "7.80 KMS",
    price: "₹8500/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "TV"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fifth.jpg",
  },
  {
    id: 6,
    type: "Boys",
    exclusive: false,
    verified: false,
    name: "Cozy Stay PG for Boys",
    location: "Ameerpet, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "11.20 KMS",
    price: "₹6000/Month",
    priceRange: "₹5000 - ₹7000",
    ac: false,
    nonAc: true,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking"],
    image: "/sixth.jpg",
  },

  {
    id: 7,
    name: "Sunrise PG",
    location: "Bangalore, Indiranagar",
    type: "Boys",
    price: "₹8000 - ₹12000",
    amenities: ["WiFi", "Parking", "Food", "Laundry"],
    verified: true,
    acAvailable: true,
    nonAcAvailable: false,
    image: "/seventh.jpg",
  },
  {
    id: 8,
    name: "Cozy Nest PG",
    location: "Hyderabad, Madhapur",
    type: "Girls",
    price: "₹6000 - ₹10000",
    amenities: ["WiFi", "Security", "Power Backup"],
    verified: false,
    acAvailable: false,
    nonAcAvailable: true,
    image: "/first.jpg",
  },
  {
    id: 9,
    name: "Elite Stay PG",
    location: "Pune, Hinjewadi",
    type: "Unisex",
    price: "₹9000 - ₹15000",
    amenities: ["WiFi", "Gym", "CCTV", "Food"],
    verified: true,
    acAvailable: true,
    nonAcAvailable: true,
    image: "/fourth.jpg",
  },
  {
    id: 10,
    type: "Boys",
    exclusive: true,
    verified: true,
    name: "AR LUXURY PG",
    location: "Madhapur, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "8.90 KMS",
    price: "₹8000/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking", "Gym"],
    image: "/third.jpg",
  },
  {
    id: 11,
    type: "Boys",
    exclusive: false,
    verified: true,
    name: "Green Nest Boys PG",
    location: "Hitech City, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "9.50 KMS",
    price: "₹7500/Month",
    priceRange: "₹7000 - ₹9000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Gym"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fourth.jpg",
  },
  {
    id: 12,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Sunshine Ladies PG",
    location: "Banjara Hills, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "7.80 KMS",
    price: "₹8500/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "TV"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fifth.jpg",
  },
];

export const backendUrl = "http://localhost:5000";
