const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());

// app.get("/", function (req, res) {
//     console.log("hello from")
//   });

const datauser = require("./routes/data");

app.use("/api", datauser);

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  // console.log(`Server running on ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

module.exports = app;
