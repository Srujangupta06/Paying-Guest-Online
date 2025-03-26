import { hostel } from "../models/hostelModel.js";
import cloudinary from "../cloudinary/cloudinary.js";

// Upload Image to Cloudinary Function
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "hostels", // Cloudinary folder name
    });
    return result.secure_url; // Return the Cloudinary URL
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};
// Create a new hostel with image upload
export const createhostel = async (req, res) => {
  try {
    const { hostel_name, hostel_category, hostel_address, room_details, amenities, owner_name, contact_no } = req.body;

    // Handle uploaded images

    const hostel_imageurl = req.files["hostel_image"]
      ? await uploadToCloudinary(req.files["hostel_image"][0].path)
      : "";



    const room_imgs = req.files["room_imgs"]
      ? await Promise.all(req.files["room_imgs"].map(file => uploadToCloudinary(file.path)))
      : [];
    // console.log(req.files["hostel_image"])
    const newHostel = new hostel({
      hostel_name,
      hostel_category,
      hostel_address: JSON.parse(hostel_address),
      room_details: JSON.parse(room_details).map((room, index) => ({
        ...room,
        room_imgs: room_imgs[index] || "" // Store uploaded Cloudinary URLs
      })),
      amenities: JSON.parse(amenities),
      owner_name,
      contact_no,
      hostel_imageurl,
    });

    const savedHostel = await newHostel.save();
    res.status(200).json(savedHostel);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};



export const gethostels = async (req, res) => {

  try {
    const hostels = await hostel.find()
    res.json({ data: hostels })
  }

  catch (err) {
    res.status(500).json({ message: "server error", err })
  }
}


export const gethostelsbyid = async (req, res) => {
  try {
    const id = req.params.hostelID
    //   console.log(id)
    const hostels = await hostel.find({ _id: id }).lean();
    // console.log(typeof (hostels))

    hostels.forEach(hostel => {
      hostel.rating = 3.5
    });

    res.json({ hostels })
  }
  catch (err) {
    res.status(500).json({ message: "server error", err })
  }
}