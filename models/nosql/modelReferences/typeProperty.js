const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TypesPropertyScheme = new mongoose.Schema(
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

TypesPropertyScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("typesProperty", TypesPropertyScheme);
