const dataModel = require("../models/CarbonFootprint");

// add the data
exports.addCfData = async (req, res) => {
  try {
    const newModel = new dataModel(req.body);
    await newModel.save();
    res.status(201).send("Data Added Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//get all the data
exports.getAlldata = async (req, res) => {
  try {
    const userData = await dataModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

// module.exports = addCfData;
