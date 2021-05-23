const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  banner: {
    type: String,
  },

  title: {
    type: String,
  },
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    }
  ],
  scores: {
    difficult: {type: Number},
    skills: {type: Number},
    attack: {type: Number},
    survival: {type: Number},
  },
  skills: [
    {
      icon: {type: String},
      name: {type: String},
      description: {type: String},
      tip: {type: String},
      delay: {type: String},
      cost: {type: String},
    },
  ],
  items1: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item",
    },
  ],
  items2: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item",
    },
  ],
  usageTip: {
    type: String,
  },
  battleTip: {
    type: String,
  },
  teamTip: {
    type: String,
  },
  partners: [
    {
      hero: {type: mongoose.SchemaTypes.ObjectId, ref: "Hero"},
      description: {type: String},
    },
  ],
});
module.exports = mongoose.model("Hero", schema, "hero");
