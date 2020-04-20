const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));

router.get("/", function (req, res, next) {
  /* etc */
});
router.post("/", function (req, res, next) {
  /* etc */
});
router.put("/:userId", function (req, res, next) {
  /* etc */
});
router.delete("/:userId", function (req, res, next) {
  /* etc */
});

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

router.get("/me", (req, res, next) => {
  res.json(req.user);
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log("No such user found:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else if (!user.correctPassword(req.body.password)) {
      console.log("Incorrect password for user:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else {
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      req.login(user, (err) => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.delete("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});
