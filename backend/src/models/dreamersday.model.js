import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const DreamersDaySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  createdAt: { type: Date, default: Date.now },
});

DreamersDaySchema.plugin(mongoosePaginate);

const DreamersDay = mongoose.model("DreamersDay", DreamersDaySchema);

export default DreamersDay;
