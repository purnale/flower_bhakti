const express = require("express");
const connectDb = require("./config/connectDb");
const app = express();
const cors = require('cors');

const dotenv = require("dotenv").config();

// custom port
const PORT = process.env.PORT || 3001;

// database connection
connectDb();

// middle ware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/flowers", require("./routes/flowers.routes"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
