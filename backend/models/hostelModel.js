import mongoose from "mongoose";

const hostelSchema = mongoose.Schema({
  hostel_name: { type: String, required: true },
  address: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  category: { type: String, required: true },
  hostel_owner_name: { type: String, required: true },
  owner_contact: { type: Number, required: true },
  hostel_image: { type: String, required: true },
  amenties: { type: Array, required: true },
  rooms_list: { type: Array, required: true },
});

const hostel = mongoose.models.hostel || mongoose.model("hostel", hostelSchema);
export default hostel;
