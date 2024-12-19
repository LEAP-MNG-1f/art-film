import Article from "../models/article.model.js";
import Comment from "../models/comment.model.js";
import catchAsync from "../utils/catchAsync.js";
import mongoose from "mongoose";

export const getComments = catchAsync(async (req, res) => {
  const { articleId } = req.params; // Get the articleId from the request params
  const {
    page = 1,
    limit = 10,
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
    // Paginate comments for a specific article
    const result = await Comment.paginate({ article: articleId }, options); // Assuming "article" is the reference to the article

    res.status(200).json({
      success: true,
      data: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Failed to fetch comments.",
    });
  }
});

export const createComment = catchAsync(async (req, res) => {
  const { articleId } = req.params; // Get articleId from the URL
  const { content, authorName, likes } = req.body; // Get content and authorName from request body

  // Validate comment fields
  if (!content || !authorName) {
    return res.status(400).json({
      success: false,
      message: "Content and author name are required.",
    });
  }

  try {
    // Ensure the article exists before creating the comment
    const article = await Article.findById(articleId);
    if (!article) {
      return res
        .status(404)
        .json({ success: false, message: "Article not found." });
    }

    // Create a new comment and associate it with the article
    const newComment = await Comment.create({
      article: articleId, // Associate the comment with the article by its ID
      content,
      authorName,
      likes,
    });

    // After creating the comment, update the article's comments array
    article.comments.push(newComment._id),
      newComment.content,
      newComment.authorName,
      newComment.likes; // Push the new comment _id to the article's comments array
    await article.save();

    // Return the newly created comment in the response
    res.status(201).json({
      success: true,
      data: newComment,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Failed to create the comment. Please try again.",
    });
  }
});

export const likeComment = catchAsync(async (req, res) => {
  const { commentId } = req.params; // Get the commentId from the request params

  try {
    const comment = await Comment.findById(commentId); // Find the comment by ID

    if (!comment) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" }); // Handle case where the comment is not found
    }

    // Increment the like count
    comment.likes += 1;
    await comment.save(); // Save the updated comment

    res.status(200).json({
      success: true,
      message: "Comment liked successfully",
      data: comment, // Return the updated comment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to like the comment. Please try again.",
    });
  }
});

// Reply to a Comment
export const replyToComment = catchAsync(async (req, res) => {
  const { commentId } = req.params; // Get commentId from the URL params
  const { content, authorName } = req.body; // Get reply content and author name

  // Validate reply fields
  if (!content || !authorName) {
    return res.status(400).json({
      success: false,
      message: "Content and author name are required.",
    });
  }

  try {
    // Find the original comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found." });
    }

    // Create a new reply and add it to the comment's replies array
    const newReply = {
      content,
      authorName,
    };
    comment.replies.push(newReply);
    await comment.save(); // Save the updated comment with the new reply

    res.status(201).json({
      success: true,
      message: "Reply added successfully",
      data: newReply,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Failed to add the reply. Please try again.",
    });
  }
});
