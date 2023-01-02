const express = require("express");
const app = express();

app.get("/", function (req, resp) {
  resp.send("229170 Mangesh gawali");
});

app.listen(4000, function () {
  console.log("Server running on 4000");
});
