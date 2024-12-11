// import mongoose, { Schema, model } from "mongoose";

// // Define the Movie Schema
// const movieSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   releaseYear: {
//     type: Number,
//     required: true,
//   },
//   genre: {
//     type: [String], // Array of genres
//     required: true,
//   },
//   rating: {
//     type: Number,
//     min: 0,
//     max: 10,
//     required: true,
//   },
//   director: {
//     type: String,
//     required: true,
//   },
//   actors: {
//     type: [String], // Array of actors
//     required: true,
//   },
//   reviews: [
//     {
//       user: {
//         type: String,
//         required: true,
//       },
//       rating: {
//         type: Number,
//         min: 0,
//         max: 5,
//         required: true,
//       },
//       comment: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Create the Movie Model
// const Movie = mongoose.model("Movie", movieSchema);

// export default Movie;

import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Киноны нэр заавал шаардлагатай"],
    trim: true,
    minlength: [2, "Киноны нэр хамгийн багадаа 2 тэмдэгт байна"],
    maxlength: [200, "Киноны нэр хамгийн ихдээ 200 тэмдэгт байна"],
  },
  releaseYear: {
    type: Number,
    required: [true, "Гарсан он заавал шаардлагатай"],
    min: [1900, "Гарсан он хамгийн багадаа 1900 байна"],
    max: [
      new Date().getFullYear(),
      "Гарсан он одоогийн онаас хойш байж болохгүй",
    ],
  },
  genre: {
    type: [String],
    required: [true, "Жанр заавал шаардлагатай"],
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "Жанрын жагсаалт хоосон байж болохгүй",
    },
  },
});

movieSchema.plugin(mongoosePaginate);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
