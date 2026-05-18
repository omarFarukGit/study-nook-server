import { Router } from "express";
import { roomControllers } from "../controllers/roomControllers.js";

const router = Router();

router.get("/", roomControllers.getAllRoom);
router.get("/:id", roomControllers.getSingleRoom);
router.post("/", roomControllers.createRoomUser);
router.get("/user-room/:userId", roomControllers.getRoomUser);
router.patch("/user-room/:userId/room/:id", roomControllers.updateRoomUser);
router.delete("/user-room/:userId/room/:id", roomControllers.deleteUserRoom);

export const RoomRouter = router;
