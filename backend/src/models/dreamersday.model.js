import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const DreamersDaySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true, // e.g., "10:00 AM - 12:00 PM"
  },
  location: {
    type: String,
    required: true, // e.g., "Ulaanbaatar, Mongolia"
  },
  imageUrl: {
    type: String,
    required: false, // Optional: Image for the event
  },
  organizer: {
    type: String,
    required: true, // e.g., "ArtFilm Team"
  },
  isActive: {
    type: Boolean,
    default: true, // Indicates if the event is currently active
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set creation date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Update automatically when modified
  },
});

DreamersDaySchema.plugin(mongoosePaginate);

const DreamersDay = mongoose.model("DreamersDay", DreamersDaySchema);

export default DreamersDay;
