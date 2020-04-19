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
