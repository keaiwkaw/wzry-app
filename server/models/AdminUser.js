const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
    select: false,
    set(val) {
      return require("bcrypt").hasSync(val, 11);
    },
  },
});
module.exports = mongoose.model("AdminUser", schema, "adminuser");
