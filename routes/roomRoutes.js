import { Router } from "express";
import { roomControllers } from "../controllers/roomControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/", roomControllers.getAllRoom);
router.get("/:id", roomControllers.getSingleRoom);
router.post("/", verifyToken, roomControllers.createRoomUser);
router.get("/user-room/:userId", verifyToken, roomControllers.getRoomUser);
router.patch("/user-room/:userId/room/:id", roomControllers.updateRoomUser);
router.delete("/user-room/:userId/room/:id", roomControllers.deleteUserRoom);

export const RoomRouter = router;
