import { Router } from "express";
import { roomControllers } from "../controllers/roomControllers.js";

const router = Router();

router.get("/", roomControllers.getAllRoom);
router.get("/:id", roomControllers.getSingleRoom);
router.post("/", roomControllers.createRoomUser);
router.get("/user-room/:userId", roomControllers.getRoomUser);
router.patch("/user-room/:userId/:id", roomControllers.updateRoomUser);

export const RoomRouter = router;
