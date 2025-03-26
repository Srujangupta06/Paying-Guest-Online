import express from "express";
import { addHostel } from "../controllers/hostelController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const hostelRouter = express.Router();

hostelRouter.post(
  "/add-hostel",

  upload.fields([
    {
      name: "banner_image",
      maxCount: 1,
    },

    {
      name: "room_images",
      maxCount: 3,
    },
  ]),
  addHostel
);

// hostelRouter.get("/list-hostels", getHostels);

// hostelRouter.delete("/remove-hostel", removeHostel);

export default hostelRouter;
