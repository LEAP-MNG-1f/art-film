import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const commentSchema = new mongoose.Schema(
  {
    article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
    content: { type: String, required: true },
    authorName: { type: String, required: true },
    likes: { type: Number, default: 0 },
    replies: [
      {
        content: { type: String, required: true },
        authorName: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

commentSchema.plugin(mongoosePaginate);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
