const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ProviderScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contacts",
      },
    ],
    properties: [
      {
        typePropertyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "typesProperties",
        },
        propertyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "properties",
        },
      },
    ],
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

ProviderScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("providers", ProviderScheme);
