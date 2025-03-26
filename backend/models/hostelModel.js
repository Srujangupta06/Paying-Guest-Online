import mongoose from "mongoose";

const hostelSchema = mongoose.Schema({
  
  hostel_name:{type:String, required:true },
  hostel_category:{type:String, required:true},
  hostel_address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: Number, required: true }
    },
    room_details:[ {
        room_type: { type: String, required: true },  // Example: "Single", "Double"
        room_rent: { type: Number, required: true }, // Monthly rent amount
        room_imgs: { type: [String], required: true }, // Array of image URLs
        vacancies: { type: Number, required: true } // Available seats
    }],
    amenities: {
        wifi: { type: Boolean, required: true },         
        laundry: { type: Boolean, required: true },      
        parking: { type: Boolean, required: true },      
        hot_water: { type: Boolean, required: true }    
    },
    owner_name:{type:String, required:true},
    contact_no:{type:Number, required:true },
    hostel_imageurl:{type:String, required:true},


});

export const hostel = mongoose.models.hostel || mongoose.model("hostel", hostelSchema);
;
