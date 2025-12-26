const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// serve your existing static files (index.html, minigame.html, etc.)
app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
