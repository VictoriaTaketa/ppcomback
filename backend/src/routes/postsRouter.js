const { Router } = require("express");
const router = Router();

const {
  listPosts,
  storePost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

router.get("/posts", listPosts);
router.post("/post/create", storePost);
// editar o post:
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

module.exports = router;
