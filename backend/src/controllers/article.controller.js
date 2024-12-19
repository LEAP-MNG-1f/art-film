import Article from "../models/article.model.js";
import catchAsync from "../utils/catchAsync.js"; // Assuming you have a utility to catch async errors

// Get Articles with pagination, sorting, and ordering
export const getArticles = catchAsync(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sort = "createdAt",
    order = "desc",
  } = req.query;

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { [sort]: order === "desc" ? -1 : 1 },
  };

  try {
    const result = await Article.paginate({}, options);
    res.status(200).json({
      success: true,
      data: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch articles." });
  }
});

// Get a single article by ID
export const getArticleById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const article = await Article.findById(id).populate("comments");

  if (!article) {
    return res
      .status(404)
      .json({ success: false, message: "Article not found" });
  }

  res.status(200).json({ success: true, data: article });
});

// Create a new article
export const createArticle = catchAsync(async (req, res) => {
  const { title, content, image } = req.body;

  if (!title || !content || !image) {
    return res.status(400).json({
      success: false,
      message: "Title, content, and image are required.",
    });
  }

  try {
    const newArticle = await Article.create({
      title,
      content,
      image,
    });
    res.status(201).json({ success: true, data: newArticle });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create article." });
  }
});

// Update an article
export const updateArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;

  const updatedArticle = await Article.findByIdAndUpdate(
    id,
    { title, content, image },
    { new: true }
  );

  if (!updatedArticle) {
    return res
      .status(404)
      .json({ success: false, message: "Article not found" });
  }

  res.status(200).json({ success: true, data: updatedArticle });
});

// Delete an article
export const deleteArticle = catchAsync(async (req, res) => {
  const { id } = req.params;

  const deletedArticle = await Article.findByIdAndDelete(id);

  if (!deletedArticle) {
    return res
      .status(404)
      .json({ success: false, message: "Article not found" });
  }

  res
    .status(200)
    .json({ success: true, message: "Article deleted successfully" });
});
