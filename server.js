const path = require("path");
const express = require("express");
const app = express();
const fs = require('fs');
const cors = require("cors");
const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, "../stackdemo/public");
app.use(express.static(publicPath));



const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://stacklinebackend.herokuapp.com/",
  "https://stacklinedemo.herokuapp.com/",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join("build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server is up!", port);
});


