const { User, blogPost } = require("../models");
const router = require("express").Router();

// html routes
router.get("/", async (req, res) => {
  try {
    const allBlogs = await blogPost.findAll({
      attributes: ["body", "title", "post_creator", "dateCreated"],
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
      ],
    });
    const serializedBlogs = allBlogs.map((post) => {
      return post.get({ plain: true });
    });
    if (req.session.loggedIn) {
      const loggedInUser = await User.findByPk(req.session.user_id);
      loggedInUser.get({ plain: true });
      res.render("home", {
        secondarytitle: "The Tech Blog",
        posts: serializedBlogs,
        loggedInUser: loggedInUser.userName,
      });
    } else {
      res.render("home", {
        secondarytitle: "The Tech Blog",
        posts: serializedBlogs,
      });
    }
  } catch (e) {
    res.json(e).status(404);
  }
});

//This route gets the dashboard page
router.get("/dashboard", async (req, res) => {
  if (req.session.loggedIn) {
    const loggedInUser = await User.findByPk(req.session.user_id);
    loggedInUser.get({ plain: true });
    const loggedInUserPosts = await blogPost.findAll({
      where: {
        post_creator: req.session.user_id,
      },
    });
    const userBlogs = await loggedInUserPosts.map((post) => {
      return post.get({ plain: true });
    });
    try {
      res.render("dashboard", {
        secondarytitle: "Your Dashboard",
        loggedInUser: loggedInUser.userName,
        post: userBlogs,
      });
    } catch (e) {
      res.json(e);
    }
  } else {
    try {
      res.render("dashboard", {
        secondarytitle: "Your Dashboard",
        loggedInUser: "Not Currently Signed In",
        loggedIn: true,
      });
    } catch (e) {
      console.log(e);
    }
  }
});

router.get("/login", (req, res) =>
  res.render("login", {
    secondarytitle: "The Tech Blog",
    signingIn: false,
  })
);

router.get("/signUpPage", (req, res) => {
  res.render("signUpPage", {
    secondarytitle: "The Tech Blog",
  });
});

router.get("/createNewPost", (req, res) => {
  if (req.session.loggedIn) {
    res.render("createNewPost", {
      secondarytitle: "The Tech Blog",
    });
  } else {
    res.redirect("/login");
  }
});

//This route gets the logout page
router.get("/logout", (req, res) =>
  res.render("home", {
    secondarytitle: "The Tech Blog",
  })
);
//TODO: When the user logs out they are redirected to the home page

// This route gets the login page
router.get("/login", (req, res) =>
  res.render("login", {
    secondarytitle: "The Tech Blog",
    signingIn: true,
  })
);

router.get(`/edit/:id`, async (req, res) => {
  const selectedPost = await blogPost.findByPk(req.params.id, {
    attributes: ["title", "body"],
  });

  console.log(selectedPost);
  res.render("editPost", {
    secondarytitle: "The Tech Blog",
    title: selectedPost.title,
    body: selectedPost.body,
  });
});

module.exports = router;
