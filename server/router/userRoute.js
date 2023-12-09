import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
  getAllFavourites,
  toFav,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav", getAllFavourites);

export { router as userRoute };
