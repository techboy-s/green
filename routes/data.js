const express = require("express");
// const { addCfData } = require("../controller/data");
const { addCfData, getAlldata } = require("../controller/data");

const router = express.Router();

//add data
router.post("/adddata", addCfData);

//get data
router.get("/getdata", getAlldata);

module.exports = router;
