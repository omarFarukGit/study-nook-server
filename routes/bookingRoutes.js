import { Router } from "express";
import { bookingController } from "../controllers/bookingController.js";

const router = Router();

router.get("/booking/room", bookingController.getAllBooking);
router.post("/booking/room", bookingController.createUserBooking);

export const bookingRoter = router;
