// index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Test
app.get("/", (req, res) => {
  res.send("MindMend Backend Running ✅");
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
