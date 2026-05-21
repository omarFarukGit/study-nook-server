import { Router } from "express";
import { bookingController } from "../controllers/bookingController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/booking/room", bookingController.getAllBooking);
router.post("/booking/room", verifyToken, bookingController.createUserBooking);
router.patch(
  "/booking/room/:userId/booking/:id",
  bookingController.updataUserbookingStatus,
);
router.get("/bookings/:userId", verifyToken, bookingController.userBookings);

export const bookingRoter = router;
