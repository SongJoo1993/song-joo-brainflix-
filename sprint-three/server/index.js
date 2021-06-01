const express = require("express");
const app = express();
const cors = require("cors");
const videoRoutes = require("./routes/videos");

// .env File Configuration
require("dotenv").config();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

// Routes Inclusion
app.use("/api/v1/videoList", videoRoutes);

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})