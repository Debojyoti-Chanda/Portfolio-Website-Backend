// All server logic connected over here
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const routes = require("./routes/index");

dotenv.config(); //This will load the variables from your .env file into process.env

const app = express();

// Body parser middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST ,PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next();
})

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
