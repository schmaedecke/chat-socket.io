var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("X desconectado: " + socket.id);
  });

  socket.on("msg", (data) => {
    io.emit("showMsg", data);
    console.log(data);
  });
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(3001, () => {
  console.log(`listening on *:3001`);
});
