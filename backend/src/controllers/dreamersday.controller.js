import DreamersDay from "../models/dreamersday.model.js";
import catchAsync from "../utils/catchAsync.js";
import mongoose from "mongoose";

// Get DreamersDay events with pagination, sorting, and ordering
export const getDreamersDays = catchAsync(async (req, res) => {
  const {
    page = 1,
    limit = 40,
    sort = "createdAt",
    order = "desc",
  } = req.query;

  // Ensure page and limit are numbers
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { [sort]: order === "desc" ? -1 : 1 },
  };

  try {
    const result = await DreamersDay.paginate({}, options);
    res.status(200).json({
      success: true,
      data: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Dreamers' Day events.",
    });
  }
});

// Get a DreamersDay event by ID
export const getDreamersDayById = catchAsync(async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Dreamers' Day event ID" });
  }

  // Query the event by its ObjectId
  const event = await DreamersDay.findById(id);

  if (!event) {
    return res.status(404).json({ success: false, message: "Event not found" });
  }

  res.status(200).json({ success: true, data: event });
});

// Create a new DreamersDay event
export const createDreamersDay = catchAsync(async (req, res) => {
  const eventData = req.body;

  try {
    const newEvent = await DreamersDay.create(eventData);
    res.status(201).json({ success: true, data: newEvent });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create the Dreamers' Day event. Please try again.",
    });
  }
});

// Update a DreamersDay event
export const updateDreamersDay = catchAsync(async (req, res) => {
  const { id } = req.params;
  const eventData = req.body;

  try {
    const updatedEvent = await DreamersDay.findByIdAndUpdate(id, eventData, {
      new: true,
      runValidators: true,
    });

    if (!updatedEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, data: updatedEvent });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update the Dreamers' Day event. Please try again.",
    });
  }
});

// Delete a DreamersDay event
export const deleteDreamersDay = catchAsync(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await DreamersDay.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete the Dreamers' Day event. Please try again.",
    });
  }
});
