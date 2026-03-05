const express = require("express");
const cors = require("cors");

const profileRoutes = require("./routes/profile");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/profile", profileRoutes);

app.listen(5001, () => {
  console.log("Server running on port 5001");
});