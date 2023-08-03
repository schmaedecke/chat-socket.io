var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("boasvindas", (data) => {
    console.log(data);
  });

  socket.on("palavra", data =>{
    console.log(data)
    socket.emit("resultado", data + " - teste")
  })

});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(3001, () => {
  console.log(`listening on *:3001`);
});
