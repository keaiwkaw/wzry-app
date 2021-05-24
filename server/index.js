const express = require("express");
const app = express();

app.use(require("cors")());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/web", express.static(__dirname + "/web"));
app.use("/admin", express.static(__dirname + "/admin"));

app.set("secret", "gdhagyd");

require("./plugins/mongoose.js")(app);
require("./routes/admin")(app);
require("./routes/web")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
