import { Router } from "express";
import { bookingController } from "../controllers/bookingController.js";

const router = Router();

router.get("/booking/room", bookingController.getAllBooking);
router.post("/booking/room", bookingController.createUserBooking);
router.patch(
  "/booking/room/:userId/booking/:id",
  bookingController.updataUserbookingStatus,
);

export const bookingRoter = router;
