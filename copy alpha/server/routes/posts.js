import express from "express";
import {
  getPosts,
  creatPosts,
  editPosts,
  deletePosts,
  likeupdate,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/getposts", getPosts);
router.post("/creatpost", creatPosts);
router.put("/editPosts/:postid", editPosts);
router.delete("/deletePosts/:postid", deletePosts);
router.put("/likeupdatePost/:postid", likeupdate);

export default router;

//http://localhost:5000/posts
//njib all posts
// get public
//creat post
//http://localhost:5000/posts/creatpost
// post public
//update post
//http://localhost:5000/posts/editPosts
// put
//delete l3ze
//http://localhost:5000/posts/deletePosts
//delete
