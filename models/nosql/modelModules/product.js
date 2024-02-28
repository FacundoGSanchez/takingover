const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ProductScheme = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    properties: [
      {
        typePropertyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "typesProperties",
        },
        propertyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Properties",
        },
      },
    ],
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

ProductScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("products", ProductScheme);
