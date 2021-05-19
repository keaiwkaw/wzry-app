const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:'Category'
  }
});
schema.virtual('childern', {
  localField: '_id',
  foreignField:'parent',
  justOne: false,
  ref:'Category'
})

schema.virtual('newList', {
  localField: '_id',
  foreignField:'categories',
  justOne: false,
  ref:'Article'
})
module.exports = mongoose.model("Category", schema, "category");
