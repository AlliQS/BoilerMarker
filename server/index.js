const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./path/to/static/assets")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./path/to/index.html"));
});

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
//at end
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
