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
      "Гарсан он одоогийн онooс хойш байж болохгүй",
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
  writer: {
    type: [String],
    required: [true, "Зохиолч заавал шаардлагатай"],
  },
  director: {
    type: [String],
    required: [true, "Найруулагч заавал шаардлагатай"],
  },
  rating: {
    type: Number,
    default: 0,
    min: [0],
    max: [10, "Рейтинг хамгийн ихдээ 10 байх ёстой"],
  },
  trailerUrl: { type: String },
  imageUrl: { type: String, required: true },
  relatedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movies" }],
  createdAt: { type: Date, default: Date.now },
});

movieSchema.plugin(mongoosePaginate);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
