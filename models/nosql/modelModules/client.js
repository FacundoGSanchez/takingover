const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ClientScheme = new mongoose.Schema(
  {
    name: {
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
          ref: "properties",
        },
      },
    ],
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contacts",
      },
    ],
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

ClientScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("clients", ClientScheme);
