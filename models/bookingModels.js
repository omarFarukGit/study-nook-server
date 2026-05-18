import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
  userId: {
    type: String,
  },

  image: String,
  roomName: String,

  date: {
    type: Date,
  },

  startTime: {
    type: String,
  },

  endTime: {
    type: String,
  },

  cost: {
    type: Number,
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
});

const BookingModel = model("bookings", bookingSchema);

export default BookingModel;
