import mongoose, { Schema, model } from "mongoose";

// Define the Movie Schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: [String], // Array of genres
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  actors: {
    type: [String], // Array of actors
    required: true,
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Movie Model
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
