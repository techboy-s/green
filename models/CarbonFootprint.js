const mongoose = require("mongoose");

const CarbonFootPrintSchema = new mongoose.Schema(
  {
    EmissionbySpinning: {
      type: String,
      time: String,
      required: [true, "EmissionbySpinning is required "],
    },
    EmissionbyTransPotation: {
      type: String,
      time: String,
      required: [true, "EmissionbyTransPotation is required"],
    },
    EmissionbyCarding: {
      type: String,
      time: String,
      required: [true, "EmissionbyCarding is required"],
    },
    EmissionbyHeatingAndCooling: {
      type: String,
      time: String,
      required: [true, "EmissionbyHeatingAndCooling "],
    },
  },
  { timestamps: true }
);

const dataModel = mongoose.model("CarbonFootPrint", CarbonFootPrintSchema);
module.exports = dataModel;
