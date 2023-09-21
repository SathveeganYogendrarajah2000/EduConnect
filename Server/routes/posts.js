import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts); // get feed posts   // need to develop this with ML
router.get("/:userId/posts", verifyToken, getUserPosts); // get user posts

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost); // like post

export default router;
