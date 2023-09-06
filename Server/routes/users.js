import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser); // get user by id
router.get("/:id.friends", verifyToken, getUserFriends); // get user friends

/* UPDATE */
router.put("/:id/:friendId", verifyToken, addRemoveFriend); // add or remove friend

export default router;
