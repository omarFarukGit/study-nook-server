import { Router } from "express";
import { bookingController } from "../controllers/bookingController.js";

const router = Router();

router.get("/booking/room", bookingController.getAllBooking);
router.post("/booking/room", bookingController.createUserBooking);
router.patch(
  "/booking/room/:userId/booking/:id",
  bookingController.updataUserbookingStatus,
);
router.get("/bookings/:userId", bookingController.userBookings);

export const bookingRoter = router;
