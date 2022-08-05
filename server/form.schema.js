const mongoose = require("mongoose");

const formModel = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    gst_no: {
      type: String,
      required: true,
    },
    business: {
      type: String,
      required: true,
    },
    loan_amount: {
      type: Number,
      required: true,
    },
    interest: {
      type: Number,
      default: 10,
    },
    loan_tenure: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormModel", formModel);
