const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ModuleScheme = new mongoose.Schema(
  {
    description: {
      type: String,
    },
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

ModuleScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("modules", ModuleScheme);
