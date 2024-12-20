const express = require("express");
const dotenv = require("dotenv");

// route files
const bootcamps = require("./routes/bootcamps");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// initialize app
const app = express();

app.use("/api/v1/bootcamps", bootcamps);

const PORT = 5000;

// set up a server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
