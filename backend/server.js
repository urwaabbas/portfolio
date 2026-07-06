const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express();

app.use(cors());
app.use(express.json());

const requiredEnvVars = ["MONGO_URI", "JWT_SECRET", "PORT"];
const missing = requiredEnvVars.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`❌ ERROR: Missing required .env variables: ${missing.join(", ")}`);
  process.exit(1);
}


mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // fail after 10s instead of hanging
    });
    console.log(" Excellent! Connected to MongoDB securely.");
  } catch (err) {
    console.error(" Database connection error:", err.message);
    console.error(
      "If you see 'querySrv ECONNREFUSED', this is a DNS/network issue, not a code issue. " +
      "Try switching your DNS to 8.8.8.8, or use a non-SRV connection string."
    );
  }
};

connectDB();


mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected.");
});
mongoose.connection.on("reconnected", () => {
  console.log("🔄 MongoDB reconnected.");
});

// Simple test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello! The backend server is working perfectly." });
});

const contact_Routes = require("./routes/contact_Routes");
app.use("/api/contact", contact_Routes);

const auth_routes = require("./routes/auth_routes");
app.use("/api/auth", auth_routes);


app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ message: "Something went wrong on the server." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is happily running on port: ${PORT}`);
});