import { Router } from "express";
import { roomControllers } from "../controllers/roomControllers.js";

const router = Router();

router.get("/", roomControllers.getAllRoom);
router.get("/:id", roomControllers.getSingleRoom);
router.post("/", roomControllers.createRoomUser);
router.get("/user-room/:id", roomControllers.getRoomUser);

export const RoomRouter = router;
