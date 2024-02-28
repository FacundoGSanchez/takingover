const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const PropertyScheme = new mongoose.Schema(
  {
    typePropertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "typeProperties",
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "modules",
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

PropertyScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("properties", PropertyScheme);
