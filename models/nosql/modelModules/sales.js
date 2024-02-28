const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const SaleScheme = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clients",
    },
    dates: [
      {
        propertyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "properties",
        },
        value: {
          type: Date,
        },
      },
    ],
    propertiesSales: [
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
    products: [
      {
        position: {
          type: Number,
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        cant: {
          type: Number,
        },
        transactionValues: [
          {
            typeValueTransactionId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "typesValuesTransaction",
            },
            value: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true, //TODO CreatedAT, updateAT
    versionKey: false,
  }
);

SaleScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("sales", SaleScheme);
