import express from "express";

// App initialization
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "welcome to typescript application🔥" });
});

// Server Listening
app.listen(3000, () => console.log("Server up and running at port 4000..."));
