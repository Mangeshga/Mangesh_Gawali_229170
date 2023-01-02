const express = require("express");
const app = express();

app.get("/", function (req, resp) {
  resp.send("Name=Mangesh Gawali");
  resp.send("Roll no=229170");
  resp.send("Course=C-DAC");
});

app.listen(4000, function () {
  console.log("Server running on 4000");
});
