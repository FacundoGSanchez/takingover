const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ShoppingScheme = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "providers",
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
    propertiesShopping: [
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

ShoppingScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("shopping", ShoppingScheme);
