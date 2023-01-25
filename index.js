const express = require("express");
const dotenv = require("dotenv").config();
const openaiRoutes = require("./routes/openaiRoutes");

const port = process.env.PORT || 5000;

const app = express();

// Enable BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", openaiRoutes);

app.listen(port, () => console.log("openai server is ready on port " + port));
