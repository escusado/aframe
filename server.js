const Path = require("path");
const Express = require("express");
const webServer = Express();

const PORT = process.env.PORT || "8000";

webServer.use("/", Express.static(Path.join(__dirname, "/")));
webServer.use("/build.js", Express.static(Path.join(__dirname, "dist/build.js")));

webServer.get("/", (req, res) => {
  res.sendFile("dist/index.html", {
    root: Path.join(__dirname, "./")
  });
});

// Start web server
const Server = webServer.listen(PORT, () => {
  console.log(`Webserver ready in http://localhost:${PORT}`);
});
const Io = require("socket.io")(Server);

// Create Ui communication channel
Io.on("connection", function(socket) {
  console.log("UI connected", socket);
  socket.on("message", function(msg) {
    console.log("Sending Command: " + msg);
    RobotApi.sendCommand(msg);
  });
});


process.on("SIGINT", function() {
  process.exit(0);
});
process.on("SIGTERM", function() {
  process.exit(0);
});
