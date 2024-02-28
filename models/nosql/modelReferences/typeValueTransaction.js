const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TypeValueScheme = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "modules",
      },
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

TypeValueScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("typesValues", TypeValueScheme);
