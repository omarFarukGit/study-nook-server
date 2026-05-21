import RoomModel from "../models/roomModels.js";

// const getAllRoom = async (req, res) => {
//   const result = await RoomModel.find();

//   try {
//     res.status(200).json({
//       success: true,
//       message: "all room get successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//       error: error,
//     });
//   }
// };

const getAllRoom = async (req, res) => {
  try {
    const search = req.query.search?.trim();

    let query = {};

    if (search) {
      query = {
        roomName: {
          $regex: search,
          $options: "i",
        },
      };
    }

    const result = await RoomModel.find(query);

    res.status(200).json({
      success: true,
      message: "all room get successfully",
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

const getSingleRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await RoomModel.findById(id);
    res.status(200).json({
      success: true,
      message: "all room get successfully",
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

const createRoomUser = async (req, res) => {
  const {
    userId: String,
    roomName,
    description,
    image,
    floor,
    capacity,
    hourlyRate,
    amenities,
    ownerName,
    ownerEmail,
    bookingCount,
  } = req.body;
  try {
    const result = await RoomModel.create({
      userId: String,
      roomName,
      description,
      image,
      floor,
      capacity,
      hourlyRate,
      amenities,
      ownerName,
      ownerEmail,
      bookingCount,
    });
    res.status(200).json({
      success: true,
      message: "create room  successfully",
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



const getRoomUser = async (req, res) => {
  const { userId } = req.params;
  console.log(req.params);

  try {
    const result = await RoomModel.find({ userId: userId });
    res.status(200).json({
      success: true,
      message: "user room get successfully",
      data: await result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const updateRoomUser = async (req, res) => {
  const { userId, id } = req.params;
  console.log("userId:", userId, "id", id);

  try {
    const updatedRoom = await RoomModel.findOneAndUpdate(
      { userId: userId, _id: id },
      { $set: req.body },
      { new: true },
    );

    if (!updatedRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found or not belongs to user",
      });
    }

    res.status(200).json({
      success: true,
      message: "user room update by user successfully",
      data: updateRoomUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const deleteUserRoom = async (req, res) => {
  const { userId, id } = req.params;
  console.log("userId:", userId, "id", id);

  try {
    const deleteUserRoom = await RoomModel.findByIdAndDelete({
      userId: userId,
      _id: id,
    });

    if (!deleteUserRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found or not belongs to user",
      });
    }

    res.status(200).json({
      success: true,
      message: "user room delete successfully",
      data: updateRoomUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const roomControllers = {
  getAllRoom,
  getSingleRoom,
  createRoomUser,
  getRoomUser,
  updateRoomUser,
  deleteUserRoom,
};
