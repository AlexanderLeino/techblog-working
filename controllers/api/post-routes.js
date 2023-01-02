const router = require("express").Router();
const { User, blogPost } = require("../../models");
const withAuth = require("../../utils/auth");

//create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await blogPost.create({
      title: req.body.blogTitle,
      body: req.body.blogBody,
      post_creator: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete posts //withAuth
router.delete("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await blogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/:id", withAuth, async (req, res) => {
  console.log("Your put route was hit");
  console.log(req.body);
  try {
    const postData = await blogPost.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
