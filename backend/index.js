const express = require("express");
const app = express();
const colors = require("colors");

// cors
const cors = require("cors");
app.use(
    cors({
      credentials: true,
      origin: ["https://twitter.netlify.app/"],
    })
  );
//

// data base
const db = require("./db");
db();
require("dotenv").config();
//

var multer = require('multer');
var upload = multer();
app.use(express.json());
// app.use(upload.array()); 

// routes

app.use("/t/media/image", express.static(__dirname + "/assets/Images"));
app.use("/t/media/both", express.static(__dirname + "/assets/Both"));
app.use("/t/media/video", express.static(__dirname + "/assets/Videos"));


app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/post"));


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend running on Port ${port}`.rainbow);
});