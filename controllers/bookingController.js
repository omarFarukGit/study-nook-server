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
      message: "added booking  successfully",
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
};
