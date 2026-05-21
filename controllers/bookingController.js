import BookingModel from "../models/bookingModels.js";

const getAllBooking = async (req, res) => {
  const result = await BookingModel.find();

  try {
    res.status(200).json({
      success: true,
      message: "all booking get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const createUserBooking = async (req, res) => {
  const { userId, image, roomName, date, startTime, endTime, cost, status } =
    req.body;

  try {
    // ❌ same room + overlapping time check
    const existingBooking = await BookingModel.findOne({
      roomName,
      date,
      $or: [
        {
          startTime: { $lt: endTime },
          endTime: { $gt: startTime },
        },
      ],
    });

    // already booked
    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "This room is already booked at this time",
      });
    }

    // ❌ same start/end time
    if (startTime === endTime) {
      return res.status(400).json({
        success: false,
        message: "Start time and end time cannot be same",
      });
    }

    // ✅ create booking
    const result = await BookingModel.create({
      userId,
      image,
      roomName,
      date,
      startTime,
      endTime,
      cost,
      status,
    });

    res.status(200).json({
      success: true,
      message: "added booking successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const updataUserbookingStatus = async (req, res) => {
  const { userId, id } = req.params;
  const { status } = req.body;

  try {
    const updatedRoom = await BookingModel.findOneAndUpdate(
      { userId: userId, _id: id },
      { $set: req.body },
      { new: true },
    );

    if (!updatedRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found or not belongs to bookings",
      });
    }

    res.status(200).json({
      success: true,
      message: "user bookig status update by user successfully",
      data: updatedRoom,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const userBookings = async (req, res) => {
  const { userId } = req.params;
  const result = await BookingModel.find({ userId: userId });
 

  try {
    res.status(200).json({
      success: true,
      message: "all booking get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const bookingController = {
  getAllBooking,
  createUserBooking,
  updataUserbookingStatus,
  userBookings,
};
