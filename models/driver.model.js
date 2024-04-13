const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const driverSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  onBoardDate: { type: String },
  active: {type: Boolean, default: false},
  vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle' }
},
{
  timestamps: true
})

module.exports = model("Driver", driverSchema);
