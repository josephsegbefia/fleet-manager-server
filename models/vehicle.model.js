const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const vehicleSchema = new Schema({
  make: { type: String, required: true},
  model: { type: String, required: true },
  regNumber: { type: String, required: true },
  color: { type: String, required: true },
  regDate: { type: String },
  insuranceNumber: { type: String},
  nextInsurDate: { type: String },
  nextRoadWorthyDate: { type: String },
  active: {type: Boolean, default: false},
  driver: { type: Schema.Types.ObjectId, ref: 'Driver' }
},
{
  timestamps: true
})

module.exports = model("Vehicle", vehicleSchema);
