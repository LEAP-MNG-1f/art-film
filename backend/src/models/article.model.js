import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

ArticleSchema.plugin(mongoosePaginate);

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
