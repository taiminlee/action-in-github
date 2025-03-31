const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  //   res.send("🚀 Hello from Node.js + Express!");
  res.send("Test pipeline successful from GITHUB CI/CD 🧑‍💻");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
