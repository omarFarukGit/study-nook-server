import { model, Schema } from "mongoose";

const roomSchema = new Schema(
  {
    userId: String,
    roomName: String,
    description: String,
    image: String,
    floor: String,
    capacity: Number,
    hourlyRate: Number,
    amenities: [String],
    ownerName: String,
    ownerEmail: String,
    bookingCount: Number,
  },
  { timestamps: true },
);

const RoomModel = model("Room", roomSchema);
export default RoomModel;
